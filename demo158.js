function swap(array, i, j) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

// 从小至大排序
function selection(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = i
    for (let j = i + 1; j < arr.length; j++) {
      temp = arr[temp] < arr[j] ? temp : j
    }
    if (i !== temp) swap(arr, i, temp)
  }
  console.log(arr)
}

selection([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])