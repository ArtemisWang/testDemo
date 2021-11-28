/*
 * @Author: yating.wang
 * @Date: 2021-11-18 10:54:43
 * @LastEditTime: 2021-11-18 13:03:37
 * @LastEditors: yating.wang
 * @Description: 桶排序
 */
function bucketSort(arr) {
  // 1. 得到数列的最大值和最小值，并算出差值d
  const max = Math.max.apply(Math, arr)
  const min = Math.min.apply(Math, arr)
  const d = max - min
  // 2. 初始化桶
  const bucketNum = arr.length
  const bucketList = new Array(bucketNum).fill(0).map(x=>[])
  // 3. 遍历原始数组，将每个元素放入桶中
  for (let i = 0; i < arr.length; i++){
    bucketList[parseInt((arr[i] - min) * (bucketNum - 1) / d)].push(arr[i])
  }
  // 4. 对每个桶内部进行排序
  for (let i = 0; i < bucketList.length; i++){
    bucketList[i].sort((a,b)=>a-b)
  }
  // 5. 输出全部元素
  let index=0
  for (const list of bucketList) {
    for (let value of list) {
      arr[index++]=value
    }
  }
}
const arr = [4.5, 0.84, 3.25, 2.18, 0.5]
bucketSort(arr)
console.log(arr)