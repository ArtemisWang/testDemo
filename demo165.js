/*
 * @Author: yating.wang 
 * @Date: 2021-07-Tu 12:35:10 
 * @Last Modified by:   yating.wang 
 * @Last Modified time: 2021-07-Tu 12:35:10 
 */
class Tree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// 二叉树的中序遍历
// 左根右
function midTraversal(root) {
  // 递归
  if (root) {
    midTraversal(root.left)
    console.log(root.value)
    midTraversal(root.right)
  }
}

function midTraversal2(root) {
  // 非递归
  // 使用栈结构
  let stack = []
  while (stack.length > 0 || root) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      console.log(root.value)
      root = root.right
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

//     1
//    / \
//   2   3
//  / \
// 4   5
//  \
//   6
//  /
// 7

midTraversal(tree)
midTraversal2(tree)