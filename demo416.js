/*
 * @Author: yating.wang
 * @Date: 2022-12-09 16:24:17
 * @LastEditors: yating.wang
 * @LastEditTime: 2022-12-09 16:50:05
 * @Description: 
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const queue = [[root, 0]];
  let res = [];
  let cur = 0;
  let tmp = [];
  while (queue.length) {
    let [root, level] = queue.shift();
    root.left && (queue.push([root.left, level + 1]));
    root.right && (queue.push([root.right, level + 1]));
    if (cur != level) {
      res.push(tmp);
      cur++;
      tmp = [];
    }
    if (level % 2) {
      tmp.unshift(root.val);
    } else {
      tmp.push(root.val);
    }
  }
  res.push(tmp);
  return res;
};

function treeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

console.log(zigzagLevelOrder(new treeNode(3, new treeNode(9), new treeNode(20, new treeNode(15), new treeNode(7)))));