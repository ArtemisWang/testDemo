/*
 * @Author: artemis
 * @Date: 2021-11-10 13:12:07
 * @LastEditTime: 2021-11-10 13:32:32
 * @LastEditors: artemis
 * @Description: 按之字形打印二叉树
 */
class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function printTreeAsZ(root) {
  if (!root) return;
  const queue = [root];
  const level = [1, 1];
  let printValue = '';
  let tmp = '';
  while (queue.length) {
    level.shift();
    root = queue.shift();
    if (level[0] % 2) {
      tmp += (root.value + ' ');
    } else {
      tmp = root.value + ' ' + tmp;
    }
    if (root.left) {
      queue.push(root.left);
      level.push(level[0] + 1);
    }
    if (root.right) {
      queue.push(root.right);
      level.push(level[0] + 1);
    }
    if (level[0] !== level[1]) {
      printValue += (tmp + '\n');
      tmp = '';
    }
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


printTreeAsZ(root);