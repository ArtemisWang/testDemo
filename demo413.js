/*
 * @Author: yating.wang
 * @Date: 2022-12-09 14:49:43
 * @LastEditors: yating.wang
 * @LastEditTime: 2022-12-09 15:30:40
 * @Description: 
 */
var merge = function (intervals) {
  if (intervals.length <= 1) return intervals;
  intervals = intervals.sort((a, b) => (a[0] - b[0]));
  let [left, right] = intervals[0];
  const res = [];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= left && intervals[i][0] <= right) {
      right = Math.max(intervals[i][1], right);
    } else {
      res.push([left, right]);
      [left, right] = intervals[i];
    }
  }
  res.push([left, right]);
  return res;
};

console.log(merge([[1, 3], [2, 6], [8, 15], [15, 18]]));