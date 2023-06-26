/*
 * @Author: yating.wang
 * @Date: 2023-01-06 13:41:31
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-01-09 09:14:22
 * @Description: 
 */
var addTwoNumbers = function (l1, l2) {
  const head = l1;
  let count = 0, tmp = 0;
  while (l2) {
    tmp = l1.val + count + l2.val;
    l1.val = tmp % 10;
    count = Math.floor(tmp / 10);
    if (l1.next == null && (l2.next || count)) {
      l1.next = new ListNode();
    }
    l1 = l1.next;
    l2 = l2.next;
  }
  while (l1) {
    tmp = l1.val + count;
    l1.val = tmp % 10;
    count = Math.floor(tmp / 10);
    if (l1.next == null) {
      if (count) {
        l1.next = new ListNode(count);
        break;
      }
    }
    l1 = l1.next;
  }
  return head;
};