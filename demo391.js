/*
 * @Author: artemis
 * @Date: 2022-06-21 10:45:22
 * @LastEditTime: 2022-06-21 12:39:41
 * @LastEditors: artemis
 * @Description: 数组第k大的数
 */
// 使用快排算法，O(n)
function kthMax(arr, k) {
  const n = arr.length;
  const target = n - k;
  let mark = quickSort(arr, 0, n - 1);
  let startIndex = 0;
  let endIndex = n - 1;
  while (mark !== target) {
    if (mark < target) {
      startIndex = mark + 1;
    } else {
      endIndex = mark - 1;
    }
    mark = quickSort(arr, startIndex, endIndex);
  }
  return arr[mark];
}

function quickSort(arr, startIndex, endIndex) {
  if (startIndex >= endIndex) return startIndex;
  let mark = startIndex;
  const pivot = arr[startIndex];
  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (arr[i] < pivot) {
      mark++;
      [arr[mark], arr[i]] = [arr[i], arr[mark]];
    }
  }
  [arr[startIndex], arr[mark]] = [arr[mark], arr[startIndex]];
  console.log(arr, mark);
  return mark;
}


const arr = [4, 7, 3, 5, 6, 2, 8, 1];
console.log(kthMax(arr, 3), arr);