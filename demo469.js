/*
 * @Author: yating.wang
 * @Date: 2023-02-14 08:54:45
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-14 09:04:43
 * @Description: 
 */
var subsets = function (nums) {
  const res = [];
  const f = function (tmp, other) {
    if (!other.length) {
      res.push(tmp);
      return;
    }
    const num = other.pop();
    f(tmp.slice(), other.slice());
    f(tmp.concat(num), other.slice());
  };
  f([], nums);
  return res;
};

console.log(subsets([0]));