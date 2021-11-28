/*
 * @Author: yating.wang
 * @Date: 2021-11-08 10:25:32
 * @LastEditTime: 2021-11-09 15:10:14
 * @LastEditors: yating.wang
 * @Description:二叉搜索树的第k个节点
 */
class Tree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
// 递归版本
function kthNode(root, k) {
  return loop(root)[k-1]
}
function loop(root) {
  if (!root) return []
  return [...loop(root.left),root.value,...loop(root.right)]
}
//非递归版本
function kthNode1(root, k) {
  const stack = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    } 
    root = stack.pop()
    if (k === 1) {
      return root.value
    }
    k--
    root = root.right
  }
  return -1
}


const root = new Tree(5)
root.left = new Tree(3)
root.right = new Tree(7)
root.left.left = new Tree(2)
root.left.right = new Tree(4)
root.right.left = new Tree(6)
root.right.right = new Tree(8)

console.log(kthNode(root, 7))
console.log(kthNode1(root,7))