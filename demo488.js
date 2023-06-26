/*
 * @Author: yating.wang
 * @Date: 2023-02-22 12:58:58
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-22 13:07:23
 * @Description: 
 */
var titleToNumber = function (columnTitle) {
  const transform = (s) => {
    return s.charCodeAt() - 64;
  };
  let res = 0;
  while (columnTitle.length > 0) {
    res = res * 26 + transform(columnTitle[0]);
    columnTitle = columnTitle.slice(1);
  }
  return res;
};
console.log(titleToNumber('ZY'));