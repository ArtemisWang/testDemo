/*
 * @Author: yating.wang
 * @Date: 2020-07-30 13:33:48
 * @LastEditTime: 2021-11-30 18:36:34
 * @LastEditors: yating.wang
 * @Description: 深拷贝
 */
function deepClone(a) {
  if (typeof a !== 'object' || a == null) {
    return a
  }
  let b
  if (a instanceof Array) {
    b = []
  } else {
    b = {}
  }
  for (let key in a) {
    if (a.hasOwnProperty(key)) {
      b[key] = deepClone(a[key])
    }
  }
  return b
}

const a = {
  name: 'art',
  action: 'click',
  next: 'button',
  age: 18,
  person: {
    age: 19,
    content: {
      address: 'somewhere',
      others: 0
    }
  },
  fn() {
    console.log(this.action)
  }
}
const b = deepClone(a)
console.log(b, b.fn)
console.log(b === a)