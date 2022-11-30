/*
 * @Author: artemis
 * @Date: 2021-10-19 08:58:40
 * @LastEditTime: 2021-10-19 09:00:06
 * @LastEditors: artemis
 * @Description: 函数传参
 */
function argsAsArray(fn, arr) {
  return fn.apply(fn, arr);
}