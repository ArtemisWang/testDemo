/*
 * @Author: yating.wang
 * @Date: 2021-12-03 15:55:52
 * @LastEditTime: 2021-12-03 16:14:42
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


function myInstanceof1(target, origin) {
  let proto = target;
  while (proto) {
    if (!proto.__proto__) return false
    proto = proto.__proto__
    if (origin.prototype === proto) {
      return true;
    }
    proto = proto.prototype
  }
  return false
}

const arr = [1, 2, 3]

console.log(myInstanceof(arr, Array), myInstanceof1(arr, Array))