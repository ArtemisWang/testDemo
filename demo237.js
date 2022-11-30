/*
 * @Author: artemis
 * @Date: 2021-10-20 13:33:42
 * @LastEditTime: 2021-10-20 13:36:47
 * @LastEditors: artemis
 * @Description: 判断是否符合指定格式
 */
function matchesPattern(str) {
  return /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(str);
}