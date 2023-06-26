/*
 * @Author: yating.wang
 * @Date: 2023-01-11 15:59:30
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-01-12 14:49:32
 * @Description: 
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  const m = num1.length, n = num2.length;
  const ansArr = new Array(m + n).fill(0);
  for (let i = m - 1; i >= 0; i--) {
    let x = num1[i] - 0;
    for (let j = n - 1; j >= 0; j--) {
      let y = num2[j] - 0;
      ansArr[i + j + 1] += x * y;
    }
  }
  for (let i = m + n - 1; i > 0; i--) {
    ansArr[i - 1] += Math.floor(ansArr[i] / 10);
    ansArr[i] = ansArr[i] % 10;
  }
  while (ansArr.length && ansArr[0] === 0) {
    ansArr.shift();
  }
  return !ansArr.length ? '0' : ansArr.join('');
};


console.log(multiply('140', '721'));