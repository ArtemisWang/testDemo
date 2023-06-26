/*
 * @Author: yating.wang
 * @Date: 2022-12-07 14:51:38
 * @LastEditors: yating.wang
 * @LastEditTime: 2022-12-07 21:23:52
 * @Description: 
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}
var midTraversal = function (root) {
  const stack = [];
  const res = [];
  while (stack.length || root) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }
  return res;
};

const head = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(5));
console.log(midTraversal(head));