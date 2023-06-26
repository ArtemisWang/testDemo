/*
 * @Author: yating.wang
 * @Date: 2023-01-06 13:03:09
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-01-06 13:15:22
 * @Description: 
 */
var Solution = function (nums) {
  this._init = nums;
  this.arr = nums.slice();
};

Solution.prototype.reset = function () {
  this.arr = this._init.slice();
  return this.arr;
};

Solution.prototype.shuffle = function () {
  const n = this.arr.length;
  for (let i = 0; i < n; i++) {
    const pivot = i + Math.floor(Math.random() * (n - i));
    [this.arr[pivot], this.arr[i]] = [this.arr[i], this.arr[pivot]];
  }
  return this.arr;
};