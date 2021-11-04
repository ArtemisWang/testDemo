/*
 * @Author: yating.wang
 * @Date: 2021-10-14 10:00:13
 * @LastEditTime: 2021-10-14 13:10:58
 * @LastEditors: yating.wang
 * @Description: 数组求和
 */

function sum(arr) {
  return arr.reduce((previousValue, currentValue)=>{
      return previousValue+currentValue
  },0)
}