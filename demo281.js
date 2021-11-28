/*
 * @Author: yating.wang
 * @Date: 2021-11-12 16:21:55
 * @LastEditTime: 2021-11-13 16:45:48
 * @LastEditors: yating.wang
 * @Description: 删除链表倒数第n个节点
 */
class Node {
  constructor(v, node = null) {
    this.value = v
    this.next = node
  }
}
var removeNthFromEnd = function(head, n) {
  if (!head) return null
  let p1 = head,
    p2 = head
  // 如果n等于1
  if (n === 1) {
    // 如果待删除节点是头节点
    if (!p1.next) return null
    // 如果待删除节点非头节点
    while (p1.next.next) {
      p1=p1.next
    }
    p1.next = null
    return head
  }
  // 待删除节点非最后一个节点
  while (n--) {
    p2 = p2.next
  }
  while (p2) {
    p1 = p1.next
    p2 = p2.next
  }
  p1.value = p1.next.value
  p1.next = p1.next.next
  return head
};
const head = new Node(1)
// head.next = new Node(2)
// head.next.next = new Node(3)
// head.next.next.next = new Node(4)
// head.next.next.next.next = new Node(5)

console.log(removeNthFromEnd(head, 1))