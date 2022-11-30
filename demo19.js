/*
 * @Author: artemis
 * @Date: 2020-07-30 13:33:48
 * @LastEditTime: 2021-09-06 13:42:14
 * @LastEditors: artemis
 * @Description: 
 */
console.log('script start');
async function async1() {
  await async2();
  console.log('async1 end');
}
async function async2() {
  await async3();
  console.log('async2 end');
}
async function async3() {
  console.log('async3 end');
}
async1();
setTimeout(function () {
  console.log('setTimeout');
}, 0);
new Promise(resolve => {
  console.log('Promise');
  resolve();
}).then(function () {
  console.log('promise1');
}).then(function () {
  console.log('promise2');
});
console.log('script end');

// script start
// async3 end
// Promise
// script end
// async2 end
// promise1
// async1 end
// promise2
// setTimeout