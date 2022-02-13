/*
 * @Author: yating.wang
 * @Date: 2022-02-12 13:03:53
 * @LastEditTime: 2022-02-13 10:27:42
 * @LastEditors: yating.wang
 * @Description: 
 */
function myCall(context) {
  if (typeof this !== 'function') {
    throw new typeError('type should be function')
  }
  context = context || window
  context.fn = this
  const args = [...arguments].slice(1)
  const result = context.fn(...args)
  delete context.fn
  return result
}

function myApply(context) {
  if (typeof this !== 'function') {
    throw new typeError('type should be function')
  }
  context = context || window
  context.fn = this
  let result
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}

Function.prototype.myBind = function(context) {
  if (typeof this !== 'function') {
    throw new typeError('type should be function')
  }
  context = context || window
  const fx=this
  const args = [...arguments].slice(1)
  return function F() {
    if (this instanceof F) {
      return new fx(...args,...arguments)
    }
    return fx.apply(context,...args,...arguments)
  }
}

class EventEmitter{
  constructor() {
    this.events = new Set()
    this.hash = new Map()
  }
  addListener(event, listener) {
    if (this.events.has(event)) {
      this.hash.get(event).push(listener)
    } else {
      this.events.add(event)
      this.hash.set(event,[listener])
    }
  }
  removeListener(event, listener) {
    if (this.events.has(event)) {
      let listeners = this.hash.get(event)
      listeners = listeners.filter(lis => {
        return lis!==listener
      })
      this.hash.set(event,listeners)
    }
  }
  emit(event) {
    this.hash.get(event).forEach(lis => {
      if (typeof lis === 'function') {
        lis()
      } else if(lis.type==='once'){
        lis.fn()
        this.removeListener(event, lis)
      }
    })
  }
  once(event, listener) {
    if (this.events.has(event)) {
      this.hash.get(event).push({type:'once', fn: listener})
    } else {
      this.events.add(event)
      this.hash.set(event, [{
        type: 'once',
        fn: listener
      }])
    }
  }
}
var emitter = new EventEmitter();

var onceListener = function(args) {
  console.log('我只能被执行一次', args, this);
}

var listener = function(args) {
  console.log('我是一个listener', args, this);
}

// emitter.once('click', onceListener);
// emitter.addListener('click', listener);

// emitter.emit('click');
// emitter.emit('click');

// emitter.removeListener('click', listener);
// emitter.emit('click');
// emitter.emit('click');


function debounce(fn, time) {
  let timer = null
  return function(){
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...arguments)
      timer=null
    }, time)
  }
}

function throttle(fn, time) {
  let timer
  return function() {
    if (timer) return
    timer = setTimeout(() => {
      fn(...arguments)
      timer=null
    }, time)
  }
}

// 深拷贝
function deepClone(obj) {
  if (!obj) return
  if (typeof obj !== 'object' || obj==null) return obj
  let newObj
  if (obj instanceof Array) {
    newObj = []
  } {
    newObj = {}
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key]=deepClone(obj[key])
    }
  }
  return newObj
}

Array.prototype.myFilter = function(fn) {
  const res = []
  let index = 0
  for (let i of this) {
    if (fn(i, index, this)) {
      res.push(i)
    }
    index++
  }
  return res
}

Array.prototype.myFlat = function(depth) {
  const isDeep = this.some(item=>item instanceof Array)
  if (!isDeep) return this
  if (!depth || depth === 1) {
    return [].concat(...this)
  }
  const temp = [].concat(...this)
  return temp.myFlat(depth-1)
}

console.log([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]].myFlat(2))