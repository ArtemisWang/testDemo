/*
 * @Author: yating.wang
 * @Date: 2023-02-10 10:04:29
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-10 17:50:40
 * @Description: 
 */


function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}
var maxPathSum = function (root) {
  if (!root) return 0;
  let res = Number.MIN_SAFE_INTEGER;
  const countMax = (root) => {
    let sum = root.val;
    let left = 0, right = 0;
    if (root.left) {
      left = countMax(root.left);
    }
    if (root.right) {
      right = countMax(root.right);
    }
    res = Math.max(sum, sum + left, sum + right, sum + left + right, res);
    sum = Math.max(sum + left, sum + right, sum);
    return sum;
  };
  countMax(root);
  return res;
};
