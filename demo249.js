/*
 * @Author: yating.wang
 * @Date: 2021-10-25 13:08:34
 * @LastEditTime: 2021-10-25 13:47:19
 * @LastEditors: yating.wang
 * @Description: 设置标签
 */
var tagInput = {
  isInited: false,
  init: init,
  bindEvent: bindEvent,
  addTag: addTag,
  removeTag: removeTag
};

function init() {
  var that = this;
  if (that.isInited) return;
  that.isInited = true;
  // 请修改这一行代码，保存class为js-input的输入框的dom元素引用
  that.input = document.getElementsByClassName("js-input")[0];
  that.bindEvent();
}

function bindEvent() {
  var that = this;
  var input = that.input;
  if (!input) return;
  input.addEventListener('keydown', function (event) {
    // 请修改这一行代码，判断用户是否按了回车键
    var isEnter = event.keyCode === 13;
    // 请修改这一行代码，判断用户是否按了删除键
    var isDelete = event.keyCode === 8;

    (isEnter || isDelete) && event.preventDefault();
    isEnter && that.addTag();
    isDelete && that.removeTag();
  });
  input.parentNode.addEventListener('click', function () {
    input.focus();
  });
}

function addTag() {
  if (!this.input || !this.input.value || !(this.input.value.trim())) return
  const children = this.input.parentNode.children
  let noSame = true
  Array.from(children).forEach(item => {
    noSame = noSame && item.innerHTML !== this.input.value.trim()
  })
  noSame && this.input.insertAdjacentHTML('beforeBegin', `<span class="tag">${this.input.value.trim()}</span>`)
  this.input.value = ''
}

function removeTag() {
  if (this.input.value === '') {
    const children = this.input.parentNode.children
    children.length > 1 && children[children.length - 2].remove()
  }
}
tagInput.init();