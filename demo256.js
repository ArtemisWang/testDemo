/*
 * @Author: artemis
 * @Date: 2021-11-05 08:42:25
 * @LastEditTime: 2021-11-05 08:57:27
 * @LastEditors: artemis
 * @Description: 二叉树的层次遍历
 */
class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function printFromTopToBottom(root) {
  const queue = [root];
  while (queue.length > 0) {
    root = queue.shift();
    console.log(root.value);
    root.left && queue.push(root.left);
    root.right && queue.push(root.right);
  }
}
let tree = new Tree(1);
tree.left = new Tree(2);
tree.right = new Tree(3);
let tree2 = tree.left;
tree2.left = new Tree(4);
tree2.right = new Tree(5);
let tree3 = tree2.left;
tree3.right = new Tree(6);
tree3.right.left = new Tree(7);

printFromTopToBottom(tree);