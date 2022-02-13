/*
 * @Author: yating.wang
 * @Date: 2021-11-10 15:53:17
 * @LastEditTime: 2022-01-13 16:27:43
 * @LastEditors: yating.wang
 * @Description: 树的子结构
 */
class Tree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.parent = null
  }
}
// 判断B是否为A的子结构

function isSubTree(rootA, rootB) {
  if (!rootA || !rootB) return false
  const stack = []
  while (rootA || stack.length) {
    if (rootA) {
      if (isSame(rootA, rootB)) return true
      stack.push(rootA.right)
      rootA = rootA.left
    } else {
      rootA = stack.pop()
    }
  }
  return false
}

function isSame(rootA, rootB) {
  if (!rootA && !rootB) return true
  if (rootA && rootB && rootA.value === rootB.value) {
    return isSame(rootA.left, rootB.left) && isSame(rootA.right, rootB.right)
  }
  return false
}

const root = new Tree(3)
root.left = new Tree(4)
root.right = new Tree(5)
root.left.left = new Tree(1)
root.left.right = new Tree(2)
// root.right.left = new Tree(6)
// root.right.right = new Tree(8)
// root.left.right.left = new Tree(10)
// root.right.right.right = new Tree(11)
const rootB = new Tree(4)
rootB.left = new Tree(1)

console.log(isSubTree(root, rootB))