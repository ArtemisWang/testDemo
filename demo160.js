function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// 归并排序，由小至大
function sort(arr, left, right) {
  if (left >= right) return
  let mid = Math.floor((right - left) / 2) + left
  sort(arr, left, mid)
  sort(arr, mid + 1, right)
  mergeSort(arr, left, right, mid)
}

function mergeSort(arr, left, right, mid) {
  let help = []
  let i = left,
    j = mid + 1
  while (i <= mid && j <= right) {
    help.push(arr[i] < arr[j] ? arr[i++] : arr[j++])
  }
  while (i <= mid) {
    help.push(arr[i++])
  }
  while (j <= right) {
    help.push(arr[j++])
  }
  for (let k = 0; k < help.length; k++) {
    arr[left++] = help[k]
  }
}

let arr = [1, 2, 3, 8, 6, 7, 9]
// let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
sort(arr, 0, arr.length - 1)
console.log(arr)