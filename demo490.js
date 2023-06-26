/*
 * @Author: yating.wang
 * @Date: 2023-02-22 13:23:16
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-22 15:21:18
 * @Description: 
 */
var convertToTitle = function (columnNumber) {
  const transform = (number) => {
    return String.fromCharCode(number + 65);
  };
  let res = '';
  while (columnNumber) {
    columnNumber--;
    let tmp = columnNumber % 26;
    columnNumber = Math.floor(columnNumber / 26);
    res = transform(tmp) + res;
  }
  return res;
};

console.log(convertToTitle(1));