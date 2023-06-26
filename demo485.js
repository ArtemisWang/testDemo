/*
 * @Author: yating.wang
 * @Date: 2023-02-21 12:35:48
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-21 13:04:27
 * @Description: 
 */
var compress = function (chars) {
  let p = 0;
  let cur = '';
  let count = 0;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === cur) {
      count++;
    } else {
      if (count > 1) {
        let countStr = count + '';
        for (let j = 0; j < countStr.length; j++) {
          chars[p++] = countStr[j];
        }
      }
      cur = chars[i];
      chars[p++] = cur;
      count = 1;
    }
  }
  if (count > 1) {
    let countStr = count + '';
    for (let j = 0; j < countStr.length; j++) {
      chars[p++] = countStr[j];
    }
  }
  return p;
};
console.log(compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']));