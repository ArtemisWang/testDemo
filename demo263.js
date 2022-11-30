/*
 * @Author: artemis
 * @Date: 2021-11-09 08:22:18
 * @LastEditTime: 2021-11-09 10:09:07
 * @LastEditors: artemis
 * @Description: 判断是否为平衡二叉树，每棵子树的深度之差不超过1
 */
class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// 递归版
function banlancedTree(root) {
  if (!root) return 0;
  const left = banlancedTree(root.left);
  const right = banlancedTree(root.right);
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1;
  }
  return Math.max(left, right) + 1;
}

function isBanlancedTree(root) {
  return banlancedTree(root) > -1;
}

const root = new Tree(5);
root.left = new Tree(3);
root.right = new Tree(7);
root.right.left = new Tree(6);
root.right.right = new Tree(8);
root.right.right.right = new Tree(9);

console.log(isBanlancedTree(root));