/*
 * @Author: artemis
 * @Date: 2021-10-13 09:51:53
 * @LastEditTime: 2021-10-13 09:53:35
 * @LastEditors: artemis
 * @Description: 斐波那契数列
 */
function fibonacci(n) {
  let memo = [0, 1];
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
}