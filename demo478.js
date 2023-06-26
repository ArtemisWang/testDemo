/*
 * @Author: yating.wang
 * @Date: 2023-02-16 08:53:56
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-16 09:10:20
 * @Description: 
 */
var threeSumClosest = function (nums, target) {
  const n = nums.length;
  let res;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let tmp = nums[i] + nums[j];
      for (let x = j + 1; x < n; x++) {
        if (res == null) {
          res = tmp + nums[x];
        }
        if (Math.abs(tmp + nums[x] - target) < Math.abs(res - target)) {
          res = tmp + nums[x];
        }
      }
    }
  }
  return res;
};