/*
 * @Author: yating.wang
 * @Date: 2023-02-22 13:08:53
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-22 13:21:20
 * @Description: 
 */
var combinationSum = function (candidates, target) {
  candidates = candidates.sort((a, b) => a - b);
  const res = [];
  const f = function (curSum, arr, other) {
    for (let i = 0; i < other.length; i++) {
      if (curSum + other[i] === target) {
        res.push(arr.concat(other[i]));
        return;
      } else if (curSum + other[i] > target) {
        return;
      }
      f(curSum + other[i], arr.concat(other[i]), other.slice(i));
    }
  };
  f(0, [], candidates);
  return res;
};

console.log(combinationSum([2, 3, 6, 7], 7));