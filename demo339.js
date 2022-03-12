/*
 * @Author: yating.wang
 * @Date: 2021-12-03 15:55:52
 * @LastEditTime: 2022-02-13 17:57:39
 * @LastEditors: yating.wang
 * @Description: 手动实现instanceof
 */
function myInstanceof(target, origin) {
  const proto = target.__proto__;
  if (proto) {
    if (origin.prototype === proto) {
      return true;
    } else {
      return myInstanceof(proto, origin)
    }
  } else {
    return false;
  }
}


function myInstanceof1(left, right) {
  // instanceof是保留字
  let prototype = right.prototype
  left = left.__proto__
  while (left) {
    if (left === prototype) return true
    left = left.__proto__
  }
  return false
}

const arr = [1, 2, 3]

console.log(myInstanceof(arr, Array), myInstanceof1(arr, Array))