/*
 * @Author: artemis
 * @Date: 2021-12-01 12:37:30
 * @LastEditTime: 2022-02-13 11:07:21
 * @LastEditors: artemis
 * @Description: 数组乱序-洗牌算法
 */
function disorder(array) {
  const length = array.length;
  let current = length - 1;
  let random;
  while (current > -1) {
    random = Math.floor(length * Math.random());
    [array[current], array[random]] = [array[random], array[current]];
    current--;
  }
  return array;
}

console.log(disorder([1, 2, 3, 4, 5, 6, 7, 8, 9, 12]));