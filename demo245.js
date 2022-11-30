/*
 * @Author: artemis
 * @Date: 2021-10-22 10:32:49
 * @LastEditTime: 2021-10-22 11:48:39
 * @LastEditors: artemis
 * @Description: 文字输出
 */

function output(str) {
  const blink = document.getElementById('jsBlink');
  const items = str.split('').map(item => {
    switch (item) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case ' ':
        return '&nbsp;';
    }
    return item;
  });
  var content = document.getElementsByClassName("content")[0];
  while (content.firstElementChild != blink) {
    content.removeChild(content.firstChild);
  }
  let i = 0;
  let timer = setInterval(() => {
    const insertStr = items[i] === '\n' ? '<br>' : `<span  class=\"word color${Math.floor(Math.random() * 24) + 1}\">${items[i]}</span>`;
    blink.insertAdjacentHTML('beforeBegin', insertStr);
    i++;
    if (i >= items.length) {
      clearInterval(timer);
    }
  }, 200);
}
output('你好 世界');