/*
 * @Author: artemis
 * @Date: 2021-11-11 08:37:14
 * @LastEditTime: 2021-11-11 08:41:00
 * @LastEditors: artemis
 * @Description: 从头到尾打印链表
 */
class Node {
  constructor(v, node = null) {
    this.value = v;
    this.next = node;
  }
}

function printLinkList(head) {
  const res = [];
  while (head) {
    res.push(head.value);
    head = head.next;
  }
  return res;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
console.log(printLinkList(head));