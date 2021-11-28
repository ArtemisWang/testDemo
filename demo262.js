/*
 * @Author: yating.wang
 * @Date: 2021-11-08 19:31:41
 * @LastEditTime: 2021-11-08 20:00:46
 * @LastEditors: yating.wang
 * @Description: 二叉树的最小深度
 */
class Tree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// 递归版本
function minTreeDepth(root) {
  return root?1+Math.min(minTreeDepth(root.left),minTreeDepth(root.right)):0
}

// 非递归版本
function minTreeDepth1(root) {
  const queue = [root]
  let depth = 1, n=1
  while (n>0) {
    root = queue.shift()
    if (!root.left || !root.right) {
      return depth
    }
    n--
    if (!n) {
      n = 2 ** depth
      depth++
    }
    queue.push(root.left)
    queue.push(root.right) 
  }
  return depth
}

const root = new Tree(5)
root.left = new Tree(3)
root.right = new Tree(7)
root.right.left = new Tree(6)
root.right.right = new Tree(8)
root.right.right.right = new Tree(9)
console.log(minTreeDepth1(root))