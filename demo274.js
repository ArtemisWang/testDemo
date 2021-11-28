/*
 * @Author: yating.wang
 * @Date: 2021-11-11 09:25:05
 * @LastEditTime: 2021-11-11 14:00:05
 * @LastEditors: yating.wang
 * @Description: 删除链表节点
 */

class Node {
  constructor(v, node = null) {
    this.value = v
    this.next = node
  }
}
// 时间复杂度：O(1)
function deleteNode(head, node) {
  if (node.next) {
    // node.next存在，node非尾节点
    node.value = node.next.value
    node.next = node.next.next
  } else if (node === head) {
    // node是头节点，同时也是尾节点，是单节点
    head=null
  } else {
    // node是末尾节点，不是头节点
    node=head
    while (node.next.next) {
      node=node.next
    }
    // 此时node指向倒数第二个节点
    node.next = null
  }
  // 将node指针置为空
  node = null
  return head
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log(deleteNode(head, head))