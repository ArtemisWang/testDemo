/*
 * @Author: yating.wang
 * @Date: 2023-02-02 16:20:27
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-02 16:28:29
 * @Description: 
 */
var thousandSeparator = function (n) {
  n = n + '';
  let i = n.length;
  while (i > 3) {
    i -= 3;
    n = n.slice(0, i) + '.' + n.slice(i);
  }
  return n;
};

console.log(thousandSeparator(1234567));