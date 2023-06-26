/*
 * @Author: yating.wang
 * @Date: 2023-01-11 15:33:53
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-01-11 15:45:58
 * @Description: 
 */
var removeNthFromEnd = function (head, n) {
  const tmp = head;
  let i = 0;
  while (i < n) {
    head = head.next;
    i++;
  }
  if (!head) return tmp.next;
  let left = tmp;
  while (head.next) {
    head = head.next;
    left = left.next;
  }
  left.next = left.next.next;
  return tmp;
};