/*
 * @Author: yating.wang
 * @Date: 2023-02-03 14:47:22
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-03 15:34:40
 * @Description: 
 */
var kthSmallest = function (root, k) {
  let res = 0;
  const midTraversal = function (root, k) {
    if (!root) return [];
    const left = midTraversal(root.left, k);
    if (left.length === k - 1) {
      res = root.val;
    }
    const right = midTraversal(root.right, k - left.length - 1);
    return [...left, root.val, ...right];
  };
  midTraversal(root, k);
  return res;
};

