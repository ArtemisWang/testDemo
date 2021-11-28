/*
 * @Author: yating.wang
 * @Date: 2021-11-16 12:41:47
 * @LastEditTime: 2021-11-16 13:35:13
 * @LastEditors: yating.wang
 * @Description: 构建二叉堆
 */
class Heap{
  constructor(arr = []) {
    this._heap = arr instanceof Array?arr:[]
    this.size = arr.length??0
    this.buildHeap()
  }
  // “下沉”
  downAdjust(parentIndex) {
    let tmp = this._heap[parentIndex]
    let childIndex = 2 * parentIndex + 1
    while (childIndex < this.size) {
      // 如果有右孩子，且右孩子小于左孩子，则定位到右孩子
      if (childIndex + 1 < this.size && this._heap[childIndex + 1] < this._heap[childIndex]) {
        childIndex++
      }
      // 如果父节点小于定位孩子的值，则直接跳出
      if (tmp < this._heap[childIndex]) {
        break
      }
      // 否则，定位的孩子值赋给当前父节点
      // parentIndex指向childIndex
      this._heap[parentIndex] = this._heap[childIndex]
      parentIndex = childIndex
      childIndex = 2*parentIndex+1
    }
    // 当parentIndex下沉到底时，将一开始暂存的父节点值赋值给当前索引对应的节点
    this._heap[parentIndex] = tmp
  }
  // “上浮”
  upAdjust(childIndex) {
    let tmp = this._heap[childIndex]
    while (childIndex > 0) {
      const parentIndex = Math.floor((childIndex - 1) / 2)
      if (tmp >= this._heap[parentIndex]) {
        break
      }
      this._heap[childIndex] = this._heap[parentIndex]
      childIndex = parentIndex
    }
    this._heap[childIndex]=tmp
  }
  // 建堆
  buildHeap() {
    if(!this.size) return
    for (let i = Math.floor((this.size - 2) / 2); i >= 0; i--){
      this.downAdjust(i)
    }
  }
  // 插入节点
  insert(value) {
    this.size++
    this._heap.push(value)
    this.upAdjust(this.size-1)
  }
  // 删除堆顶节点
  delete() {
    this._heap[0] = this._heap.pop()
    this.size--
    this.downAdjust(0)
  }
}

const heap = new Heap([7, 1, 3, 10, 5, 2, 8, 9, 6])
console.log(heap._heap)
heap.insert(0)
console.log(heap._heap)
heap.delete()
console.log(heap._heap)