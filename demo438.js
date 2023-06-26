/*
 * @Author: yating.wang
 * @Date: 2023-02-01 10:24:32
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-01 11:22:41
 * @Description: 
 */
var rob = function (nums) {
  if (!nums.length) return 0;
  let t = nums[0];
  let f = 0;
  for (let i = 1; i < nums.length; i++) {
    const tmp = t;
    t = f + nums[i];
    f = Math.max(f, tmp);
  }
  return Math.max(t, f);
};

console.log(rob([2, 7, 9, 3, 1]));