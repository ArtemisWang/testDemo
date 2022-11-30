/*
 * @Author: artemis
 * @Date: 2021-10-12 14:24:24
 * @LastEditTime: 2021-10-12 14:24:25
 * @LastEditors: artemis
 * @Description: 牛客FED1-修改this指向
 */
function bindThis(f, oTarget) {
  let args = [].slice.call(arguments, 2);
  oTarget.fn = f;
  return function () {
    return oTarget.fn(...args, ...arguments);
  };
}