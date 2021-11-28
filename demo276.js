/*
 * @Author: yating.wang
 * @Date: 2021-11-11 15:24:00
 * @LastEditTime: 2021-11-11 16:20:07
 * @LastEditors: yating.wang
 * @Description: 反转链表
 */
class Node {
  constructor(v, node = null) {
    this.value = v
    this.next = node
  }
}

function reverseList(head) {
  if (!head || !head.next) return head
  let node = head.next
  head.next = null
  let tmp = null
  while (node) {
    tmp = node.next
    node.next = head
    head = node
    node = tmp
  }
  return head
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
console.log(reverseList(head))