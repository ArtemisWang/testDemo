/*
 * @Author: artemis
 * @Date: 2021-12-10 15:53:18
 * @LastEditTime: 2021-12-10 19:34:52
 * @LastEditors: artemis
 * @Description: 数组去重， 考虑object、 NaN、 数字， 弱类型转换
 */
function unique(arr) {
  const objArr = [];
  const set = new Set();
  return arr.filter(value => {
    if (value instanceof Object) {
      let uniqueFlag = true;
      for (let obj of objArr) {
        if (isSameObj(obj, value)) {
          uniqueFlag = false;
          break;
        }
      }
      uniqueFlag && objArr.push(value);
      return uniqueFlag;
    } else {
      if (set.has(value)) {
        return false;
      }
      set.add(value);
      return true;
    }
  });
}

function isSameObj(obj1, obj2) {
  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }
    if (obj1[key] instanceof Object && obj2[key] instanceof Object) {
      if (!isSameObj(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  for (let key in obj2) {
    if (!obj1.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}


const arr = [{
  a: 1,
  b: {
    a: 1,
    b: 3
  }
}, {
  a: 1,
  b: {
    a: 1,
    b: 2
  }
}, {
  a: 1,
  b: {
    a: 1,
    b: 3
  }
}, NaN, NaN, 12, 12, null, 12, 1, 0, 1, 0];
console.log(unique(arr));
