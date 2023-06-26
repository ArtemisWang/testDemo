var findNumberOfLIS = function (nums) {
  const dpLength = []
  const dpNum = []
  let res = 0, n = nums.length, maxLength = 0
  for (let i = 0; i < n; i++) {
    dpLength.push(1)
    dpNum.push(1)
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dpLength[j] + 1 > dpLength[i]) {
          dpLength[i] = dpLength[j] + 1
          dpNum[i] = dpNum[j]
        } else if (dpLength[j] + 1 === dpLength[i]) {
          dpNum[i] += dpNum[j]
        }
      }
    }
    if (dpLength[i] > maxLength) {
      maxLength = dpLength[i]
      res = dpNum[i]
    } else if (dpLength[i] === maxLength) {
      res += dpNum[i]
    }
  }
  return res
}