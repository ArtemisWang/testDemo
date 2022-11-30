/*
 * @Author: artemis
 * @Date: 2021-10-22 15:11:11
 * @LastEditTime: 2021-10-22 15:47:20
 * @LastEditors: artemis
 * @Description: 移动控制
 */
function bind() {

  document.onkeydown = event => {
    if (!event) return;
    var code = event.keyCode || '';
    if (!{
      '37': 1,
      '38': 1,
      '39': 1,
      '40': 1
    }[code]) return;
    event.preventDefault && event.preventDefault();
    //TODO: 请实现按键控制
    var current = document.getElementsByClassName('current')[0];
    if (code === 37) {
      //左
      let rowList = Array.from(current.parentNode.children);
      if (rowList.length === 1) return;
      let next = rowList.indexOf(current);
      next = (next === 0 ? rowList.length - 1 : next - 1);
      rowList[next].className = 'current';
      current.className = '';
    }
    if (code === 39) {
      //右
      let rowList = Array.from(current.parentNode.children);
      if (rowList.length === 1) return;
      let next = rowList.indexOf(current);
      next = (next === rowList.length - 1 ? 0 : next + 1);
      rowList[next].className = 'current';
      current.className = '';
    }
    if (code === 38) {
      //上
      const nextRow = Array.from(current.parentNode.children).indexOf(current);
      const colList = Array.from(document.getElementById('jsContainer').children[0].children[0].children);
      if (colList.length === 1) return;
      let nextCol = colList.indexOf(current.parentNode);
      nextCol = (nextCol === 0 ? colList.length - 1 : nextCol - 1);
      colList[nextCol].children[nextRow].className = 'current';
      current.className = '';
    }
    if (code === 40) {
      //下
      const nextRow = Array.from(current.parentNode.children).indexOf(current);
      const colList = Array.from(document.getElementById('jsContainer').children[0].children[0].children);
      if (colList.length === 1) return;
      let nextCol = colList.indexOf(current.parentNode);
      nextCol = nextCol === colList.length - 1 ? 0 : nextCol + 1;
      colList[nextCol].children[nextRow].className = 'current';
      current.className = '';
    }
  };
}
bind();