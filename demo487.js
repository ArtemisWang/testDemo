/*
 * @Author: yating.wang
 * @Date: 2023-02-21 13:13:29
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-22 12:57:43
 * @Description: 
 */
var reverse = function (x) {
  x += '';
  let flag = false;
  if (x[0] === '-') {
    flag = true;
    x = x.slice(1);
  }
  const tmp = x.split('');
  for (let i = 0; i < tmp.length / 2; i++) {
    [tmp[i], tmp[tmp.length - 1 - i]] = [tmp[tmp.length - 1 - i], tmp[i]];
  }
  x = tmp.join('');
  if (flag && x > 2 ** 31 || !flag && x > 2 ** 31 - 1) {
    return 0;
  }
  return (flag ? '-' : '') + x;
};
console.log(reverse(-1123));