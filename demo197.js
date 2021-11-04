/*
 * @Author: yating.wang
 * @Date: 2021-10-14 13:12:28
 * @LastEditTime: 2021-10-14 13:13:56
 * @LastEditors: yating.wang
 * @Description: 移除数组中的元素
 */
function remove(arr, item) {
  let res=[]
  for(let i=0;i<arr.length;i++){
    if(arr[i]!==item){
      res.push(arr[i])
    }
  }
  return res
}