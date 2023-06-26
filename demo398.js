/*
 * @Author: yating.wang
 * @Date: 2022-12-07 11:13:03
 * @LastEditors: yating.wang
 * @LastEditTime: 2022-12-07 11:24:56
 * @Description: 
 */
function quickSort(arr) {
  const handler = (arr, left, right) => {
    if (left >= right) return;
    let mark = left, pivot = arr[mark];
    for (let i = mark + 1; i <= right; i++) {
      if (arr[i] < pivot) {
        console.log(arr);
        mark++;
        [arr[mark], arr[i]] = [arr[i], arr[mark]];
      }
    }
    [arr[mark], arr[left]] = [pivot, arr[mark]];
    handler(arr, left, mark - 1);
    handler(arr, mark + 1, right);
  };
  handler(arr, 0, arr.length - 1);
}

const arr = [9, 8, 3, 4, 5, 6, 2];
quickSort(arr);
console.log(arr);