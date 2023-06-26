/*
 * @Author: yating.wang
 * @Date: 2022-12-07 17:14:26
 * @LastEditors: yating.wang
 * @LastEditTime: 2022-12-07 17:17:43
 * @Description: 
 */
var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};