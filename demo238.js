/*
 * @Author: yating.wang
 * @Date: 2021-10-20 13:48:14
 * @LastEditTime: 2021-10-20 14:18:36
 * @LastEditors: yating.wang
 * @Description: 判断是否符合USD的格式
 */
function isUSD(str) {
  return /^(\$[1-9][0-9]{0,2})(\,[0-9]{3})*(\.[0-9]{2})?$/.test(str)
}

console.log(isUSD('$200.03'))