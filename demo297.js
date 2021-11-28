/*
 * @Author: yating.wang
 * @Date: 2021-11-16 09:42:45
 * @LastEditTime: 2021-11-16 10:00:39
 * @LastEditors: yating.wang
 * @Description: 接雨水
 */

const { min } = require("lodash");

// 1. 使用栈存储遍历过的递减高度， 当遇到递增时， 表示有接雨水的空间， 计算接雨水量
// 2. 设置一些变量
//     1. top： 栈顶元素， 是height的指针
//     2. left： top下面相邻元素， 是height的指针
//     3. height： 函数输入的高度数组
//     4. height[i]： 当前遍历到的高度值
//     5. stack： 存储height中递减的索引
// 3. 一定有height[left] >= height[top]
// 4. 如果有height[i] > height[top]， 则有接雨水的区域， 该区域宽度是i - left - 1， 该区域高度是min(height[i], height[left]) - height[top]

var trap = function(height) {
  let ans = 0;
  const stack = [];
  const n = height.length;
  for (let i = 0; i < n; ++i) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop();
      if (!stack.length) {
        break;
      }
      const left = stack[stack.length - 1];
      const currWidth = i - left - 1;
      const currHeight = Math.min(height[left], height[i]) - height[top];
      ans += currWidth * currHeight;
    }
    stack.push(i);
  }
  return ans;
};
