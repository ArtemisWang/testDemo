/*
 * @Author: yating.wang
 * @Date: 2021-10-20 10:46:24
 * @LastEditTime: 2021-10-20 10:48:33
 * @LastEditors: yating.wang
 * @Description: 判断是否包含数字
 */
function containsNumber(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 0 && str[i] <= 9) {
      return true
    }
  }
  return false
}