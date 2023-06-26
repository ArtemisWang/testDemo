/*
 * @Author: yating.wang
 * @Date: 2023-01-06 13:16:40
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-01-06 13:37:56
 * @Description: 
 */
var preorderTraversal = function (root) {
  if (!root) return [];
  return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];
};