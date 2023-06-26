/*
 * @Author: yating.wang
 * @Date: 2023-02-03 16:28:09
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-06 13:45:57
 * @Description: 
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const m = nums1.length, n = nums2.length;
  const left = Math.floor((m + n + 1) / 2), right = Math.floor((m + n + 2) / 2);
  return (getKth(nums1, 0, m - 1, nums2, 0, n - 1, right) + getKth(nums1, 0, m - 1, nums2, 0, n - 1, left)) * 0.5;
};

function getKth(nums1, start1, end1, nums2, start2, end2, k) {
  const len1 = end1 - start1 + 1;
  const len2 = end2 - start2 + 1;
  if (len1 > len2) return getKth(nums2, start2, end2, nums1, start1, end1, k);
  if (len1 === 0) return nums2[start2 + k - 1];
  if (k === 1) return Math.min(nums1[start1], nums2[start2]);
  let i = start1 + Math.min(len1, Math.floor(k / 2)) - 1;
  let j = start2 + Math.min(len2, Math.floor(k / 2)) - 1;
  if (nums1[i] > nums2[j]) {
    return getKth(nums1, start1, end1, nums2, j + 1, end2, k - (j - start2 + 1));
  }
  return getKth(nums1, i + 1, end1, nums2, start2, end2, k - (i - start1 + 1));
}

console.log(findMedianSortedArrays([2, 2, 4, 4], [2, 2, 4, 4]));