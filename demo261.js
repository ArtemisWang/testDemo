/*
 * @Author: yating.wang
 * @Date: 2021-11-08 15:09:32
 * @LastEditTime: 2021-11-08 15:58:29
 * @LastEditors: yating.wang
 * @Description: 二叉树的最大深度
 */
class Tree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// 非递归版，层序遍历，使用队列
function treeDepth(root) {
  if(!root) return 0
  const queue = [root]
  const depth = [1,1]
  while (queue.length) {
    depth.shift()
    root = queue.shift()
    root.left && queue.push(root.left) && depth.push(depth[0] + 1)
    root.right && queue.push(root.right) && depth.push(depth[0] + 1)
  }
  return depth[0]
}

// 递归版
function treeDepth1(root) {
  return root?1+Math.max(treeDepth1(root.left),treeDepth1(root.right)):0
}

const root = new Tree(5)
root.left = new Tree(3)
root.right = new Tree(7)
root.right.left = new Tree(6)
root.right.right = new Tree(8)
root.right.right.right = new Tree(9)

console.log(treeDepth(root))