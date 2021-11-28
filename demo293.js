/*
 * @Author: yating.wang
 * @Date: 2021-11-15 19:23:05
 * @LastEditTime: 2021-11-15 19:40:24
 * @LastEditors: yating.wang
 * @Description: 第一个只出现一次的字符
 */
// 1. 第一次遍历创建hash表， 存储字符和出现次数
// 2. 第二次遍历到出现次数为1的字符， 返回其位置
var firstUniqChar = function(s) {
  const hash = new Map()
  const n=s.length
  for (let i = 0; i < n; i++){
    if (hash.has(s[i])) {
      hash.set(s[i],hash.get(s[i])+1)
    } else {
      hash.set(s[i],1)
    }
  }
  for (let i = 0; i < n; i++){
    if(hash.get(s[i])===1) return i
  }
  return null
};