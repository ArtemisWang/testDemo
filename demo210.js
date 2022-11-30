/*
 * @Author: artemis
 * @Date: 2021-10-18 11:33:18
 * @LastEditTime: 2021-10-18 16:23:44
 * @LastEditors: artemis
 * @Description: 正确的使用parseInt
 */
function parse2Int(num) {
  let res = '';
  for (let i = 0; i < num.length; i++) {
    if (num[i] <= 9 && num[i] >= 0) {
      res += num[i];
    } else {
      break;
    }
  }
  return parseInt(res);
}
console.log(parse2Int('12'));