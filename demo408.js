/*
 * @Author: yating.wang
 * @Date: 2022-12-07 16:26:31
 * @LastEditors: yating.wang
 * @LastEditTime: 2022-12-07 17:13:19
 * @Description: 
 */
var getKthFromEnd = function (head, k) {
  let tmp = head;
  while (--k) {
    head = head.next;
  }
  while (head.next) {
    head = head.next;
    tmp = tmp.next;
  }
  return tmp;
};
