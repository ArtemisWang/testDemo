/*
 * @Author: yating.wang
 * @Date: 2021-10-19 13:30:21
 * @LastEditTime: 2021-10-19 13:34:27
 * @LastEditors: yating.wang
 * @Description: 使用arguments
 */
function useArguments() {
  let res = 0;
  Array.prototype.forEach.call(arguments, ((item) => {
    res += item
  }))
  return res
}

console.log(useArguments(1, 2, 3, 4))