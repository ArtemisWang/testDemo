/*
 * @Author: yating.wang
 * @Date: 2021-11-05 09:39:34
 * @LastEditTime: 2021-11-05 10:13:14
 * @LastEditors: yating.wang
 * @Description: 镜像二叉树
 */

class Tree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function mirror(root) {
  // 递归版
  if (root) {
    const tmp = root.right
    root.right = root.left
    root.left = tmp
    mirror(root.left)
    mirror(root.right)
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

console.log(tree)
mirror(tree)
console.log(tree)
