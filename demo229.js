/*
 * @Author: artemis
 * @Date: 2021-10-20 09:45:22
 * @LastEditTime: 2021-10-20 09:45:23
 * @LastEditors: artemis
 * @Description: 乘法
 */
function multiply(a, b) {
  var f1 = 1,
    f2 = 1;
  if (String(a).indexOf(".") != -1) {
    f1 = String(a).length - String(a).indexOf(".") + 1;
    f1 = Math.pow(10, f1);
    a = a * f1;
  }
  if (String(b).indexOf(".") != -1) {
    f2 = String(b).length - (String(b).indexOf(".") + 1);
    f2 = Math.pow(10, f2);
    b = b * f2;
  }
  return a * b / f1 / f2;
}