/*
 * @Author: artemis
 * @Date: 2021-11-15 10:27:02
 * @LastEditTime: 2021-11-15 10:36:25
 * @LastEditors: artemis
 * @Description: 构建乘积数组
 */
function multiplyArr(A) {
  if (!A) return null;
  const length = A.length;
  if (length == 1) return [1];
  const B = [1];
  for (let i = 1; i < length; i++) {
    B[i] = B[i - 1] * A[i - 1];
  }
  let tmp = 1;
  for (let i = length - 2; i >= 0; i--) {
    tmp *= A[i + 1];
    B[i] *= tmp;
  }
  return B;
}

console.log(multiplyArr([1, 2, 3, 4]));