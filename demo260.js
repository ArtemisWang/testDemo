/*
 * @Author: artemis
 * @Date: 2021-11-08 12:39:12
 * @LastEditTime: 2022-01-12 13:01:47
 * @LastEditors: artemis
 * @Description: 二叉搜索树的后序遍历
 */
// 输入一个整数数组， 判断该数组是不是某二叉搜索树的后序遍历的结果。 如果是则输出Yes, 否则输出No。 假设输入的数组的任意两个数字都互不相同。
function backTraversalSearch(arr) {
  if (arr.length < 2) return true;
  const root = arr.pop();
  let highIndex = -2;
  arr.forEach((item, index) => {
    if (item > root && highIndex === -2) {
      highIndex = index;
    }
    if (item < root && highIndex >= 0) {
      highIndex = -1;
    }
  });
  if (highIndex === -1) return false;
  if (highIndex === -2) return backTraversalSearch(arr);
  return backTraversalSearch(arr.slice(0, highIndex)) && backTraversalSearch(arr.slice(highIndex));
}

console.log(backTraversalSearch([5, 2, -17, -11, 25, 76, 62, 98, 92, 61]));