/*
 * @Author: artemis 
 * @Date: 2021-07-Tu 01:17:11 
 * @Last Modified by:   artemis 
 * @Last Modified time: 2021-07-Tu 01:17:11 
 */
/**
 * @description: 
 * @param {*} n
 * @return {*}
 */
function fib(n) {
  let arr = [0, 1];
  for (let i = 2; i <= 10; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

console.log(fib(10));