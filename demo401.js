/*
 * @Author: yating.wang
 * @Date: 2022-12-07 13:30:26
 * @LastEditors: yating.wang
 * @LastEditTime: 2022-12-07 13:36:54
 * @Description: 
 */
var mergeTwoLists = function (list1, list2) {
  let head = new ListNode(0), tmp = head;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      head.next = list1;
      list1 = list1.next;
    } else {
      head.next = list2;
      list2 = list2.next;
    }
    head = head.next;
  }
  if (list1) head.next = list1;
  if (list2) head.next = list2;
  return tmp.next;
};