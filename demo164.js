/*
 * @Author: yating.wang 
 * @Date: 2021-07-Tu 01:25:43 
 * @Last Modified by:   yating.wang 
 * @Last Modified time: 2021-07-Tu 01:25:43 
 */

class Tree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// 二叉树的前序遍历
// 根左右
function preTraversal(root) {
  //递归
  if (root) {
    console.log(root.value)
    preTraversal(root.left)
    preTraversal(root.right)
  }
}

function preTraversal2(root) {
  // 非递归
  // 使用栈结构
  let stack = [root]
  while (stack.length > 0) {
    root = stack.pop()
    console.log(root.value)
    if (root.right) {
      stack.push(root.right)
    }
    if (root.left) {
      stack.push(root.left)
    }
  }
}

let tree = new Tree(1)
tree.left = new Tree(2)
tree.right = new Tree(3)
let tree2 = tree.left
tree2.left = new Tree(4)
tree2.right = new Tree(5)
let tree3 = tree2.left
tree3.right = new Tree(6)
tree3.right.left = new Tree(7)

preTraversal(tree)
preTraversal2(tree)