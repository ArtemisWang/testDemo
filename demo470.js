/*
 * @Author: yating.wang
 * @Date: 2023-02-14 09:06:34
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-14 09:16:18
 * @Description: 
 */
var pathSum = function (root, targetSum) {
  if (!root) return [];
  const res = [];
  const recursion = function (root, sum, path) {
    if (!root) return;
    sum += root.val;
    path.push(root.val);
    if (!root.left && !root.right) {
      if (sum === targetSum) {
        res.push(path);
      }
      return;
    }
    root.left && recursion(root.left, sum, path.slice());
    root.right && recursion(root.right, sum, path.slice());
  };
  recursion(root, 0, []);
  return res;
};