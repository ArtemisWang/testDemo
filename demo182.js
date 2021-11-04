/*
 * @Author: yating.wang
 * @Date: 2021-10-12 16:26:17
 * @LastEditTime: 2021-10-12 16:26:39
 * @LastEditors: yating.wang
 * @Description: DOM节点查找
 */
function commonParentNode(oNode1, oNode2) {
  for(;oNode1;oNode1=oNode1.parentNode){
      if(oNode1.contains(oNode2)){
          return oNode1
      }
  }
}