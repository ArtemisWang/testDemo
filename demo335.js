/*
 * @Author: yating.wang
 * @Date: 2021-12-01 12:37:30
 * @LastEditTime: 2021-12-01 12:39:12
 * @LastEditors: yating.wang
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
