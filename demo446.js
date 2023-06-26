/*
 * @Author: yating.wang
 * @Date: 2023-02-03 14:38:27
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-03 14:45:55
 * @Description: 
 */
var reverseWords = function (s) {
  let res = [], tmp = '';
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      tmp && res.push(tmp);
      tmp = '';
    } else {
      tmp = s[i] + tmp;
    }
  }
  tmp && res.push(tmp);
  return res.join(' ');
};

console.log(reverseWords('    the sky is blue '));