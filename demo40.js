/*
 * @Author: artemis
 * @Date: 2020-07-30 13:33:48
 * @LastEditTime: 2022-02-13 10:29:57
 * @LastEditors: artemis
 * @Description: 拍平数组-扁平化
 */
function flat(arr) {
  const isDeep = arr.some(item => item instanceof Array);
  if (!isDeep) return arr;
  // const temp = Array.prototype.concat.apply([], arr)
  const temp = [].concat(...arr);
  return flat(temp);
}

function flatten(array) {
  return array.reduce(
    (target, current) =>
      Array.isArray(current) ?
        target.concat(flatten(current)) :
        target.concat(current), []);
}

function flattenByDeep(array, deep = 1) {
  return array.reduce(
    (target, current) =>
      Array.isArray(current) && deep > 1 ?
        target.concat(flattenByDeep(current, deep - 1)) :
        target.concat(current), []);
}

// 实现flat新特性
Array.prototype.myFlat = function (depth) {
  const isDeep = this.some(item => item instanceof Array);
  if (!isDeep) return this;
  if (!depth || depth === 1) {
    return [].concat(...this);
  }
  const temp = [].concat(...this);
  return temp.myFlat(depth - 1);
};

let arr = flat([1, 2, 3, [4, 5, [6],
  [7]
]]);
console.log(arr);
console.log([].concat([2, 3, [4], 5]));
const array = [8, 1, 2, 54, 7, 2, 53, 2, 6, 342, 2];
console.log(Math.max.apply('', array));

console.log([1, 2, 3, [4, 5, [6],
  [7]
]].flat(Infinity));