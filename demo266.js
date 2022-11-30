/*
 * @Author: artemis
 * @Date: 2021-11-10 09:34:09
 * @LastEditTime: 2021-11-10 09:54:43
 * @LastEditors: artemis
 * @Description: 从上到下打印二叉树
 */
class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function printTree(root) {
  // null不打印
  const queue = [root];
  const level = [1, 1];
  let printValue = '';
  while (queue.length) {
    if (level[0] !== level[1]) {
      printValue += '\n';
    }
    level.shift();
    root = queue.shift();
    printValue += (root.value + ' ');
    root.left && queue.push(root.left) && level.push(level[0] + 1);
    root.right && queue.push(root.right) && level.push(level[0] + 1);
  }
  console.log(printValue);
}

function printTree1(root) {
  // null打印
  const queue = [root];
  const level = [1, 1];
  let printValue = '';
  while (queue.length) {
    if (level[0] !== level[1]) {
      printValue += '\n';
    }
    level.shift();
    root = queue.shift();
    printValue += ((root ? root.value : null) + ' ');
    root && queue.push(root.left) && level.push(level[0] + 1);
    root && queue.push(root.right) && level.push(level[0] + 1);
  }
  console.log(printValue);
}

const root = new Tree(5);
root.left = new Tree(3);
root.right = new Tree(7);
root.left.left = new Tree(2);
root.left.right = new Tree(4);
root.right.left = new Tree(6);
root.right.right = new Tree(8);
root.left.right.left = new Tree(10);
root.right.right.right = new Tree(11);


printTree(root);
printTree1(root);