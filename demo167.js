class Tree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function maxDepth(root) {
  if (!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
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

console.log(maxDepth(tree))