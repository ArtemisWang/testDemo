/*
 * @Author: yating.wang
 * @Date: 2021-10-20 10:50:39
 * @LastEditTime: 2021-10-20 11:04:59
 * @LastEditors: yating.wang
 * @Description: 检查重复字符串
 */
function containsRepeatingLetter(str) {
  let set = new Set()
  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i]) && /[a-zA-Z]/.test(str[i])) {
      return true
    }
    set.add(str[i])
  }
  return false
}