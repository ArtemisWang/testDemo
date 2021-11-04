/*
 * @Author: yating.wang
 * @Date: 2021-10-13 14:11:48
 * @LastEditTime: 2021-10-13 14:17:47
 * @LastEditors: yating.wang
 * @Description: 邮箱字符串判断
 */
function isAvailableEmail(sEmail) {
  let tmp = sEmail.split('@')
  if(tmp.length!==2){
      return false
  }
  if(tmp[1].split('.').length<2){
      return false
  }
  if(tmp[0].indexOf(' ')>=0){
      return false
  }
  return true
}