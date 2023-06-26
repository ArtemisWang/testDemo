/*
 * @Author: yating.wang
 * @Date: 2023-01-11 13:46:43
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-01-11 14:14:58
 * @Description: 
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}
var buildTree = function (preorder, inorder) {
  if (!preorder || !preorder.length) return null;
  const root = new TreeNode(preorder[0]);
  const pivot = inorder.indexOf(root.val);
  root.left = buildTree(preorder.slice(1, pivot + 1), inorder.slice(0, pivot)) || null;
  root.right = buildTree(preorder.slice(pivot + 1), inorder.slice(pivot + 1)) || null;
  return root;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));