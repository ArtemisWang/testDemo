/*
 * @Author: artemis
 * @Date: 2021-10-19 08:12:22
 * @LastEditTime: 2021-10-19 08:46:23
 * @LastEditors: artemis
 * @Description: 计时器
 */
function count(start, end) {
  console.log(start++);
  let timer = null;
  function incrementNumber() {
    if (start > end) {
      clearInterval(timer);
    } else {
      console.log(start++);
    }
  }
  timer = setInterval(incrementNumber, 100);
  return {
    cancel: () => {
      clearInterval(timer);
    }
  };
}