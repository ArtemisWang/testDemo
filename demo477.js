/*
 * @Author: yating.wang
 * @Date: 2023-02-15 10:03:10
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-15 10:10:40
 * @Description: 
 */
var binaryTreePaths = function (root) {
  if (!root) return [];
  const queue = [[root, [root.val]]];
  const res = [];
  while (queue.length) {
    let [root, path] = queue.shift();
    if (root.left) {
      queue.push([root.left, [...path, root.left.val]]);
    }
    if (root.right) {
      queue.push([root.right, [...path, root.right.val]]);
    }
    if (!root.left && !root.right) {
      res.push(path.join('->'));
    }
  }
  return res;
};