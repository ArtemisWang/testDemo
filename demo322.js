/*
 * @Author: artemis
 * @Date: 2021-11-23 15:24:28
 * @LastEditTime: 2021-11-23 15:36:13
 * @LastEditors: artemis
 * @Description: 机器人的运动范围
 */
var movingCount = function (m, n, k) {
  let res = 0;
  let arr = Array(m).fill(0).map(x => Array(n).fill(0));
  let queue = [
    [0, 0]
  ];

  while (queue.length !== 0) {
    let [i, j] = queue.shift();
    if (i >= m || j >= n) {
      continue;
    }
    if (arr[i][j] === 0 && get(i, j) <= k) {
      res++;
      queue.push([i + 1, j]);
      queue.push([i, j + 1]);
    }
    arr[i][j] = 1;
  }
  return res;
};

function get(m, n) {
  let res = 0;
  while (m !== 0) {
    res += m % 10;
    m = parseInt(m / 10);
  }
  while (n !== 0) {
    res += n % 10;
    n = parseInt(n / 10);
  }
  return res;
}
