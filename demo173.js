/*
 * @Author: artemis
 * @Date: 2021-07-20 15:21:54
 * @LastEditTime: 2021-07-22 08:36:58
 * @LastEditors: artemis
 * @Description: 立即执行防抖
 */
/**
 * @description: 
 * @param {*} fn  事件触发函数
 * @param {*} wait  等候时间
 * @param {*} immediate  是否立即执行
 * @return {*}
 */
function debounce(fn, wait = 500, immediate = true) {
  let timer = 0;
  return function (...args) {
    if (immediate) {
      fn.apply(this, args);
      immediate = false;
    }
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      if (!immediate) {
        fn.apply(this, args);
        immediate = true;
      }
    }, wait);
  };
}

function fn() {
  console.log('1');
}

// window.addEventListener('mouseover', debounce(fn))