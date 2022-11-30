/*
 * @Author: artemis
 * @Date: 2021-11-09 10:41:54
 * @LastEditTime: 2021-11-09 11:03:27
 * @LastEditors: artemis
 * @Description: 数组转二叉树
 */
class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function arrayToTree(arr) {
  if (arr.length === 0) return;
  const root = new Tree(arr.shift());
  const queue = [root];
  let p = null;
  for (let i of arr) {
    if (!p) {
      p = queue.shift();
      if (i != null) {
        p.left = new Tree(i);
        queue.push(p.left);
      }
    } else {
      if (i != null) {
        p.right = new Tree(i);
        queue.push(p.right);
      }
      p = null;
    }
  }
  return root;
}

console.log(arrayToTree([5, 3, 7, 2, 4, 6, null, 1]));