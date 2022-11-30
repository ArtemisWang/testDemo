/*
 * @Author: artemis
 * @Date: 2021-10-19 15:42:24
 * @LastEditTime: 2021-10-19 15:44:28
 * @LastEditors: artemis
 * @Description: 十进制转换为二进制
 */
function base10(str) {
  return Number('0b' + str);
}

console.log(base10('11000000'));