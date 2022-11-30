/*
 * @Author: artemis
 * @Date: 2021-11-13 18:43:36
 * @LastEditTime: 2021-11-13 18:53:38
 * @LastEditors: artemis
 * @Description: 和为S的连续正整数序列
 */

// 1. 设置指针p1、 p2从左开始
// 2. p2向右移动并累加到和恰好大于等于S， 如果等于， 打印这组值， p2++
// 3. 和减去p1的值， 同时p1++，直至和恰好小于等于S， 如果等于， 打印这组值， p1++
// 4. 重复第2步， 直至p1 >= p2
function findContiniousSequence(S) {
  if (S <= 2) return;
  let p1 = 1, p2 = 2;
  let sum = 3;
  while (p1 < p2) {
    while (sum < S) {
      p2++;
      sum += p2;
    }
    if (sum === S) {
      console.log(p1 + '-' + p2);
      p2++;
      sum += p2;
    }
    while (sum > S) {
      sum -= p1;
      p1++;
    }
  }
  return;
}

console.log(findContiniousSequence(15));