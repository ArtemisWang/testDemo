/*
 * @Author: yating.wang
 * @Date: 2023-02-01 10:05:51
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-01 10:22:35
 * @Description: 
 */
var rightSideView = function (root) {
  // 层次遍历，找到每一层的最后一个数
  if (!root) return [];
  const res = [];
  const queue = [[root, 0]];
  while (queue.length) {
    const [head, level] = queue.shift();
    res[level] = head.val;
    head.left && queue.push([head.left, level + 1]);
    head.right && queue.push([head.right, level + 1]);
  }
  return res;
};

