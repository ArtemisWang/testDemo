class Stack {
  constructor() {
    this.stack = []
  }
  push(item) {
    this.stack.push(item)
  }
  pop() {
    this.stack.pop()
  }
  peek() { //返回栈底的值
    return this.stack[this.getCount() - 1]
  }
  getCount() { //返回栈长
    return this.stack.length
  }
  isEmpty() {
    return this.getCount() === 0
  }
}