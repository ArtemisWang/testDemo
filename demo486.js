/*
 * @Author: yating.wang
 * @Date: 2023-02-21 13:05:24
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-21 13:10:47
 * @Description: 
 */
var mirrorTree = function (root) {
  if (!root) return null;
  let tmp = root.left;
  root.left = root.right;
  root.right = tmp;
  mirrorTree(root.left);
  mirrorTree(root.right);
  return root;
};