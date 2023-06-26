/*
 * @Author: yating.wang
 * @Date: 2023-02-01 11:56:38
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-02 16:18:10
 * @Description: 
 */
var nextPermutation = function (nums) {
  const n = nums.length;
  let i;
  for (i = n - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      let j = i;
      while (j < n && nums[j] > nums[i - 1]) {
        j++;
      }
      j -= 1;
      [nums[j], nums[i - 1]] = [nums[i - 1], nums[j]];
      break;
    }
  }
  for (let k = i; k < i + (n - 1 - i) / 2; k++) {
    [nums[k], nums[i + n - 1 - k]] = [nums[i + n - 1 - k], nums[k]];
  }
};

const arr = [1, 4, 3, 2];
nextPermutation(arr);
console.log(arr);