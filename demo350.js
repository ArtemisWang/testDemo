/*
 * @Author: yating.wang
 * @Date: 2021-12-13 09:32:06
 * @LastEditTime: 2021-12-13 14:02:14
 * @LastEditors: yating.wang
 * @Description: 和为k的子数组
 */
// 双指针， 记录快指针和慢指针之间的数字和sum， 和为k的数组的个数res
//   当sum大于k， 慢指针右移直至sum <= k， 更新sum； 
//   当sum等于k， res++，快指针右移一步；
//   当sum小于k， 快指针右移， 直至sum >= k， 更新sum。
var subarraySum = function(nums, k) {
  if(!nums.length) return 0
  let res = 0
  const hash = new Map()
  hash.set(0, 1)
  hash.set(nums[0], (hash.get(nums[0]) || 0 )+ 1)
  let dp=nums[0]
  for (let i = 1; i < nums.length; i++){
    let tmp = nums[i] + dp
    if (hash.has(tmp - k)) {
      res += hash.get(tmp - k)
    }
    hash.set(tmp, (hash.get(tmp) || 0) + 1)
    dp=tmp
  }
  if(nums[0]===k) res++
  return res
};

console.log(subarraySum([0,0],0))