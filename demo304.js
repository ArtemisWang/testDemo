/*
 * @Author: artemis
 * @Date: 2021-11-18 09:19:41
 * @LastEditTime: 2021-11-18 10:07:24
 * @LastEditors: artemis
 * @Description: 计数排序
 */
function countSort(arr) {
  // 1. 得到数列的最大值
  const max = Math.max.apply(Math, arr);
  // 2. 根据数列最大值确定统计数组的长度
  const countArray = new Array(max + 1).fill(0);
  // 3. 遍历数列，填充统计数组
  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i]]++;
  }
  // 4. 遍历统计数组，输出结果
  let index = 0;
  for (let i = 0; i < countArray.length; i++) {
    for (let j = 0; j < countArray[i]; j++) {
      arr[index++] = i;
    }
  }
}

function countSort1(arr) {
  // 1. 得到数列的最大值和最小值
  const max = Math.max.apply(Math, arr);
  const min = Math.min.apply(Math, arr);
  // 2. 根据数列最大值确定统计数组的长度
  const countArray = new Array(max - min + 1).fill(0);
  // 3. 遍历数列，填充统计数组
  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i] - min]++;
  }
  // 4. 遍历统计数组，输出结果
  let index = 0;
  for (let i = 0; i < countArray.length; i++) {
    for (let j = 0; j < countArray[i]; j++) {
      arr[index++] = i + min;
    }
  }
}

const arr = [9, 3, 5, 4, 9, 1, 2, 7, 8, 1, 3, 6, 5, 3, 4, 0, 10, 9, 7, 9];
countSort(arr);
const arr1 = [95, 95, 91, 94, 99, 98, 93];
countSort1(arr1);
console.log(arr1);