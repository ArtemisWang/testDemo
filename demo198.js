/*
 * @Author: artemis
 * @Date: 2021-10-14 13:15:35
 * @LastEditTime: 2021-10-14 13:31:23
 * @LastEditors: artemis
 * @Description: 移除数组中的元素
 */
function removeWithoutCopy(arr, item) {
  let now = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item && now === -1) {
      now = i;
    } else if (arr[i] !== item && now !== -1) {
      arr[now++] = arr[i];
    }
  }
  arr.splice(now);
  return arr;
}

console.log(removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2));