/*
 * @Author: artemis
 * @Date: 2021-11-12 14:44:22
 * @LastEditTime: 2021-11-12 15:30:32
 * @LastEditors: artemis
 * @Description: 两个链表的交点
 */
function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;
  let p1 = headA;
  let p2 = headB;
  // 设置flag变量记录是否切换过路线，如果切换过就不能再次切换
  let flag = 1;
  while (p1) {
    if (p1 === p2) return p1;
    p1 = p1.next;
    p2 = p2.next;
    if (!p1 && flag) {
      flag = 0;
      p1 = headB;
    }
    if (!p2) p2 = headA;
  }
  return null;
}