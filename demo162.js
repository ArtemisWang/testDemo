function swap(arr, i, j) {
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

// 堆排序利用了二叉堆的性质
// 从小至大排序

function heapSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    shiftUp(arr, i)
  }
  let len = arr.length
  while (len > 1) {
    shiftDown(arr, len--)
  }
}

function shiftUp(arr, n) {
  while (n > 0 && arr[n] > arr[parseInt((n - 1) / 2)]) {
    swap(arr, n, parseInt((n - 1) / 2))
    n = parseInt((n - 1) / 2)
  }
}

function shiftDown(arr, k) {
  swap(arr, 0, k - 1)
  let size = k - 2
  let child = 1
  while (child < size) {
    if (child + 1 < size && arr[child] < arr[child + 1]) child++
    if (arr[parseInt((child - 1) / 2)] > arr[child]) break
    swap(arr, parseInt((child - 1) / 2), child)
    child = child * 2 + 1
  }
}

let arr = [1, 2, 3, 8, 6, 7, 9]
// let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
heapSort(arr)
console.log(arr)