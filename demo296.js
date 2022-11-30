/*
 * @Author: artemis
 * @Date: 2021-11-16 08:10:15
 * @LastEditTime: 2021-11-16 08:22:04
 * @LastEditors: artemis
 * @Description: 栈的压入弹出序列
 */
// 1. 设置一个缓存栈stack， 将pushed中的值依次压入stack
// 2. 为popped设置一个指针p， 指向当前的待pop值
// 3. 每当压入一个值， 判断这个值与popped中当前值是否相等， 如果相等， stack.pop()； 如果不相等， 回到步骤1
var validateStackSequences = function (pushed, popped) {
  let p = 0;
  const stack = [];
  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i]);
    while (stack.length >= 1 && stack[stack.length - 1] === popped[p]) {
      stack.pop();
      p++;
    }
  }
  return stack.length === 0;
};

console.log(validateStackSequences([1, 2, 3, 4, 5],
  [4, 5, 3, 2, 1]));