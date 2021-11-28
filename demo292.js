/*
 * @Author: yating.wang
 * @Date: 2021-11-15 15:01:01
 * @LastEditTime: 2021-11-15 16:19:30
 * @LastEditors: yating.wang
 * @Description: 扑克牌顺子
 */
// 设置最小值min， 最大值max， 有两种情况
// 1. max - min <= 4， 且没有重复值， 设置set判断重复
// 2. max - min <= 4， 且只有0重复
var isStraight = function(nums) {
  const set = new Set()
  let min = 14, max = 0
  for (let p of nums) {
    if (!p) continue
    if (set.has(p)) return false
    set.add(p)
    max = Math.max(p, max)
    min = Math.min(p, min)
  }
  return max-min<5
};

console.log(isStraight([1,2,3,4,5]))