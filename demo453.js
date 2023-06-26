/*
 * @Author: yating.wang
 * @Date: 2023-02-07 10:53:08
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-07 10:59:03
 * @Description: 
 */
var swapPairs = function (head) {
  const res = new ListNode(0, head);
  let last = res;
  while (head && head.next) {
    let nextHead = head.next;
    let tmp = nextHead.next;
    last.next = nextHead;
    nextHead.next = head;
    head.next = tmp;
    last = head;
    head = tmp;
  }
  return res.next;
};