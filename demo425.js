/*
 * @Author: yating.wang
 * @Date: 2023-01-09 09:31:10
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-01-09 09:58:12
 * @Description: 移动零
 */
var moveZeroes = function (nums) {
  const n = nums.length;
  let mark = 0;
  while (nums[mark] !== 0 && mark < n) {
    mark++;
  }
  if (mark >= n) return nums;
  for (let i = mark + 1; i < n; i++) {
    if (nums[i] !== 0) {
      nums[mark] = nums[i];
      nums[i] = 0;
      while (nums[mark] !== 0 && mark < n) {
        mark++;
      }
      if (mark >= n) return nums;
      i = mark;
    }
  }
  return nums;
};

console.log(moveZeroes([1]));