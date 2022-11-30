/*
 * @Author: artemis
 * @Date: 2021-11-11 10:48:21
 * @LastEditTime: 2021-11-11 15:07:51
 * @LastEditors: artemis
 * @Description: 删除链表中重复的节点
 */
class Node {
  constructor(v, node = null) {
    this.value = v;
    this.next = node;
  }
}

function deleteDuplication(head) {
  if (!head || !head.next) return head;
  let set = new Set();
  let node = head;
  set.add(node.value);
  // 当node不为倒数第二节点
  while (node.next.next) {
    if (set.has(node.next.value)) {
      node.next.value = node.next.next.value;
      node.next.next = node.next.next.next;
    } else {
      set.add(node.next.value);
      node = node.next;
    }
  }
  // 当node为倒数第二个节点时，看末尾节点是否重复，重复置为空
  if (node.next && set.has(node.next.value)) {
    node.next = null;
  }
  return head;
}

const head = new Node(1);
head.next = new Node(1);
head.next.next = new Node(1);
head.next.next.next = new Node(1);
head.next.next.next.next = new Node(3);
console.log(deleteDuplication(head));