/*
 * @Author: artemis
 * @Date: 2021-12-17 13:47:06
 * @LastEditTime: 2021-12-17 13:47:06
 * @LastEditors: artemis
 * @Description: 
 */
module.exports = function (src) {
  src = src.toUpperCase();
  // 这里为什么要这么写？因为直接返回转换后的字符串会报语法错误，
  // 这么写import后转换成可以使用的字符串
  return `module.exports = '${src}'`;
};
