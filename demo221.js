/*
 * @Author: artemis
 * @Date: 2021-10-19 13:43:50
 * @LastEditTime: 2021-10-19 13:45:11
 * @LastEditors: artemis
 * @Description: 二次封装函数
 */
function partialUsingArguments(fn) {
  return fn.bind(...arguments);
}