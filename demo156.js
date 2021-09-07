// 堆的实现通过构造二叉堆，实为二叉树的一种
// 堆的结构：
// 1. 任意节点小于（或大于）它的所有子节点
// 2. 堆总是一棵完全树。即除了最底层，其他层的节点都被元素填满，且最底层从左到右填入
// 将根节点最大的堆叫做（最大堆）或（大根堆），根节点最小的堆叫做（最小堆）或（小根堆）

// 实现大根堆
// shiftUp:一路将节点与父节点对比大小，如果比父节点大，就和父节点交换位置
// shiftDown:现将根节点与末尾位置交换位置，然后移除末尾位置元素，接下来循环判断父节点和两个子节点的大小，如果子节点大，就把最大的子节点和父节点交换
class MaxHeap {
  constructor() {
    this.heap = []
  }
  size() {
    return this.heap.length
  }
  empty() {
    return this.size() === 0
  }
  add(item) {
    this.heap.push(item)
    this._shiftUp(this.size() - 1)
  }
  removeMax() {
    this._shiftDown(0)
  }
  getParentIndex(k) {
    return parseInt((k - 1) / 2)
  }
  getLeftIndex(k) {
    return k * 2 + 1
  }
  _shiftUp(k) {
    // 如果当前节点比父节点大，就交换
    while (this.heap[k] > this.heap[this.getParentIndex(k)]) {
      this._swap(k, this.getParentIndex(k))
      // 将索引变成父节点
      k = this.getParentIndex(k)
    }
  }
  _shiftDown(k) {
    // 交换首位并删除末尾
    this._swap(k, this.size() - 1)
    this.heap.splice(this.size() - 1, 1)
    // 判断节点是否有左孩子，因为二叉堆的特性，有右必有左
    while (this.getLeftIndex(k) < this.size()) {
      let j = this.getLeftIndex(k)
      // 判断是否有右孩子，并且右孩子是否大于左孩子
      // 如果是的话，j指向右孩子（指向更大的节点）
      if (j + 1 < this.size() && this.heap[i + 1] > this.heap[i]) j++
      // 判断父节点是否已经比子节点都大
      if (this.heap[k] >= this.heap[j]) break
      this._swap(k, j)
      k = j
    }
  }
  _swap(left, right) {
    let rightValue = this.heap[right]
    this.heap[right] = this.heap[left]
    this.heap[left] = rightValue
  }
}