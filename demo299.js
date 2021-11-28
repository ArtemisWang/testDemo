/*
 * @Author: yating.wang
 * @Date: 2021-11-16 14:49:25
 * @LastEditTime: 2021-11-16 15:25:50
 * @LastEditors: yating.wang
 * @Description: 二叉搜索树与双向链表
 */
class Tree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

var treeToDoublyList = function(root) {
  if(!root) return 
  const stack = []
  let head = null
  let prev = null
  while (stack.length||root) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      if (!head) {
        head = root
      }
      if (prev) {
        root.left = prev
        prev.right = root
      }
      prev = root
      root = root.right
    }
  }
  head.left = prev
  prev.right = head
  return head
};

const tree = new Tree(4)
tree.left = new Tree(2)
tree.left.left = new Tree(1)
tree.left.right = new Tree(3)
tree.right = new Tree(5)

console.log(treeToDoublyList(tree).right.right)