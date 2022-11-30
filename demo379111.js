/*
 * @Author: artemis
 * @Date: 2022-04-05 22:28:27
 * @LastEditTime: 2022-04-07 16:17:03
 * @LastEditors: artemis
 * @Description:  EventEmitter
 */
class EventEmitter {
  constructor() {
    this.listeners = new Map();
  }
  addListener(event, listener) {
    const tmp = this.listeners.get(event) || [];
    tmp.push(listener);
    this.listeners.set(event, tmp);
  }
  removeListener(event, listener) {
    if (!listener) {
      this.listeners.delete(event);
    } else {
      let listeners = this.listeners.get(event) || [];
      listeners = listeners.filter(lis => lis !== listener);
      this.listeners.set(event, listeners);
    }
  }
  notify(event) {
    const tmp = this.listeners.get(event) || [];
    tmp.forEach(fn => {
      if (fn._context === 'once') {
        fn();
        this.removeListener(event, fn);
      } else {
        fn();
      }
    });
  }
  once(event, listener) {
    listener._context = 'once';
    this.addListener(event, listener);
  }
}

// const emitter = new EventEmitter()
// const fn = () => {
//   console.log(1)
// }
// emitter.once('click', fn)
// emitter.addListener('click', () => {
//   console.log(2)
// })
// emitter.addListener('scroll', () => {
//   console.log(3)
// })
// emitter.addListener('click', () => {
//   console.log(4)
// })
// // emitter.notify('click')
// emitter.removeListener('click', fn)
// emitter.notify('click')
// emitter.removeListener('click')
// emitter.notify('click')
// emitter.notify('scroll')

function quickSort(arr, left, right) {
  if (left >= right) return;
  const pivot = arr[left];
  let cur = left;
  for (let i = left + 1; i <= right; i++) {
    if (pivot > arr[i]) {
      cur++;
      const tmp = arr[cur];
      arr[cur] = arr[i];
      arr[i] = tmp;
    }
  }
  arr[left] = arr[cur];
  arr[cur] = pivot;
  quickSort(arr, left, cur - 1);
  quickSort(arr, cur + 1, right);
}

function mergeSort(arr, left, right) {
  if (left >= right) return;
  const mid = Math.floor((left + right) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  let p1 = left,
    p2 = mid + 1,
    index = 0;
  const tmp = [];
  while (p1 <= mid && p2 <= right) {
    tmp[index++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
  }
  while (p1 <= mid) {
    tmp[index++] = arr[p1++];
  }
  while (p2 <= right) {
    tmp[index++] = arr[p2++];
  }
  index = 0;
  while (left <= right) {
    arr[left++] = tmp[index++];
  }
}

function shellSort(arr) {
  let span = Math.floor(arr.length / 2);
  while (span > 0) {
    for (let i = 0; i < span; i++) {
      for (let j = i + span; j < arr.length; j += span) {
        const tmpJ = j;
        const tmp = arr[j];
        while (j - span >= 0 && tmp < arr[j - span]) {
          arr[j] = arr[j - span];
          j = j - span;
        }
        arr[j] = tmp;
        j = tmpJ;
      }
    }
    span = Math.floor(span / 2);
  }
}

// const arr = [9, 5, 4, 6, 3, 2, 8, 1, 7, 0]
// quickSort(arr, 0, arr.length - 1)
// mergeSort(arr, 0, arr.length - 1)
// shellSort(arr)
// console.log(arr)

// 基数排序
function radixSort(arr, maxLength) {
  const sortedArr = new Array(arr.length);
  for (let j = maxLength - 1; j >= 0; j--) {
    const count = new Array(128).fill(0);
    for (let i = 0; i < arr.length; i++) {
      const tmp = arr[i].length <= j ? 0 : arr[i].charCodeAt(j);
      count[tmp]++;
    }
    for (let i = 1; i < 128; i++) {
      count[i] += count[i - 1];
    }
    for (let i = arr.length - 1; i >= 0; i--) {
      const index = arr[i].length <= j ? 0 : arr[i].charCodeAt(j);
      count[index]--;
      sortedArr[count[index]] = arr[i];
    }
    arr = sortedArr.slice();
  }
  return arr;
}
// const arr = ['qd', 'abc', 'qwe', 'hhh', 'a', 'cws', 'ope']
// console.log(radixSort(arr, 3))

function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  };
}

function throttle(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  };
}

function deepClone(obj) {
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }
  let newObj = {};
  if (obj instanceof Array) {
    newObj = [];
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
}

// const a = {
//   name: 'art',
//   action: 'click',
//   next: 'button',
//   age: 18,
//   text: null,
//   person: {
//     age: 19,
//     content: {
//       address: 'somewhere',
//       others: 0
//     }
//   },
//   fn() {
//     console.log(this.action)
//   }
// }
// const b = deepClone(a)
// console.log(b, b.fn)
// console.log(b.person.content === a.person.content)

function flatten(arr) {
  const isDeep = arr.some(item => item instanceof Array);
  if (!isDeep) return arr;
  // arr = Array.prototype.concat.apply([], arr)
  arr = [].concat(...arr);
  return flatten(arr);
}
// const arr = flatten([1, 2, 3, [4, 5, [6],
//   [7]
// ]])
// console.log(arr)


// const arr = [1, 2, 3, 4, 5, 6, 10, 12, 14]
// console.log(Math.max.apply(Math, arr))

// 洗牌算法
function random(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    const j = Math.floor(Math.random() * n);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
const arr = [1, 2, 3, 4, 5, 6, 10, 12, 14];
random(arr);
console.log(arr);