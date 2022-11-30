/*
 * @Author: artemis
 * @Date: 2021-11-10 14:06:24
 * @LastEditTime: 2021-11-10 14:43:52
 * @LastEditors: artemis
 * @Description: 序列化二叉树
 */

class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 序列化二叉树，递归，前序遍历
function serialize(root) {
  if (!root) return [null];
  return [root.value, ...serialize(root.left), ...serialize(root.right)];
}

// 反序列化二叉树，前序遍历变为二叉树
function deserialize(arr) {
  if (!arr.length) return null;
  let root = null;
  const current = arr.shift();
  if (current) {
    root = new Tree(current);
    root.left = deserialize(arr);
    root.right = deserialize(arr);
  }
  return root;
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

const arr = serialize(root);
console.log(arr);
console.log(deserialize(arr));