/*
 * @Author: yating.wang
 * @Date: 2021-11-17 10:42:04
 * @LastEditTime: 2021-11-17 14:52:04
 * @LastEditors: yating.wang
 * @Description: 快速排序
 */

// 递归
function quickSort(arr,startIndex,endIndex) {
  if (startIndex >= endIndex) return
  let pivotIndex = partition1(arr, startIndex, endIndex)
  quickSort(arr, startIndex, pivotIndex - 1)
  quickSort(arr,pivotIndex+1,endIndex)
}

// 非递归
function quickSort1(arr, startIndex, endIndex) {
  const stack = []
  stack.push([startIndex, endIndex])
  while (stack.length) {
    const [left, right] = stack.pop()
    const pivotIndex = partition1(arr, left, right)
    if (left < pivotIndex - 1) {
      stack.push([left, pivotIndex-1])
    }
    if (pivotIndex + 1 < right) {
      stack.push([pivotIndex+1,right])
    }
  }
}

// 双边循环法
function partition(arr,startIndex,endIndex) {
  let pivot = arr[startIndex]
  let left = startIndex, right = endIndex
  while (left != right) {
    // 控制right指针比较并左移
    while (left < right && arr[right] > pivot) {
      right--
    }
    // 控制left指针比较并右移
    while (left < right && arr[left] <= pivot) {
      left++
    }
    if (left < right) {
      let tmp = arr[left]
      arr[left] = arr[right]
      arr[right]=tmp
    }
  }
  // 指针重合点和pivot交换
  arr[startIndex] = arr[left]
  arr[left] = pivot
  return left
}

// 单边循环法
function partition1(arr,startIndex,endIndex) {
  if (startIndex >= endIndex) return
  const pivot = arr[startIndex]
  let mark = startIndex
  for (let i = startIndex + 1; i <= endIndex; i++){
    if (arr[i] < pivot) {
      mark++
      let tmp = arr[mark]
      arr[mark] = arr[i]
      arr[i]=tmp
    }
  }
  arr[startIndex] = arr[mark]
  arr[mark]=pivot
  return mark
}


const arr = [9, 5, 4, 6, 3, 2, 8, 1, 7, 0]
quickSort1(arr, 0, 9)
console.log(arr)