/*
 * @Author: artemis 
 * @Date: 2021-07-We 02:26:15 
 * @Last Modified by:   artemis 
 * @Last Modified time: 2021-07-We 02:26:15 
 */

let a = {
  a1: 'b',
  b1: 'c',
  // 先调用[Symbol.toPrimitive],再调用valueOf，再调用toString
  valueOf() {
    return Object.keys(this).length;
  },
  toString() {
    return 'zzzz';
  },
  // 转换成基本类型会优先级别最高地调用此方法
  [Symbol.toPrimitive]() {
    return Object.keys(this).join('-');
  },
};
console.log(a + '11');