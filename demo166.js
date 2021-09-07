class Tree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// 二叉树的后序遍历
// 左右根
function backTraversal(root) {
  // 递归
  if (root) {
    backTraversal(root.left)
    backTraversal(root.right)
    console.log(root.value)
  }
}

function backTraversal2(root) {
  // 非递归
  let stack1 = []
  let stack2 = []
  stack1.push(root)
  while (stack1.length > 0) {
    root = stack1.pop()
    stack2.push(root)
    if (root.left) {
      stack1.push(root.left)
    }
    if (root.right) {
      stack1.push(root.right)
    }
  }
  while (stack2.length > 0) {
    console.log(stack2.pop().value)
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

backTraversal(tree)
backTraversal2(tree)