/*
 * @Author: yating.wang
 * @Date: 2023-10-27 17:24:19
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-10-27 17:24:39
 * @Description: 
 */
const fn = () => {
  const arr = document.getElementsByClassName("z-flex");
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    let time = arr[i].innerHTML.match(/推荐时长：[0-9]+分[0-9]+秒/);
    if (time) {
      time = time[0].split("：")[1].split("分");
      time[1] = time[1].replace("秒", "");
      res = Number(time[0]) * 60 + Number(time[1]);
    }
  }
  console.log("时间：", res);
  let timer = setTimeout(() => {
    document.getElementsByClassName("t-button")[7].click();
    setTimeout(() => {
      document.getElementsByClassName("xgplayer-start")[0].click();
      document.getElementsByTagName("video")[0].playbackRate = 2;
      fn();
    }, 1000);
  }, (res / 2 + 10) * 1000);
};
fn();
