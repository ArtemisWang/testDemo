/*
 * @Author: artemis
 * @Date: 2021-11-16 20:38:41
 * @LastEditTime: 2021-11-16 20:52:57
 * @LastEditors: artemis
 * @Description: 滑动窗口的最大值
 */

class Heap {
  constructor(arr = []) {
    this._heap = arr instanceof Array ? arr : [];
    this.size = arr.length ?? 0;
    this.buildHeap();
  }
  // “下沉”
  downAdjust(parentIndex) {
    let tmp = this._heap[parentIndex];
    let childIndex = 2 * parentIndex + 1;
    while (childIndex < this.size) {
      // 如果有右孩子，且右孩子大于左孩子，则定位到右孩子
      if (childIndex + 1 < this.size && this._heap[childIndex + 1][0] > this._heap[childIndex][0]) {
        childIndex++;
      }
      // 如果父节点大于定位孩子的值，则直接跳出
      if (tmp[0] > this._heap[childIndex][0]) {
        break;
      }
      // 否则，定位的孩子值赋给当前父节点
      // parentIndex指向childIndex
      this._heap[parentIndex] = this._heap[childIndex];
      parentIndex = childIndex;
      childIndex = 2 * parentIndex + 1;
    }
    // 当parentIndex下沉到底时，将一开始暂存的父节点值赋值给当前索引对应的节点
    this._heap[parentIndex] = tmp;
  }
  // “上浮”
  upAdjust(childIndex) {
    let tmp = this._heap[childIndex];
    while (childIndex > 0) {
      const parentIndex = Math.floor((childIndex - 1) / 2);
      if (tmp[0] <= this._heap[parentIndex][0]) {
        break;
      }
      this._heap[childIndex] = this._heap[parentIndex];
      childIndex = parentIndex;
    }
    this._heap[childIndex] = tmp;
  }
  // 建堆
  buildHeap() {
    if (!this.size) return;
    for (let i = Math.floor((this.size - 2) / 2); i >= 0; i--) {
      this.downAdjust(i);
    }
  }
  // 插入节点
  insert(arr) {
    this.size++;
    this._heap.push(arr);
    this.upAdjust(this.size - 1);
  }
  // 删除堆顶节点
  delete() {
    this._heap[0] = this._heap.pop();
    this.size--;
    this.downAdjust(0);
  }
  // 返回堆顶节点
  top() {
    return this._heap[0];
  }
}

var maxSlidingWindow = function (nums, k) {
  if (!nums.length) return [];
  const heap = new Heap();
  const res = [];
  // 将前k个元素插入二叉堆
  for (let i = 0; i < k; i++) {
    heap.insert([nums[i], i]);
  }
  res.push(heap.top()[0]);
  // 窗口继续移动
  for (let i = k; i < nums.length; i++) {
    heap.insert([nums[i], i]);
    while (heap.top()[1] <= i - k) {
      heap.delete();
    }
    res.push(heap.top()[0]);
  }
  return res;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));