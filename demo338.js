// const { reject } = require("lodash");

/*
 * @Author: artemis
 * @Date: 2021-12-02 16:08:50
 * @LastEditTime: 2022-03-30 17:34:07
 * @LastEditors: artemis
 * @Description: 模拟实现promise
 */
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function MyPromise(executor) {
  this.state = PENDING;
  this.value = null;
  this.reason = null;
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];
  const resolve = (value) => {
    if (this.state === PENDING) {
      this.state = FULFILLED;
      this.value = value;
      this.onFulfilledCallbacks.forEach(fun => {
        fun();
      });
    }
  };
  const reject = (reason) => {
    if (this.state === PENDING) {
      this.state = REJECTED;
      this.reason = reason;
      this.onRejectedCallbacks.forEach(fun => {
        fun();
      });
    }
  };
  try {
    executor(resolve, reject);
  } catch (reason) {
    reject(reason);
  }
}
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled != 'function') {
    onFulfilled = function (value) {
      return value;
    };
  }
  if (typeof onRejected != 'function') {
    onRejected = function (reason) {
      throw reason;
    };
  }
  const promise2 = new MyPromise((resolve, reject) => {
    switch (this.state) {
      case FULFILLED:
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            resolve(x); // 这里更改promise2的状态为fulfilled
          } catch (reason) {
            reject(reason); // 或者在这里更改promise2的状态为rejected
          }
        }, 0);
        break;
      case REJECTED:
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            resolve(x);
          } catch (reason) {
            reject(reason);
          }
        }, 0);
        break;
      case PENDING:
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              resolve(x);
            } catch (reason) {
              reject(reason);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              resolve(x);
            } catch (reason) {
              reject(reason);
            }
          }, 0);
        });
        console.log('这里是pending', this);
        break;
    }
  });
  return promise2;
};
MyPromise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};
MyPromise.prototype.finally = function (fn) {
  return this.then(value => {
    fn();
    return value;
  }, reason => {
    fn();
    throw reason;
  });
};
MyPromise.resolve = function (value) {
  return new MyPromise((resolve, reject) => {
    resolve(value);
  });
};
MyPromise.reject = function (reason) {
  return new MyPromise((resolve, reject) => {
    reject(reason);
  });
};
MyPromise.all = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
    } else {
      let result = [];
      let index = 0;
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(data => {
          result[i] = data;
          if (++index === promises.length) {
            resolve(result);
          }
        }, err => {
          reject(err);
          return;
        });
      }
    }
  });
};
MyPromise.race = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve();
    } else {
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(data => {
          resolve(data);
        }, err => {
          reject(err);
          return;
        });
      }
    }
  });
};

console.log(1);

let promise = new MyPromise((resolve, reject) => {
  resolve('ConardLi');
});

promise.then((value) => {
  console.log(value + '1');
  return value + 1;
}).then((item) => {
  console.log(item + '2');
  return item + 2;
}).then(res => {
  console.log(res + '3');
});

// console.log(MyPromise.resolve(222))
console.log(2);

MyPromise.all([Promise.resolve(1), Promise.reject(2), Promise.resolve(3)]).then(value => {
  console.log('all:', value);
}).catch(err => {
  console.log('err-all:', err);
});

MyPromise.race([Promise.reject(1), Promise.reject(2), Promise.resolve(3)]).then(value => {
  console.log('race:', value);
}).catch(err => {
  console.log('err-race:', err);
});