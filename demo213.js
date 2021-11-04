/*
 * @Author: yating.wang
 * @Date: 2021-10-19 08:48:00
 * @LastEditTime: 2021-10-19 08:56:53
 * @LastEditors: yating.wang
 * @Description: 流程控制
 */
function fizzBuzz(num) {
  if (num == null || typeof num !== 'number') {
    return false
  }
  if (num % 3 === 0) {
    if (num % 5 === 0) {
      return 'fizzbuzz'
    }
    return 'fizz'
  }
  if (num % 5 === 0) {
    return 'buzz'
  }
  return num
}