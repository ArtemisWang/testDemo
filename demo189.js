/*
 * @Author: yating.wang
 * @Date: 2021-10-13 14:19:42
 * @LastEditTime: 2021-10-13 14:35:43
 * @LastEditors: yating.wang
 * @Description: 颜色字符串转换
 */
function rgb2hex(sRGB) {
    try{
      var tmp=sRGB.split('(')[1].split(')')[0].split(',')
    }catch(e){
      return sRGB
    }
    let res='#'
    for(let i=0;i<tmp.length;i++){
      let tmpNow = Number(tmp[i]).toString(16)
      res+=tmpNow.length<2?'0'+tmpNow:tmpNow
    }
    return res
}

console.log(rgb2hex('rgb(255,255,100)'))