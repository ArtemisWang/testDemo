/*
 * @Author: yating.wang
 * @Date: 2023-01-09 15:00:45
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-01-11 13:44:32
 * @Description: 最小栈
 */
var MinStack = function () {
  this.stack = [];
  this.min = Number.MAX_SAFE_INTEGER;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.min = Math.min(this.min, val);
  this.stack.push([val, this.min]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.min = this.stack.length ? this.stack[this.stack.length - 1][1] : Number.MAX_SAFE_INTEGER;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.length ? this.stack[this.stack.length - 1][0] : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min === Number.MAX_SAFE_INTEGER ? null : this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */