/*
 * @Author: artemis
 * @Date: 2022-02-12 13:03:53
 * @LastEditTime: 2022-04-05 22:27:21
 * @LastEditors: artemis
 * @Description: 
 */
function myCall(context) {
  if (typeof this !== 'function') {
    throw new typeError('type should be function');
  }
  context = context || window;
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

function myApply(context) {
  if (typeof this !== 'function') {
    throw new typeError('type should be function');
  }
  context = context || window;
  context.fn = this;
  let result;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
}

Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new typeError('type should be function');
  }
  context = context || window;
  const fx = this;
  const args = [...arguments].slice(1);
  return function F() {
    if (this instanceof F) {
      return new fx(...args, ...arguments);
    }
    return fx.apply(context, ...args, ...arguments);
  };
};

class EventEmitter {
  constructor() {
    this.events = new Set();
    this.hash = new Map();
  }
  addListener(event, listener) {
    if (this.events.has(event)) {
      this.hash.get(event).push(listener);
    } else {
      this.events.add(event);
      this.hash.set(event, [listener]);
    }
  }
  removeListener(event, listener) {
    if (this.events.has(event)) {
      let listeners = this.hash.get(event);
      listeners = listeners.filter(lis => {
        return lis !== listener;
      });
      this.hash.set(event, listeners);
    }
  }
  emit(event) {
    this.hash.get(event).forEach(lis => {
      if (typeof lis === 'function') {
        lis();
      } else if (lis.type === 'once') {
        lis.fn();
        this.removeListener(event, lis);
      }
    });
  }
  once(event, listener) {
    if (this.events.has(event)) {
      this.hash.get(event).push({
        type: 'once',
        fn: listener
      });
    } else {
      this.events.add(event);
      this.hash.set(event, [{
        type: 'once',
        fn: listener
      }]);
    }
  }
}
var emitter = new EventEmitter();

var onceListener = function (args) {
  console.log('我只能被执行一次', args, this);
};

var listener = function (args) {
  console.log('我是一个listener', args, this);
};

// emitter.once('click', onceListener);
// emitter.addListener('click', listener);

// emitter.emit('click');
// emitter.emit('click');

// emitter.removeListener('click', listener);
// emitter.emit('click');
// emitter.emit('click');


function debounce(fn, time) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...arguments);
      timer = null;
    }, time);
  };
}

function throttle(fn, time) {
  let timer;
  return function () {
    if (timer) return;
    timer = setTimeout(() => {
      fn(...arguments);
      timer = null;
    }, time);
  };
}

// 深拷贝
function deepClone(obj) {
  if (!obj) return;
  if (typeof obj !== 'object' || obj == null) return obj;
  let newObj;
  if (obj instanceof Array) {
    newObj = [];
  } {
    newObj = {};
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
}

Array.prototype.myFilter = function (fn) {
  const res = [];
  let index = 0;
  for (let i of this) {
    if (fn(i, index, this)) {
      res.push(i);
    }
    index++;
  }
  return res;
};

Array.prototype.myFlat = function (depth) {
  const isDeep = this.some(item => item instanceof Array);
  if (!isDeep) return this;
  if (!depth || depth === 1) {
    return [].concat(...this);
  }
  const temp = [].concat(...this);
  return temp.myFlat(depth - 1);
};

// console.log([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]].myFlat(2))

Array.prototype.random = function () {
  const length = this.length;
  if (length < 2) return this;
  let count = length;
  while (count > 0) {
    let randomIndex = Math.floor(Math.random() * length);
    let tmp = this[randomIndex];
    this[randomIndex] = this[length - 1];
    this[length - 1] = tmp;
    count--;
  }
  return this;
};
// console.log([1,2,3,4,5,6,7,8,9,10].random())


function curry(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  }
  return (...args2) => {
    return curry(fn, ...args, ...args2);
  };
}

function sumtest(a, b, c) {
  console.log(a, b, c);
}
// curry(sumtest)()(1)()(2)(3)

function createJsonP(url, callbackName, fn) {
  const script = document.createElement('script');
  script.src = url;
  script.async = true;
  script.type = 'text/javascript';
  window[callbackName] = function (data) {
    fn && fn(data);
  };
  document.body.appendChild(script);
}

