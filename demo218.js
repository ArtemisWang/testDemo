/*
 * @Author: yating.wang
 * @Date: 2021-10-19 13:28:44
 * @LastEditTime: 2021-10-19 13:28:44
 * @LastEditors: yating.wang
 * @Description: 二次封装函数
 */

function partial(fn, str1, str2) {
  return fn.bind(fn, str1, str2)
}