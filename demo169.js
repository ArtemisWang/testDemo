function findMaxLength(arr) {
  let maxLength = 1
  let nowLength = 1
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] > arr[i]) {
      nowLength++
    } else {
      nowLength = 1
    }
    maxLength = Math.max(maxLength, nowLength)
  }
  return maxLength
}

console.log(findMaxLength([0, 3, 4, 17, 2, 8, 6, 10]))