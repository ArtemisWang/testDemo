/*
 * @Author: yating.wang
 * @Date: 2021-11-30 14:13:43
 * @LastEditTime: 2021-11-30 14:49:14
 * @LastEditors: yating.wang
 * @Description: EventEmitter消息订阅
 */

class EventEmitter{
  constructor() {
    this._maxListeners = 10
    this._events = {}
  }
  // 添加事件
  addListener(event, listener) {
    if (!this._events[event]) {
      this._events[event]=[listener]
    } else {
      if (this._events[event].length >= this._maxListeners) {
        throw new Error('监听器数量超过限制，请使用setMaxListeners方法扩容')
      }
      this._events[event].push(listener)
    }
  }
  // 移除事件
  removeListener(event, listener) {
    if (!listener) {
      delete this._events[event]
    } else {
      this._events[event] = this._events[event].filter(item=>item!==listener&&item.origin!==listener)
    }
  }
  // 设置最大监听器容量
  setMaxListeners(n) {
    this._maxListeners = n
  }
  // 只能执行一次的监听器
  once(event, listener) {
    const only = (...args) => {
      listener.apply(this, args)
      this.removeListener(event, listener) // 这里是only或者listener都可以
    }
    only.origin = listener
    this.addListener(event, only)
  }
  // 执行某一事件的所有监听器
  emit(event, ...args) {
    this._events[event].forEach(item => {
      item.apply(this, args)
    })
  }
}
var emitter = new EventEmitter();

var onceListener = function(args) {
  console.log('我只能被执行一次', args, this);
}

var listener = function(args) {
  console.log('我是一个listener', args, this);
}

emitter.once('click', onceListener);
emitter.emit('click', '1')
emitter.emit('click', '2')
emitter.emit('click', '3')

emitter.addListener('click', listener);

emitter.emit('click', '4');
emitter.emit('click', '5');

emitter.removeListener('click', listener);
emitter.emit('click', '6');