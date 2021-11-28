/*
 * @Author: yating.wang
 * @Date: 2021-11-15 20:25:42
 * @LastEditTime: 2021-11-15 21:24:00
 * @LastEditors: yating.wang
 * @Description: 包含min函数的栈
 */
class Stack{
  constructor() {
    this._array = []
    this._min = []
    this._size = 0
  }
  push(v) {
    this.min() && this.min() <= v && this._min.push(this.min()) || this._min.push(v)
    this._array.push(v)
    this._size++
  }
  pop() {
    this._min.pop()
    this._size--
    return this._array.pop()
  }
  min() {
    return this._min[this._size-1]||null
  }
}

const stack = new Stack()
stack.push(9)
stack.push(16)
console.log(stack.min())
stack.push(2)
stack.push(10)
console.log(stack.min())
stack.push(1)
console.log(stack.min())
stack.pop()
stack.pop()
stack.pop()
console.log(stack.min())