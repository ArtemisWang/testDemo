/*
 * @Author: yating.wang
 * @Date: 2023-09-14 18:10:20
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-09-14 20:55:04
 * @Description:tiaoyueyouxi2
 */
var jump = function (nums) {
  const n = nums.length;
  let res = 0;
  let maxPosition = 0;
  let end = 0;
  for (let i = 0; i < n - 1; i++) {
    maxPosition = Math.max(i + nums[i], maxPosition);
    if (i === end) {
      res++;
      end = maxPosition;
    }
  }
  return res;
};
