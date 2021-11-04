/*
 * @Author: yating.wang
 * @Date: 2021-10-13 13:06:23
 * @LastEditTime: 2021-10-13 13:54:27
 * @LastEditors: yating.wang
 * @Description: 获取字符串的长度
 */
function strLength(s, bUnicode255For1) {
    if(bUnicode255For1){
      return s.length
    }
    let res=0
    for(let i=0;i<s.length;i++){
      if(s.charCodeAt(i)>255){
        res++
      }
    }
    return s.length+res
}

console.log(strLength('hello world, 牛客', false))