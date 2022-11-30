/*
 * @Author: artemis
 * @Date: 2021-10-19 09:03:43
 * @LastEditTime: 2021-10-19 09:10:52
 * @LastEditors: artemis
 * @Description: 返回函数
 */
function functionFunction(str) {
  return (str2) => {
    return str + ', ' + str2;
  };
}

console.log(functionFunction('Hello')('world'));