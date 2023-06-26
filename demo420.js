/*
 * @Author: yating.wang
 * @Date: 2022-12-16 15:37:38
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-01-06 10:59:13
 * @Description: 
 */

var reverseKGroup = function (head, k) {
  let count = 0, cur = head;
  while (cur != null && count < k) {
    count++;
    cur = cur.next;
  }
  if (count === k) {
    cur = reverseKGroup(cur, k);
    while (count) {
      count--;
      let temp = head.next;
      head.next = cur;
      cur = head;
      head = temp;
    }
    head = cur;
  }
  return head;
};