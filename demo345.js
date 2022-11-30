/*
 * @Author: artemis
 * @Date: 2021-12-09 17:59:29
 * @LastEditTime: 2021-12-09 21:04:40
 * @LastEditors: artemis
 * @Description: 实现一个LazyMan
 */
// 方法一
class LazyMan1 {
  constructor(name) {
    this.name = name;
    setTimeout(() => {
      console.log("Hi! This is " + name);
    }, 0);
  }

  sleep(seconds) {
    setTimeout(() => {
      const delay = seconds * 1000;
      const time = Date.now();
      while (Date.now() - time < delay) {
        // hu lu lu ~~
      }
      console.log("wake up after " + seconds);
    }, 0);
    return this;
  }

  eat(something) {
    setTimeout(() => {
      console.log("eat " + something);
    }, 0);
    return this;
  }

  sleepFirst(seconds) {
    new Promise((resolve) => {
      const delay = seconds * 1000;
      const time = Date.now();
      while (Date.now() - time < delay) {
        // hu lu lu ~~
      }
      resolve();
    }).then(() => {
      console.log("wake up after " + seconds);
    });
    return this;
  }
}

function LazyMan(name) {
  return new LazyMan2(name);
}

// 方法二

class LazyMan2 {
  constructor(name) {
    const task = () => {
      console.log(`Hi! This is ${name}!`);
      this.next();
    };
    this._tasks = [task];
    setTimeout(() => {
      this.next();
    }, 0);
  }
  next() {
    const task = this._tasks.shift();
    task && task();
  }
  eat(food) {
    this._tasks.push(() => {
      console.log(`Eat ${food}~`);
      this.next();
    });
    return this;
  }
  sleep(time) {
    this._tasks.push(() => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 1000);
    });
    return this;
  }
  sleepFirst(time) {
    this._tasks.unshift(() => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 1000);
    });
    return this;
  }
}

// LazyMan("Hank")
// // 输出:
// Hi!This is Hank!
// LazyMan("Hank").sleep(10).eat("dinner")
// // 输出：
// Hi!This is Hank!
//   //等待10秒..
//   Wake up after 10
// Eat dinner~

// LazyMan("Hank").eat("dinner").eat("supper")
// // 输出：
// Hi This is Hank!
//   Eat dinner~
//   Eat supper~

LazyMan("Hank").sleepFirst(5).eat("supper");
// // 输出：
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
