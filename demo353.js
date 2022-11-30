/*
 * @Author: artemis
 * @Date: 2021-12-13 20:54:39
 * @LastEditTime: 2021-12-13 21:17:06
 * @LastEditors: artemis
 * @Description: 封装fetch
 */
/**
 * @description: 
 * @param {string} method 请求方法
 * @param {string} url 请求地址
 * @param {Object} params 请求参数
 * @param {function} done 回调函数
 * @param {Object} header 请求头
 * @return {*}
 */
function fetch(method, url, params, done, header = null) {
  // 创建xhr对象，兼容写法
  var xhr = window.XMLHttpRequest ?
    new XMLHttpRequest() :
    new ActiveXObject("Microsoft.XMLHTTP");

  // 将method转换成大写
  method = method.toUpperCase();
  // 参数拼接
  var pair = [];
  for (var k in params) {
    pair.push(k + "=" + params[k]);
  }
  var str = pair.join("&");
  // 判断请求方法
  if (method === "GET") {
    // 字符串拼接 或者 模板字符串
    url += "?" + str;
  }
  xhr.open(method, url);

  var data = null;
  if (method === "POST") {
    // 需要请求头
    data = str;
  }
  if (header) {
    for (let key in header) {
      xhr.setRequestHeader(key, header[key]);
    }
  }
  xhr.send(data);

  // 指定xhr状态变化事件处理函数
  // 执行回调函数
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      // 返回的应该是一个对象，这样客户端更好渲染
      done(JSON.parse(xhr.responseText));
    }
  };
}

