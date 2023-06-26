/*
 * @Author: yating.wang
 * @Date: 2023-02-02 20:40:52
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-02 20:47:48
 * @Description: 
 */
var levelOrder = function (root) {
  if (!root) return [];
  const res = [];
  const queue = [[root, 0]];
  while (queue.length) {
    let [root, level] = queue.shift();
    if (!res[level]) {
      res[level] = [];
    }
    res[level].push(root.val);
    if (root.children) {
      root.children.forEach(r => {
        queue.push([r, level + 1]);
      });
    }
  }
  return res;
};