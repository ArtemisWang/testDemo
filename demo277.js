/*
 * @Author: yating.wang
 * @Date: 2021-11-11 16:27:31
 * @LastEditTime: 2021-11-12 09:41:52
 * @LastEditors: yating.wang
 * @Description: 复杂链表的复制
 */
class Node {
  constructor(v, node = null, random = null) {
    this.value = v
    this.next = node
    this.random = random
  }
}

function copyList(head) {
  let node = head
  let newNode = null
  while (node) {
    // 复制节点至原来节点的后面
    newNode = new Node(node.value, node.next, node.random)
    node.next = newNode
    node = newNode.next
  }
  // 给复制的链表random赋值
  node = head
  while (node) {
    node.next.random = node.random.next
    node = node.next.next
  }
  // 拆分链表
  node = head
  let newHead = head.next
  while (node.next) {
    newNode = node.next
    node.next = newNode.next
    node = newNode
  }
  return newHead
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.random = head.next.next
head.next.random = head.next.next
head.next.next.random = head
head.next.next.next.random = head.next.next.next.next
head.next.next.next.next.random = head.next.next.next

console.log(copyList(head).next.next.next.next)