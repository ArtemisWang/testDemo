/*
 * @Author: yating.wang
 * @Date: 2023-02-03 15:35:46
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-03 16:26:08
 * @Description: 
 */
var combinationSum2 = function (candidates, target) {
  const res = [];
  candidates = candidates.sort((a, b) => a - b);
  const f = function (tmp, sum, candidates) {
    if (sum === target) {
      res.push(tmp);
      return;
    }
    if (sum > target) {
      return;
    }
    if (!candidates.length) return;
    const cur = candidates.shift();
    f([...tmp, cur], sum + cur, candidates.slice());
    while (candidates[0] === cur) {
      candidates.shift();
    }
    f(tmp.slice(), sum, candidates.slice());
  };
  f([], 0, candidates);
  return res;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));