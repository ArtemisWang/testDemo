/*
 * @Author: artemis
 * @Date: 2022-04-07 16:14:38
 * @LastEditTime: 2022-04-08 16:35:36
 * @LastEditors: artemis
 * @Description: 
 */

function currying(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  } else {
    return (...args2) => {
      return currying(fn, ...args, ...args2);
    };
  }
}

// function getUrl(protocol, domain, path) {
//   return protocol + "://" + domain + "/" + path;
// }

// let conardliSite = currying(getUrl)('http', 'www.conardli.top');
// let page1 = conardliSite('page1.html');

// console.log(page1, getUrl.length)