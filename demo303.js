/*
 * @Author: yating.wang
 * @Date: 2021-11-18 08:48:25
 * @LastEditTime: 2021-11-18 08:56:46
 * @LastEditors: yating.wang
 * @Description: 堆排序
 */

class Heap {
  // 大根堆
  constructor(arr = []) {
    this._heap = arr instanceof Array ? arr : []
    this.size = arr.length ?? 0
    this.buildHeap()
  }
  // “下沉”
  downAdjust(parentIndex) {
    let tmp = this._heap[parentIndex]
    let childIndex = 2 * parentIndex + 1
    while (childIndex < this.size) {
      // 如果有右孩子，且右孩子大于左孩子，则定位到右孩子
      if (childIndex + 1 < this.size && this._heap[childIndex + 1] > this._heap[childIndex]) {
        childIndex++
      }
      // 如果父节点大于定位孩子的值，则直接跳出
      if (tmp > this._heap[childIndex]) {
        break
      }
      // 否则，定位的孩子值赋给当前父节点
      // parentIndex指向childIndex
      this._heap[parentIndex] = this._heap[childIndex]
      parentIndex = childIndex
      childIndex = 2 * parentIndex + 1
    }
    // 当parentIndex下沉到底时，将一开始暂存的父节点值赋值给当前索引对应的节点
    this._heap[parentIndex] = tmp
  }
  // “上浮”
  upAdjust(childIndex) {
    let tmp = this._heap[childIndex]
    while (childIndex > 0) {
      const parentIndex = Math.floor((childIndex - 1) / 2)
      if (tmp <= this._heap[parentIndex]) {
        break
      }
      this._heap[childIndex] = this._heap[parentIndex]
      childIndex = parentIndex
    }
    this._heap[childIndex] = tmp
  }
  // 建堆
  buildHeap() {
    if (!this.size) return
    for (let i = Math.floor((this.size - 2) / 2); i >= 0; i--) {
      this.downAdjust(i)
    }
  }
  // 插入节点
  insert(value) {
    this.size++
    this._heap.push(value)
    this.upAdjust(this.size - 1)
  }
  // 删除堆顶节点
  delete() {
    let tmp = this._heap[0]
    this._heap[0] = this._heap[this.size - 1]
    this._heap[this.size-1]=tmp
    this.size--
    this.downAdjust(0)
  }
}
function heapSort(arr) {
  const heap = new Heap(arr)
  let n = arr.length
  while (n--) {
    heap.delete()
  }
}

const arr = [9, 5, 4, 6, 3, 2, 8, 1, 7, 0]
heapSort(arr)
console.log(arr)