class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// 反转链表需要设置三个指针
// prev:一直向后走，指向当前已翻转部分的链表末尾
// head:指向当前已翻转部分的链表头
// tmp:指向未翻转部分的链表头（下一个已翻转部分的链表头）
var reverseList = function (head) {
  let prev = head
  while (prev.next != null) {
    let tmp = prev.next
    let nextPrev = prev.next.next
    prev.next = nextPrev
    tmp.next = head
    head = tmp
  }
  return head
}


let node1 = new Node(1)
node1.next = new Node(2)
node1.next.next = new Node(3)
node1.next.next.next = new Node(4)

console.log(reverseList(node1))