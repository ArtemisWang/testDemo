/*
 * @Author: artemis
 * @Date: 2021-10-13 14:42:02
 * @LastEditTime: 2021-10-13 14:50:24
 * @LastEditors: artemis
 * @Description: 将字符串转换为驼峰格式
 */
function cssStyle2DomStyle(sName) {
  let nameArr = sName.split('-');
  let i = nameArr[0] ? 0 : 1;
  let res = nameArr[i];
  console.log(nameArr);
  for (i++; i < nameArr.length; i++) {
    res += nameArr[i].charAt(0).toUpperCase() + nameArr[i].slice(1);
  }
  return res;
}

console.log(cssStyle2DomStyle('-webkit-background-composite'));