/*
 * @Author: yating.wang
 * @Date: 2021-10-14 09:11:34
 * @LastEditTime: 2021-10-14 09:17:42
 * @LastEditors: yating.wang
 * @Description: 字符串字符统计
 */

function count(str) {
  let res={}
  for(let i=0;i<str.length;i++){
    if(str[i]!=' '){
      if(res[str[i]]){
        res[str[i]]++
      }else{
        res[str[i]]=1
      }
    }
  }
  return res
}

console.log(count('hello world'))