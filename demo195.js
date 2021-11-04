/*
 * @Author: yating.wang
 * @Date: 2021-10-14 09:42:00
 * @LastEditTime: 2021-10-14 09:57:51
 * @LastEditors: yating.wang
 * @Description: 查找数组元素位置
 */
function indexOf(arr, item) {
  let left=0,right=arr.length-1
  while(left<=right&&right>-1&&left<arr.length){
    let mid=left+Math.floor((right-left)/2)
    if(arr[mid]===item) return mid
    if(arr[mid]<item){
      left=mid+1
    }else{
      right=mid-1
    }
  }
  return -1
}

console.log(indexOf([1,2,3,4], 4))