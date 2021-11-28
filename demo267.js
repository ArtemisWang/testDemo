const { find } = require("lodash")

/*
 * @Author: yating.wang
 * @Date: 2021-11-10 12:16:43
 * @LastEditTime: 2021-11-10 12:53:02
 * @LastEditors: yating.wang
 * @Description: 二叉树中和为某一值的路径
 */
class Tree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.sum = 0
    this.path = []
  }
}
// 非递归版
function findPath(root, value) {
  const res=[]
  const queue = [root]
  root.sum = root.value
  root.path.push(root.value)
  while (queue.length) {
    root = queue.shift()
    if (!root.left && !root.right ) {
      root.sum === value&&res.push(root.path)
    }
    if (root.left) {
      root.left.sum = root.sum + root.left.value
      root.left.path = root.path.concat(root.left.value)
      queue.push(root.left)
    }
    if (root.right) {
      root.right.sum = root.sum + root.right.value
      root.right.path = root.path.concat(root.right.value)
      queue.push(root.right)
    }
  }
  return res
}

const root = new Tree(5)
root.left = new Tree(3)
root.right = new Tree(7)
root.left.left = new Tree(2)
root.left.right = new Tree(4)
root.right.left = new Tree(6)
root.right.right = new Tree(8)
root.left.right.left = new Tree(10)
root.right.right.right = new Tree(2)

console.log(findPath(root, 22))