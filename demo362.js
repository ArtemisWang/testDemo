/*
 * @Author: yating.wang
 * @Date: 2021-12-25 15:08:41
 * @LastEditTime: 2021-12-25 15:45:04
 * @LastEditors: yating.wang
 * @Description: 
 */
class Observer {
  constructor(value) {
    this.value = value
    if (!value || (typeof value !== 'object')) {
      return
    } else {
      this.walk(value)
    }
  }
  walk(obj) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }
}
// 订阅者Dep，存放观察者对象
class Dep {
  constructor() {
    this.subs = []
  }
  /*添加一个观察者对象*/
  addSub(sub) {
    this.subs.push(sub)
  }
  /*依赖收集，当存在Dep.target的时候添加观察者对象*/
  depend() {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }
  // 通知所有watcher对象更新视图
  notify() {
    this.subs.forEach((sub) => {
      sub.update()
    })
  }
}
class Watcher {
  constructor() {
    /* 在new一个Watcher对象时将该对象赋值给Dep.target，在get中会用到 */
    Dep.target = this;
  }
  update() {
    console.log('视图更新啦')
  }
  /*添加一个依赖关系到Deps集合中*/
  addDep(dep) {
    dep.addSub(this)
  }
}

function defineReactive(obj, key, val) {
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      dep.depend() /*进行依赖收集*/
      console.log(`${key}被纳入依赖收集，现在的dep.subs为：${dep.subs}`)
      return val
    },
    set: function reactiveSetter(newVal) {
      if (newVal === val) return
      dep.notify()
      val = newVal
    }
  })
}
class Vue {
  constructor(options) {
    this._data = options.data
    new Observer(this._data) // 所有data变成可观察的
    new Watcher() // 创建一个观察者实例
    console.log('render~', this._data.test,this._data.test1)
  }
}
let o = new Vue({
  data: {
    test: 'hello vue.',
    test1: 'hello test1'
  }
})
o._data.test = 'hello mvvm!'
o._data.test1 = 'hello test1 update'
console.log(o._data.test)
console.log(o._data.test1)
Dep.target = null