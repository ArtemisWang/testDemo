/*
 * @Author: artemis
 * @Date: 2020-07-30 13:33:48
 * @LastEditTime: 2021-11-30 16:14:01
 * @LastEditors: artemis
 * @Description: 防抖函数
 */
function debounce(fn, delay = 500) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}

function debounce1(fn, delay = 500, flag) {
  // flag为true表示立即执行
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    } else if (flag) {
      fn.apply(this, arguments);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}

let input1 = document.getElementById('input1');
input1.addEventListener('keyup', debounce(() => {
  console.log(input1.value);
}, 1000));