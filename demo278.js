/*
 * @Author: yating.wang
 * @Date: 2021-11-12 10:09:54
 * @LastEditTime: 2021-11-12 10:51:19
 * @LastEditors: yating.wang
 * @Description: 判断链表中是否有环
 */
var hasCycle = function (head) {
  if (!head || !head.next) return false
  let sNode = head // 慢指针
  let fNode = head // 快指针
  if (!fNode.next || !fNode.next.next) return false
  fNode = fNode.next
  while (fNode !== sNode) {
    if (!fNode.next || !fNode.next.next) return false
    fNode = fNode.next.next
    sNode = sNode.next
  }
  return true
};