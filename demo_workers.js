/*
 * @Author: yating.wang
 * @Date: 2022-02-20 20:26:44
 * @LastEditTime: 2022-02-20 20:26:44
 * @LastEditors: yating.wang
 * @Description: 
 */
var i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()", 500);
}
timedCount();