/*
 * @Author: yating.wang
 * @Date: 2023-02-09 09:13:25
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-09 09:20:07
 * @Description: 
 */
var CQueue = function () {
  this.arr1 = [];
  this.arr2 = [];
  this.size = 0;
};

CQueue.prototype.appendTail = function (value) {
  this.size++;
  while (this.arr1.length) {
    this.arr2.push(this.arr1.pop());
  }
  this.arr2.push(value);
  while (this.arr2.length) {
    this.arr1.push(this.arr2.pop());
  }
};

CQueue.prototype.deleteHead = function () {
  if (this.size === 0) return -1;
  this.size--;
  return this.arr1.pop();
};

