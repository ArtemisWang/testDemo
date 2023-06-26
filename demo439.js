/*
 * @Author: yating.wang
 * @Date: 2023-02-01 11:23:52
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-01 11:41:09
 * @Description: 
 */
var lowestCommonAncestor = function (root, p, q) {
  const queue = [root];
  const hash = new Map();
  hash.set(root, null);
  while (queue.length) {
    root = queue.shift();
    if (root.left) {
      hash.set(root.left, root);
      queue.push(root.left);
    }
    if (root.right) {
      hash.set(root.right, root);
      queue.push(root.right);
    }
  }
  const memo = new Set();
  while (p !== null) {
    memo.add(p);
    p = hash.get(p);
  }
  while (q !== null) {
    if (memo.has(q)) return q;
    q = hash.get(q);
  }
  return p;
};