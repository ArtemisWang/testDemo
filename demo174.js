/*
 * @Author: yating.wang
 * @Date: 2021-07-22 09:32:12
 * @LastEditTime: 2021-07-22 16:19:12
 * @LastEditors: yating.wang
 * @Description: 节流
 */

/**
 * @description: 
 * @param {*} fn
 * @param {*} wait
 * @return {*}
 */
function throttle(fn, wait = 1000) {
  let timer
  return function (...args) {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, wait)
  }
}

// window.addEventListener('mouseover', throttle(() => {
//   console.log(new Date())
// }))