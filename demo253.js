/*
 * @Author: artemis
 * @Date: 2021-10-26 16:15:49
 * @LastEditTime: 2021-10-26 16:23:37
 * @LastEditors: artemis
 * @Description: 
 */
const deepClone = function (obj) {
  if (typeof obj != 'object' || obj == null) return obj;
  let res = {};
  if (obj instanceof Array) {
    res = [];
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      res[key] = deepClone(obj[key]);
    }
  }
  return res;
};
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
    console.log(this.action);
  }
};
console.log(deepClone(a));