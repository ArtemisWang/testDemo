/*
 * @Author: yating.wang
 * @Date: 2021-10-18 10:48:49
 * @LastEditTime: 2021-10-18 11:22:11
 * @LastEditors: yating.wang
 * @Description: 查找元素位置
 */
function findAllOccurrences(arr, target) {
  let res=[]
  arr.forEach((item,index)=>{
    if(item===target){
      res.push(index)
    }
  })
  return res
}