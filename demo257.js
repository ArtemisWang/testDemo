/*
 * @Author: yating.wang
 * @Date: 2021-11-05 08:58:01
 * @LastEditTime: 2021-11-05 09:40:43
 * @LastEditors: yating.wang
 * @Description: 对称二叉树
 */
class Tree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function isSymmetrical(root) {
  const queue1 = [root],
    queue2 = [root]
  while (queue1.length > 0) {
    root = queue1.shift()
    let rootr = queue2.shift()
    if (!(!root && !rootr) || !((root ?? {}).value === (rootr ?? {}).value)) {
      return false
    }
    root && queue1.push(root.left) && queue1.push(root.right)
    rootr && queue2.push(rootr.right) && queue2.push(rootr.left)
  }
  return true
}

function isSymmetrical1(pRoot) {
  return isSymmetricalTree(pRoot, pRoot);
}

function isSymmetricalTree(node1, node2) {
  if (!node1 && !node2) {
    return true;
  }
  if (!node1 || !node2) {
    return false;
  }
  if (node1.val != node2.val) {
    return false;
  }
  return isSymmetricalTree(node1.left, node2.right) && isSymmetricalTree(node1.right, node2.left);
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

console.log(isSymmetrical(tree))