class MyPromise {
  constructor(fn) {
    this.status = 'pending';
    this.value = null;
    this.resolveCallback = [];
    this.rejectCallback = [];
    fn(this.resolve.bind(this), this.reject.bind(this));
  }
  resolve(value) {
    this.status = 'resolved';
    this.value = value;
    if (this.resolveCallback.length) {
      this.resolveCallback.forEach(fun => fun());
    }
  }
  reject(err) {
    this.status = 'rejected';
    this.value = err;
    // throw new Error(err)
    if (this.rejectCallback.length) {
      this.rejectCallback.forEach(fun => fun());
    }
  }
  then(onResolved, onRejected = () => { }) {
    let that = this;
    const promise2 = new MyPromise((resolve, reject) => {
      if (that.status === 'resolved') {
        setTimeout(() => {
          let res = onResolved(that.value);
          resolve(res); //12
        }, 0);
      } else if (that.status === 'rejected') {
        setTimeout(() => {
          let res = onRejected(that.value);
          reject(res);
        }, 0);
      } else if (that.status === 'pending') {
        that.resolveCallback.push(() => {
          setTimeout(() => {
            let res = onResolved(that.value);
            resolve(res);
          }, 0);
        });
        that.rejectCallback.push(() => {
          setTimeout(() => {
            let res = onRejected(that.value);
            reject(res);
          }, 0);
        });
      }
    });
    return promise2;
  }
  catch(onReject) {
    return this.then(null, onReject);
  } finally(onFinally) {
    return this.then(onFinally, onFinally);
  }
}
MyPromise.resolve = function (value) {
  return new MyPromise((resolve) => resolve(value));
};
MyPromise.reject = function (err) {
  return new MyPromise((_, reject) => reject(err));
};
MyPromise.all = function (arr) {
  return new Promise((resolve, reject) => {
    if (!arr.length) {
      resolve([]);
      return;
    }
    const res = [];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
      arr[i].then(data => {
        res[i] = data;
        if (++index === arr.length) {
          return resolve(res);
        }
      }, err => {
        return reject(err);
      });
    }
  });
};
MyPromise.race = function (arr) {
  return new Promise((resolve, reject) => {
    if (arr.length === 0) {
      resolve();
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      arr[i].then(data => {
        resolve(data);
        return;
      }, err => {
        reject(err);
        return;
      });
    }
  });
};
// let promise = new MyPromise((resolve,reject) => {
//   resolve(11)
// })
// promise.then((res) => {
//   console.log('then:', res)
//   return res+1
// }).then(res => {
//   console.log('then1:', res)
//   return res+2
// }).then(res => {
//   console.log('then2:', res)
//   return res + 3
// })
// let promise1 = MyPromise.reject(12)
// console.log(promise, promise1)
// all测试
// MyPromise.all([Promise.resolve(1), Promise.reject(2), Promise.resolve(3)]).then(value => {
//   console.log('all:', value)
// }).catch(err => {
//   console.log('err-all:', err)
// })
// // race测试
// MyPromise.race([Promise.reject(1), Promise.reject(2), Promise.resolve(3)]).then(value => {
//   console.log('race:', value)
// }).catch(err => {
//   console.log('err-race:', err)
// })

function isInstanceof(obj, target) {
  if (!obj || !obj.__proto__) return false;
  obj = obj.__proto__;
  while (obj) {
    if (target.prototype === obj) return true;
    obj = obj.__proto__;
  }
  return false;
}

// const arr = [1, 2, 3]
// console.log(isInstanceof(arr,Array))

function* fib(n) {
  let i = 1,
    j = 1,
    index = 2;
  while (index < n) {
    index++;
    yield i + j;
    [i, j] = [j, i + j];
  }
}

// const f = fib(10)
// for (let i = 0; i < 10; i++){
//   console.log(f.next())
// }
// for (let i of f) {
//   console.log(i)
// }

function myNew(fn) {
  const obj = {};
  obj.__proto__ = fn.prototype;
  const result = fn.apply(obj, [...arguments].slice(1));
  return typeof result === 'object' ? result : obj;
}

function Person() {
  this.name = 'yt';
}
Person.prototype.callName = function () {
  console.log(this.name);
};

// const yyt = myNew(Person)
// console.log(yyt)
// yyt.callName()
// console.log(Object.prototype.toString.call(null))

class LazyMan {
  constructor(name) {
    this.task = [() => {
      console.log(`Hi! This is ${name}!`);
      this.next();
    }];
    setTimeout(() => {
      this.next();
    }, 0);
  }
  next() {
    if (this.task.length) {
      let nextTask = this.task.shift();
      nextTask();
    }
  }
  sleep(time) {
    this.task.push(() => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 1000);
    });
    return this;
  }
  eat(food) {
    this.task.push(() => {
      console.log(`Eat ${food}~`);
      this.next();
    });
    return this;
  }
  sleepFirst(time) {
    this.task.unshift(() => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 1000);
    });
    return this;
  }
}
// (new LazyMan("Hank")).sleep(5).eat("supper").sleep(2).eat("dinner").sleepFirst(1)

