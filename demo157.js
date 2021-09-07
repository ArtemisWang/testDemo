function swap(array, i, j) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

function bubble(array) {
  // 从小至大排序
  for (let i = array.length - 1; i > 0; i--) {
    for (j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
      }
    }
  }
  console.log(array)
}

bubble([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])