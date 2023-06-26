var sortArray = function (nums) {
  function sort(nums, left, right) {
    if (left >= right) return
    let mid = Math.floor((left + right) / 2)
    sort(nums, left, mid)
    sort(nums, mid + 1, right)
    merge(nums, mid, left, right)
  }
  function merge(nums, mid, left, right) {
    let p = left, q = mid + 1
    let arr = []
    while (p <= mid && q <= right) {
      if (nums[p] < nums[q]) {
        arr.push(nums[p++])
      } else {
        arr.push(nums[q++])
      }
    }
    while (p <= mid) {
      arr.push(nums[p++])
    }
    while (q <= right) {
      arr.push(nums[q++])
    }
    p = 0
    while (p < arr.length) {
      nums[left + p] = arr[p++]
    }
  }
  sort(nums, 0, nums.length - 1)
  return nums
}

console.log(sortArray([4, 3, 6, 5, 9, 8, 1, 2, 0]))