function quickSort(arr, left, right) {
  const stack = [
    [left, right]
  ];
  while (stack.length) {
    let [left, right] = stack.pop();
    if (left >= right) continue;
    const pivot = arr[left];
    let mark = left;
    for (let i = mark + 1; i <= right; i++) {
      if (arr[i] < pivot) {
        mark++;
        const tmp = arr[i];
        arr[i] = arr[mark];
        arr[mark] = tmp;
      }
    }
    arr[left] = arr[mark];
    arr[mark] = pivot;
    stack.push([left, mark - 1]);
    stack.push([mark + 1, right]);
  }
}

// const arr = [8, 9, 2, 4, 5, 6, 3, 1, 10, 0]
// quickSort(arr, 0, arr.length - 1)
// console.log(arr)

function mergeSort(arr, start, end) {
  if (start >= end) return;
  let mid = Math.floor((start + end) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, end, mid);
}

function merge(arr, start, end, mid) {
  const tmp = [];
  let index = 0,
    p1 = start,
    p2 = mid + 1;
  while (p1 <= mid && p2 <= end) {
    tmp[index++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
  }
  while (p1 <= mid) {
    tmp[index++] = arr[p1++];
  }
  while (p2 <= end) {
    tmp[index++] = arr[p2++];
  }
  index = 0;
  while (start <= end) {
    arr[start++] = tmp[index++];
  }
}
// const arr = [8, 9, 2, 4, 5, 6, 3, 1, 10, 0, 7]
// mergeSort(arr, 0, arr.length - 1)
// console.log(arr)

function shellSort(arr) {
  if (arr.length <= 1) return;
  let d = arr.length;
  while (d > 1) {
    d = Math.floor(d / 2);
    for (let i = 0; i < d; i++) {
      for (let j = i + d; j < arr.length; j += d) {
        const tmp = arr[j];
        let p = j;
        while (p >= d && arr[p - d] > tmp) {
          arr[p] = arr[p - d];
          p -= d;
        }
        arr[p] = tmp;
      }
    }
  }
}
// const arr = [8, 9, 2, 4, 5, 6, 3, 1, 10, 0, 7]
// shellSort(arr)
// console.log(arr)

function countSort(arr) {
  const max = Math.max.apply(Math, arr);
  const countArray = new Array(max + 1).fill(0);
  for (let i of arr) {
    countArray[i]++;
  }
  let index = 0;
  for (let i = 0; i <= max; i++) {
    while (countArray[i]) {
      arr[index++] = i;
      countArray[i]--;
    }
  }
}
// const arr = [9, 3, 5, 4, 9, 1, 2, 7, 8, 1, 3, 6, 5, 3, 4, 0, 10, 9, 7, 9]
// countSort(arr)
// console.log(arr)


Function.prototype.before = function (beforeFn) {
  let _self = this;
  return function () {
    beforeFn.apply(this, arguments);
    return _self.apply(this, arguments);
  };
};

Function.prototype.after = function (afterFn) {
  let _self = this;
  return function () {
    let res = _self.apply(this, arguments);
    afterFn.apply(this, arguments);
    return res;
  };
};
// let doSomething = function() {
//   console.log(1);
// }
// doSomething = doSomething.before(() => {
//   console.log(3);
// }).after(() => {
//   console.log(2);
// });
// doSomething()

// console.log(new Map([
//   [1, 2],
//   [3, 4]
// ]).size)


function watch(obj) {
  const proxy = new Proxy(obj, {
    set
  });

  function set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver);
    console.log('值在变化');
    return result;
  }
  return proxy;
}

// const a = watch({
//   name: 'yt',
//   age: 18
// })
// console.log(a)
// a.name = 'wyt'
// console.log(a)
// const b = {
//   _name: 'xiaoguai',
//   _age: 100
// }

// Object.defineProperty(b, 'name', {
//   set: function(newVal) {
//     if (newVal.length > 4) {
//       this._name = newVal
//     }
//     console.log('被拦截')
//   },
//   get: function() {
//     return this._name
//   }
// })

// console.log('变化前：', b)
// b.name = 'lanb'
// console.log('变化后：', b)
// b.name = 'lanbo'
// console.log('变化后：', b)

