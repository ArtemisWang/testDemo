/*
 * @Author: artemis
 * @Date: 2021-12-07 21:11:44
 * @LastEditTime: 2021-12-09 17:59:10
 * @LastEditors: artemis
 * @Description: 函数执行上下文
 */
function add(num1, num2) {
  let sum = num1 + num2;
  console.log(this.add[[scope]]);
  return sum;
}

add(1, 2);
