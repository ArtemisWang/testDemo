/*
 * @Author: yating.wang
 * @Date: 2021-11-10 14:50:50
 * @LastEditTime: 2021-11-10 15:37:18
 * @LastEditors: yating.wang
 * @Description: 二叉树的下一个节点
 */
// 给定一个二叉树和其中的一个结点， 请找出中序遍历顺序的下一个结点并且返回。 注意， 树中的结点不仅包含左右子结点， 同时包含指向父结点的指针。

class Tree {
  constructor(value, parent=null) {
    this.value = value
    this.left = null
    this.right = null
    this.parent = parent
  }
}

// 中序遍历查找节点的下一个节点
function getNext(node) {
  if (!node) return null
  if (node.right) {
    node = node.right
    while (node.left) {
      node=node.left
    }
    return node
  }
  if (node.parent.left === node) {
    return node.parent
  }
  while (node.parent.right === node) {
    node = node.parent
    if(!node.parent) return null
  }
  return node
}

const root = new Tree(5)
root.left = new Tree(3, root)
root.right = new Tree(7, root)
root.left.left = new Tree(2, root.left)
root.left.right = new Tree(4, root.left)
root.right.left = new Tree(6, root.right)
root.right.right = new Tree(8, root.right)
root.left.right.left = new Tree(10, root.left.right)
root.right.right.right = new Tree(11, root.right.right)

console.log(getNext(root.right))