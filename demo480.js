/*
 * @Author: yating.wang
 * @Date: 2023-02-16 09:19:37
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-16 14:13:05
 * @Description: 
 */
var nextGreaterElements = function (nums) {
  const n = nums.length;
  const res = new Array(n).fill(-1);
  const stack = [];
  for (let i = 0; i < 2 * n - 1; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i % n]) {
      res[stack[stack.length - 1]] = nums[i % n];
      stack.pop();
    }
    stack.push(i % n);
  }
  return res;
};

console.log(nextGreaterElements([1, 2, 3, 4, 3]));