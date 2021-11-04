/*
 * @Author: yating.wang
 * @Date: 2021-10-20 13:07:09
 * @LastEditTime: 2021-10-20 13:31:29
 * @LastEditors: yating.wang
 * @Description: 获取指定字符串
 */
function captureThreeNumbers(str) {
  let index = str.match(/[0-9]{3}/)
  if (!index) {
    return false
  }
  index = index.index
  return str.slice(index, index + 3)
}

captureThreeNumbers('absh')