function reactive(value = {}) {
  if (!value || (typeof value !== 'object')) {
    return value;
  }
  // 代理配置
  const proxyConf = {
    get(target, key, receiver) {
      // receiver指的就是const proxy=new Proxy({}, handler)中的proxy实例
      // 只处理非原型的属性
      console.log(`进入get：target-${target}`);
      let ownKeys = Reflect.ownKeys(target);
      if (ownKeys.includes(key)) {
        console.log('get', key);
      }
      const result = Reflect.get(target, key, receiver);
      // 深度监听
      // 性能如何提升？ 什么时候用什么时候递归
      console.log(`要返回get：target-${target}-result-${result}`);
      return reactive(result);
    },
    set(target, key, val, receiver) {
      // 重复的数据不处理
      console.log(`进入set：target-${target}-key-${key}-val-${val}`);
      const oldVal = target[key];
      if (val === oldVal) return true;
      // 严格模式下，set代理如果没有返回true，就会报错
      const ownKeys = Reflect.ownKeys(target);
      if (ownKeys.includes(key)) {
        console.log('已有的key', key);
      } else {
        console.log('新增的key', key);
      }
      const result = Reflect.set(target, key, val, receiver);
      console.log('set', key, val);
      console.log(`要返回set：target-${target}-key-${key}-val-${val}-result-${result}`);
      return result;
    },
    deleteProperty(target, key) {
      const result = Reflect.deleteProperty(target, key);
      console.log('delete property', key);
      return result;
    }
  };
  // 生成代理对象
  const observed = new Proxy(value, proxyConf);
  return observed;
}
// Proxy是如何对数组方法进行拦截的？通过观察，数组方法内部原理其实就是对数组属性的赋值，而对数组属性的赋值操作就会触发Proxy的setter，所以会被拦截到。
// const arr = [1, [2, 2], 3]
// let arr1 = reactive(arr)
// arr1[1].push(2)
// // arr1.length = 2
// console.log(arr1)

Promise.myAll = function (promiseArr) {
  return new Promise((resolve, reject) => {
    const n = promiseArr.length;
    let fulfillNums = 0;
    const res = new Array(n).fill(0);
    promiseArr.forEach((promise, index) => {
      promise.then((x) => {
        res[index] = x;
        fulfillNums++;
        if (fulfillNums === n) {
          resolve(res);
        }
      }).catch(e => {
        reject(e);
      });
    });
  });
};
// const promiseArr = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]
// Promise.myAll(promiseArr).then(res => console.log('all', res)).catch(err => {
//   console.log('err-all:', err)
// })

// 插入排序
function insertSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let j = i + 1;
    const tmp = arr[j];
    while (j >= 1 && tmp < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = tmp;
  }
}

function selectSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    const tmp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = tmp;
  }
}

class Heap {
  constructor(arr) {
    this.size = arr.length;
    this.heap = arr;
    this.buildHeap();
  }
  buildHeap() {
    if (!this.size) return;
    for (let i = Math.floor((this.size - 2) / 2); i >= 0; i--) {
      this.downAdjust(i);
    }
  }
  downAdjust(i) {
    const tmp = this.heap[i];
    while (2 * i + 1 < this.size) {
      let left = 2 * i + 1;
      if (left + 1 < this.size && this.heap[left + 1] < this.heap[left]) {
        left++;
      }
      if (this.heap[left] < tmp) {
        this.heap[i] = this.heap[left];
        i = left;
      } else {
        break;
      }
    }
    this.heap[i] = tmp;
  }
  delete() {
    const tmp = this.heap[0];
    this.heap[0] = this.heap[this.size - 1];
    this.heap[this.size - 1] = tmp;
    this.size--;
    this.downAdjust(0);
  }
}


function heapSort(arr) {
  const heap = new Heap(arr);
  for (let i = 0; i < arr.length; i++) {
    heap.delete();
  }
}
// const arr = [9, 5, 4, 6, 3, 2, 8, 1, 7, 0]
// // insertSort(arr)
// // selectSort(arr)
// heapSort(arr)
// console.log(arr)

Function.prototype.myApply = function (that, args) {
  that.fn = this;
  const res = that.fn(...args);
  delete that.fn;
  return res;
};

Function.prototype.myCall = function (that, ...args) {
  that.fn = this;
  const res = that.fn(...args);
  delete that.fn;
  return res;
};

Function.prototype.myBind = function (that, ...args) {
  that.fn = this;
  return (...args2) => {
    const res = that.fn(...args, ...args2);
    delete that.fn;
    return res;
  };
};

function sum(c, d) {
  return this.a + this.b + c + d;
}
// const d = {
//   a: 1,
//   b: 2
// }
// console.log(sum.myApply(d, [3,4]))
// console.log(sum.myCall(d, 3, 4))
// console.log(sum.myBind(d)(3, 4))