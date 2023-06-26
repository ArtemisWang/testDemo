/*
 * @Author: yating.wang
 * @Date: 2023-02-01 11:47:29
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-01 11:55:52
 * @Description:  
 */
var intersection = function (nums1, nums2) {
  const set2 = new Set(nums2);
  const res = new Set();
  for (let i = 0; i < nums1.length; i++) {
    if (set2.has(nums1[i])) {
      res.add(nums1[i]);
    }
  }
  return [...res];
};