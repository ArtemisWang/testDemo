/*
 * @Author: yating.wang
 * @Date: 2021-10-19 15:54:57
 * @LastEditTime: 2021-10-19 15:54:57
 * @LastEditors: yating.wang
 * @Description: 二进制转换
 */
function convertToBinary(num) {
  let tmp = num.toString(2)
  while (tmp.length < 8) {
    tmp = '0' + tmp
  }
  return tmp
}