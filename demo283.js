/*
 * @Author: artemis
 * @Date: 2021-11-13 17:44:00
 * @LastEditTime: 2021-11-13 17:54:26
 * @LastEditors: artemis
 * @Description: 调整数组顺序
 */
function handleOrder(arr) {
  if (arr.length <= 1) return arr;
  let p1 = 0,
    p2 = arr.length - 1;
  while (p1 < p2) {
    while (arr[p1] % 2) {
      if (p1 >= arr.length) return arr;
      p1++;
    }
    while (!(arr[p2] % 2)) {
      if (p2 < 0) return arr;
      p2--;
    }
    if (p1 < p2) {
      let tmp = arr[p1];
      arr[p1] = arr[p2];
      arr[p2] = tmp;
      p1++;
      p2--;
    }
  }
  return arr;
}

console.log(handleOrder([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));