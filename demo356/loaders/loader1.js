/*
 * @Author: yating.wang
 * @Date: 2021-12-17 13:46:47
 * @LastEditTime: 2021-12-17 13:46:47
 * @LastEditors: yating.wang
 * @Description: 
 */
module.exports = function(src) {
  src = src.split('').reverse().join('')
  return src;
}