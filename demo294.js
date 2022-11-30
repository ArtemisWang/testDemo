/*
 * @Author: artemis
 * @Date: 2021-11-15 19:50:38
 * @LastEditTime: 2021-11-15 20:21:05
 * @LastEditors: artemis
 * @Description: 用两个栈实现队列
 */
// 使用class来建立Queue结构， 其中包括两个栈， array和_array
// 当有值进入时， 将array中所有值pop出到_array中， 将新值入栈array， 再将_array中的所有值push至array中
class Queue {
  constructor() {
    this.array = [];
    this._array = [];
  }
  enQueue(value) {
    while (this.array.length) {
      this._array.push(this.array.pop());
    }
    this.array.push(value);
    while (this._array.length) {
      this.array.push(this._array.pop());
    }
  }
  deQueue() {
    return this.array.pop();
  }
}

let queue = new Queue();
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);
console.log(queue.deQueue(), queue.deQueue());
queue.enQueue(5);