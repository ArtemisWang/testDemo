/*
 * @Author: artemis
 * @Date: 2021-10-19 15:34:37
 * @LastEditTime: 2021-10-19 15:37:44
 * @LastEditors: artemis
 * @Description: 二进制转换
 */
function valueAtBit(num, bit) {
  let tmp = num.toString(2);
  return tmp.charAt(tmp.length - bit);
}
console.log(valueAtBit(128, 1));