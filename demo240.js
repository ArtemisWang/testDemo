/*
 * @Author: artemis
 * @Date: 2021-10-21 08:43:59
 * @LastEditTime: 2021-10-21 10:25:02
 * @LastEditors: artemis
 * @Description: 表格排序
 */
function sort(type, order) {
  const tbody = document.querySelector('#jsList');
  let idx = 0;
  if (type === 'price') {
    idx = 1;
  } else if (type === 'sales') {
    idx = 2;
  }
  const asc = function (a, b) {
    return a.children[idx].innerHTML - b.children[idx].innerHTML;
  };
  const desc = function (a, b) {
    return b.children[idx].innerHTML - a.children[idx].innerHTML;
  };
  const arrTbody = Array.from(tbody.children);
  sortFun = order === 'asc' ? asc : desc;
  arrTbody.sort(sortFun);
  arrTbody.forEach((itm) => {
    tbody.appendChild(itm);
  });
}

sort('price', 'asc');