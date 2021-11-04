/*
 * @Author: yating.wang
 * @Date: 2021-10-21 10:38:24
 * @LastEditTime: 2021-10-21 12:35:24
 * @LastEditors: yating.wang
 * @Description: 替换链接
 */
function link() {
  let dom = document.getElementById("jsContainer");

  dom.innerHTML = dom.innerText.replace(/(http(s)?:\/\/|www\.)[\w\.\?\=\&#%]+/g, $1 => {
    console.log($1);
    return `<a href="${/^www/.test($1) ? 'http://'+$1 : $1}" target="_blank">${$1}</a>`
  });
}

link()