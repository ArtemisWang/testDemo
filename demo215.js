/*
 * @Author: artemis
 * @Date: 2021-10-19 09:01:41
 * @LastEditTime: 2021-10-19 09:01:41
 * @LastEditors: artemis
 * @Description: 函数的上下文
 */
function speak(fn, obj) {
  return fn.call(obj);
}