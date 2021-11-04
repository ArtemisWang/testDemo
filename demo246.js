/*
 * @Author: yating.wang
 * @Date: 2021-10-22 14:10:31
 * @LastEditTime: 2021-10-22 15:06:51
 * @LastEditors: yating.wang
 * @Description: 分页
 */
function Pagination(container, total, current) {
  this.total = total;
  this.current = current;
  this.html = html;
  this.val = val;
  this.el = document.createElement('ul'); //TODO: 创建分页组件根节点
  if (!this.el) return;

  this.el.innerHTML = this.html();
  container.appendChild(this.el);
  this.el.className = this.html() ? 'pagination' : 'pagination hide'; //TODO: 判断是否需要隐藏当前元素

  function html() {
    if (this.total <= 1) return '';
    if (this.total <= 5) {
      return new Array(this.total).fill(0).map((_, i) => {
        return i + 1 === this.current ? `<li class="current">${i+1}</li>` : `<li>${i+1}</li>`
      }).join('')
    }
    if (this.current <= 3) {
      return new Array(5).fill(0).map((_, i) => {
        return i + 1 === this.current ? `<li class="current">${i+1}</li>` : `<li>${i+1}</li>`
      }).join('') + '<li>末页</li>'
    }
    if (this.current >= this.total - 2) {
      return '<li>首页</li>' + new Array(5).fill(0).map((_, i) => {
        return i + this.total - 4 === this.current ? `<li class="current">${i+this.total-4}</li>` : `<li>${i+this.total-4}</li>`
      }).join('')
    }
    return '<li>首页</li>' + new Array(5).fill(0).map((_, i) => {
      return i === 2 ? `<li class="current">${this.current}</li>` : `<li>${this.current-2+i}</li>`
    }).join('') + '<li>末页</li>'
    //TODO: 生成组件的内部html字符串
  }

  function val(current) {
    if (arguments.length === 0) return this.current;
    if (current < 1 || current > this.total || current === this.current) return;
    this.current = current;
    this.el.innerHTML = this.html();
  };
}

let elementA = document.getElementById('jsContainer')
new Pagination(elementA, 7, 5)