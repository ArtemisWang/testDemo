/*
 * @Author: yating.wang
 * @Date: 2021-11-12 13:33:35
 * @LastEditTime: 2021-11-12 13:40:46
 * @LastEditors: yating.wang
 * @Description: 环形链表的入口
 */

function searchCycleListEntry(head) {
  if (!head || !head.next) return null
  let p1 = head.next
  let p2 = p1.next
  while (p1 !== p2) {
    if (p2 == null || p2.next == null) {
      return null
    }
    p1 = p1.next
    p2 = p2.next.next
  }
  p2 = head
  while (p2 !== p1) {
    p2 = p2.next
    p1 = p1.next
  }
  return p2
}