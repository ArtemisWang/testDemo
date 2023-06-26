/*
 * @Author: yating.wang
 * @Date: 2022-12-07 17:18:19
 * @LastEditors: yating.wang
 * @LastEditTime: 2022-12-09 10:34:43
 * @Description: 
 */
// 双向链表+hash

var LRUCache = function (capacity) {
  this.head = new DLinkedNode();
  this.tail = new DLinkedNode();
  this.hash = new Map;
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.size = 0;
  this.capacity = capacity;
};

LRUCache.prototype.get = function (key) {
  const node = this.hash.get(key);
  if (node) {
    this.moveToHead(node);
    return node.val;
  }
  return -1;
};

LRUCache.prototype.put = function (key, value) {
  if (this.hash.has(key)) {
    const node = this.hash.get(key);
    node.val = value;
    this.moveToHead(node);
  } else if (this.capacity > this.size) {
    const node = new DLinkedNode(key, value);
    this.hash.set(key, node);
    this.addToHead(node);
  } else {
    const tailNode = this.removeTail();
    this.hash.delete(tailNode.key);
    const node = new DLinkedNode(key, value);
    this.hash.set(key, node);
    this.addToHead(node);
  }
  console.log(this.hash);
};

LRUCache.prototype.addToHead = function (node) {
  const tmp = this.head.next;
  this.head.next = node;
  node.prev = this.head;
  node.next = tmp;
  tmp.prev = node;
  this.size++;
};

LRUCache.prototype.removeNode = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
  this.size--;
};

LRUCache.prototype.moveToHead = function (node) {
  this.removeNode(node);
  this.addToHead(node);
};

LRUCache.prototype.removeTail = function () {
  if (!this.size) return;
  const tmp = this.tail.prev;
  tmp.prev.next = this.tail;
  this.tail.prev = tmp.prev;
  this.size--;
  return tmp;
};

class DLinkedNode {
  constructor(key = 0, val = 0, prev = null, next = null) {
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}
