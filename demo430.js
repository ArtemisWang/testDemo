/*
 * @Author: yating.wang
 * @Date: 2023-01-11 14:22:18
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-01-11 15:32:16
 * @Description: 
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return;
  const set = new Set();
  while (headA) {
    set.add(headA);
    headA = headA.next;
  }
  while (headB) {
    if (set.has(headB)) return headB;
    headB = headB.next;
  }
  return;
};