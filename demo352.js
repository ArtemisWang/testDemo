/*
 * @Author: yating.wang
 * @Date: 2021-12-13 15:06:29
 * @LastEditTime: 2021-12-13 15:29:35
 * @LastEditors: yating.wang
 * @Description: 删除链表的中间节点
 */
// 整个遍历一遍，单指针
var deleteMiddle1 = function(head) {
  if (!head.next) return null
  let n = 1,
    p = head
  while (p && p.next) {
    n++
    p = p.next
  }
  n = Math.floor(n / 2) - 1
  p = head
  while (n > 0) {
    p = p.next
    n--
  }
  p.next = p.next.next
  return head
};

// 快慢指针
var deleteMiddle = function(head) {
  if(!head.next) return null
  let p1 = head, p2 = head
  while (p2 && p2.next) {
    p2 = p2.next.next
    p1 = p1.next
  }
  p1.next=p1.next.next
  return head
};