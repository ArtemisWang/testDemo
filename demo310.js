/*
 * @Author: yating.wang
 * @Date: 2021-11-19 12:43:14
 * @LastEditTime: 2021-11-19 14:59:41
 * @LastEditors: yating.wang
 * @Description: 基数排序
 */
function radixSort(arr, maxLength) {
  // 排序结果数组，用于存储每一次按位排序的临时结果
  const sortedArray = new Array(arr.length)
  // 从个位开始比较，一直比较到最高位
  for (let k = maxLength - 1; k >= 0; k--){
    // 计数排序的过程，分成3步
    // 1.创建辅助排序的统计数组，并把待排序的字符对号入座，
    // 这里为了代码整洁，直接使用ASCII码范围作为数组长度
    const count = new Array(128).fill(0)
    for (let i = 0; i < arr.length; i++){
      let index = arr[i].length <= k ? 0 : arr[i].charCodeAt(k)
      count[index]++
    }
    // 2.统计数组做变形，后面的元素等于前面的元素之和
    for (let i = 1; i < count.length; i++){
      count[i] += count[i-1]
    }
    // 3.倒序遍历原始数列，从统计数组找到正确位置，输出到结果数组
    for (let i = arr.length - 1; i >= 0; i--){
      let index = arr[i].length <= k ? 0 : arr[i].charCodeAt(k)
      count[index]--
      sortedArray[count[index]]=arr[i]
    }
    // 下一轮排序需要以上一轮的排序结果为基础，因此把结果复制给arr
    arr = sortedArray.slice()
  }
  return arr
}

const arr = ['qd', 'abc', 'qwe', 'hhh', 'a', 'cws', 'ope']
console.log(radixSort(arr, 3))

