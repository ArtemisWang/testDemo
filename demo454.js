/*
 * @Author: yating.wang
 * @Date: 2023-02-07 11:00:50
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-07 11:07:28
 * @Description: 
 */
var simplifyPath = function (path) {
  const arr = path.split('/');
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '' || arr[i] === '.') {
      continue;
    } else if (arr[i] === '..') {
      res.pop();
    } else {
      res.push(arr[i]);
    }
  }
  return '/' + res.join('/');
};