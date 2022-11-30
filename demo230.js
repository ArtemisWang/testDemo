/*
 * @Author: artemis
 * @Date: 2021-10-20 09:47:03
 * @LastEditTime: 2021-10-20 09:54:46
 * @LastEditors: artemis
 * @Description: 改变上下文
 */
function alterContext(fn, obj) {
  return fn.call(obj);
}