/*
 * @Author: yating.wang
 * @Date: 2021-10-18 10:13:14
 * @LastEditTime: 2021-10-18 10:15:39
 * @LastEditors: yating.wang
 * @Description: 添加元素
 */
function insert(arr, item, index) {
  let res=[]
  for(let i=0;i<arr.length;i++){
    if(i===index){
      res.push(item)
    }
    res.push(arr[i])
  }
  if(index>=arr.length){
    res[index]=item
  }
  return res
}