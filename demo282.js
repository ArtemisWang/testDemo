/*
 * @Author: artemis
 * @Date: 2021-11-13 17:01:17
 * @LastEditTime: 2021-11-13 17:26:25
 * @LastEditors: artemis
 * @Description: 扁平化多级双向链表
 */
class DoubleListNode {
  constructor(value, prev = null, next = null, child = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
    this.child = child;
  }
}
// 1. 拷贝一份头节点， 头节点肯定不会动， 是最终结果的头节点
// 2. 看当前节点是否有子结构， 如果有， 将当前节点的next压入栈， 当前节点的next指向子节点， 将当前节点的child的prev指向当前节点， 当前节点child置为null， 后向next移动； 如果没有， 向next移动
// 3. 当移动到next为null的节点， 从栈中取出节点p， 当前节点的next指向p， p的prev指向当前节点； 直至next为null， 栈也空结束
var flatten = function (head) {
  let node = head;
  const stack = [];
  while (node || stack.length) {
    if (node.child) {
      node.next && stack.push(node.next);
      node.next = node.child;
      node.child.prev = node;
      node.child = null;
    } else if (!node.next && stack.length) {
      let p = stack.pop();
      node.next = p;
      p.prev = node;
    }
    node = node.next;
  }
  return head;
};