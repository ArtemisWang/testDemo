/*
 * @Author: yating.wang
 * @Date: 2021-12-05 12:09:35
 * @LastEditTime: 2021-12-05 12:09:35
 * @LastEditors: yating.wang
 * @Description: 
 */
/*
 * @Author: yating.wang
 * @Date: 2021-12-01 14:18:06
 * @LastEditTime: 2021-12-01 14:27:43
 * @LastEditors: yating.wang
 * @Description: 柯里化
 */
function currying(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  } else {
    return (...args2) => currying(fn, ...args, ...args2);
  }
}

function getUrl(protocol, domain, path) {
  return protocol + "://" + domain + "/" + path;
}

let conardliSite = currying(getUrl)('http', 'www.conardli.top');
let page1 = conardliSite('page1.html');

console.log(page1, getUrl.length)