/*
 * @Author: yating.wang
 * @Date: 2021-10-18 10:19:28
 * @LastEditTime: 2021-10-18 10:23:26
 * @LastEditors: yating.wang
 * @Description: 计数
 */
function count(arr, item) {
  let res=0
  arr.forEach(i=>{
    if(i===item){
      res++
    }
  })
  return res
}