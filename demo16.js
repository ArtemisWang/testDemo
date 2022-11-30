/*
 * @Author: artemis
 * @Date: 2020-07-30 13:33:48
 * @LastEditTime: 2021-11-29 08:10:31
 * @LastEditors: artemis
 * @Description: 手动实现call、apply、bind
 */
Function.prototype.myCall = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }
  context = context || window;
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

Function.prototype.myApply = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }
  context = context || window;
  context.fn = this;
  let res;
  if (arguments[1]) {
    res = context.fn(...arguments[1]);
  } else {
    res = context.fn();
  }
  delete context.fn;
  return res;
};

Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }
  const fx = this;
  const args = [...arguments].slice(1);
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      console.log('new');
      console.log(new.target === undefined); // 如果为true表示不是new出来的，如果为false表示这里是new出来的
      return new fx(...args, ...arguments);
    }
    return fx.apply(context, args.concat(...arguments));
  };
};



function aa() {
  console.log(this);
  this.age = 18;
}

let a = {
  name: 'art'
};

aa.myCall(a);
aa.myApply(a);
aa.myBind(a)()
// new (aa.myBind(a))()