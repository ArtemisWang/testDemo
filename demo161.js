function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function quickSort(arr, left, right) {
  if (left >= right) return
  let mid = Math.floor((right - left) / 2) + left
  let i = left,
    j = right
  while (i < mid || j > mid) {
    while (i < mid && arr[i] < arr[mid]) {
      i++
    }
    while (j > mid && arr[j] > arr[mid]) {
      j--
    }
    if (i < mid && j > mid) {
      swap(arr, i++, j--)
    } else if (j > mid) {
      swap(arr, mid, j)
      mid = j
      i++
    } else if (i < mid) {
      swap(arr, i, mid)
      mid = i
      j--
    }
  }
  quickSort(arr, left, mid - 1)
  quickSort(arr, mid + 1, right)
}

let arr = [1, 2, 3, 8, 6, 7, 9]
// let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
quickSort(arr, 0, arr.length - 1)
console.log(arr)