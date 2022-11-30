/*
 * @Author: artemis
 * @Date: 2021-10-25 08:51:23
 * @LastEditTime: 2021-10-25 13:05:30
 * @LastEditors: artemis
 * @Description: dom节点转成json数据
 */
function dom2json() {
  const dom = document.getElementById('jsContainer');

  function solveChildren(item1) {
    if (!item1) return {};
    const res = {};
    if (item1.nodeValue && item1.nodeValue.trim()) {
      res.tag = 'text';
      res.content = item1.nodeValue.trim();
    } else {
      if (item1.tagName) {
        res.tag = item1.tagName.toLowerCase();
        res.attributes = {};
        res.children = [];
      }
      if (item1.attributes) {
        let attributes = {};
        for (let key of Array.from(item1.attributes)) {
          attributes[key.name] = key.value;
        }
        res.attributes = attributes;
      }
      if (item1.childNodes.length) {
        res.children = Array.from(item1.childNodes).map(item => solveChildren(item)).filter(item => item.tag != null);
      }
    }
    return res;
  }
  return solveChildren(dom);
}


function f() {
  var el = document.getElementById('jsContainer');
  (el || {}).innerHTML = '<em class="a1" data-class="a2"></em>';
  var data = dom2json();
  var result = isSame(data, {
    tag: 'div',
    attributes: {
      id: 'jsContainer'
    },
    children: [{
      tag: 'em',
      attributes: {
        class: 'a1',
        'data-class': 'a2'
      },
      children: []
    }]
  });
  console.log(result);
  return result;

  function isSame(o1, o2) {
    var type1 = ({}).toString.call(o1);
    var type2 = ({}).toString.call(o2);
    if (type1 !== type2) return;
    if (type1 === '[object Array]') return o1.join('T_T') === o2.join('T_T');
    if (type1 === '[object String]') return o1 === o2;
    var key1 = Object.keys(o1).sort((a, b) => a > b ? 1 : a === b ? 0 : -1);
    var key2 = Object.keys(o2).sort((a, b) => a > b ? 1 : a === b ? 0 : -1);
    if (key1.length !== key2.length) return false;
    return key1.every(key => isSame(o1[key], o2[key]));
  }
}
f();