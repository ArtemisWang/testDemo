/*
 * @Author: yating.wang
 * @Date: 2022-12-15 16:19:13
 * @LastEditors: yating.wang
 * @LastEditTime: 2022-12-16 15:36:37
 * @Description: 
 */
var invertTree = function (root) {
  if (!root) return null;
  const head = root;
  if (!root.left && !root.right) return head;
  const tmp = invertTree(root.left);
  root.left = invertTree(root.right);
  root.right = tmp;
  return head;
};