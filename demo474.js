/*
 * @Author: yating.wang
 * @Date: 2023-02-15 09:14:08
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-15 09:22:32
 * @Description: 
 */
var isBalanced = function (root) {
  if (!root) return true;
  const countHeight = function (root) {
    if (!root) return 0;
    return Math.max(countHeight(root.left), countHeight(root.right)) + 1;
  };
  return Math.abs(countHeight(root.left) - countHeight(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};