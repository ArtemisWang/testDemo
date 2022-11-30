/*
 * @Author: artemis
 * @Date: 2021-10-25 13:51:48
 * @LastEditTime: 2021-10-25 15:00:39
 * @LastEditors: artemis
 * @Description: 选择组件
 */
function CheckGroup(renderTo, options, isMultiple) {
  var that = this;
  that.renderTo = renderTo;
  that.options = options;
  that.isMultiple = !!isMultiple;
  that.initHtml();
  that.initEvent();
}
CheckGroup.prototype.initHtml = fInitHtml;
CheckGroup.prototype.initEvent = fInitEvent;
CheckGroup.prototype.toggleEl = fToggleEl;
CheckGroup.prototype.isSelected = fIsSelected;
CheckGroup.prototype.val = fVal;

function fInitHtml() {
  var that = this;
  // 请补全代码，拼接html字符串
  var sHtml = `<div class="checkgroup${(!that.isMultiple) ? ' radius' : ''}">` + that.options.map(option => {
    return `<div data-val="${option.value}" class="item">${option.text}</div>`;
  }).join('') + '</div>';
  that.renderTo.innerHTML = sHtml;
  // 请补全代码，获取checkgroup的dom元素引用
  that.el = document.getElementsByClassName('checkgroup')[0];
}

function fInitEvent() {
  var that = this;
  that.el && that.el.addEventListener('click', function (event) {
    var item = event.target;
    item.classList.contains('item') && that.toggleEl(item);
  });
}

function fToggleEl(item) {
  // 根据当前是单选还是多选，以及当前元素是否选中，高亮/取消���亮指定的选项dom元素
  var that = this;
  if (that.isSelected(item)) {
    // 请补全代码
    item.className = 'item';
  } else if (that.isMultiple) {
    // 请补全代码
    item.className = 'item selected';
  } else {
    // 请补全代码
    Array.from(that.el.children).forEach(i => {
      if (i.attributes['data-val'].value === that.val()[0]) {
        i.className = 'item';
      }
    });
    item.className = 'item selected';
  }
}

function fIsSelected(item) {
  // 请补全代码，判断item是否选中
  return this.val().indexOf(item.attributes['data-val'].value) >= 0;
}

function fVal(values) {
  var that = this;
  if (arguments.length === 0) {
    // 请补全代码，获取高亮的选项元素
    var items = [];
    // 请补全代码，获取高亮的选项元素的data-val
    var result = [];
    Array.from(that.el.children).forEach(item => {
      if (item.className === 'item selected') {
        items.push(item);
        result.push(item.attributes['data-val'].value);
      }
    });
    return result;
  };
  !that.isMultiple && values.length > 1 && (values.length = 1);
  // 请补全代码，获取所有的选项元素
  var items = Array.from(that.el.children);
  // 请补全代码，在指定元素上加上高亮的class
  items.forEach(item => {
    if (values.indexOf(item.attributes['data-val'].value) >= 0) {
      that.toggleEl(item);
    }
  });
}

function f() {
  var dv = document.getElementById('jsCheckGroup');
  dv.innerHTML = '';
  var item = new CheckGroup(dv, [{
    text: 'a',
    value: '1'
  }, {
    text: 'b',
    value: '2'
  }]);
  var el = dv.getElementsByClassName('checkgroup')[0];
  item.val(['1']);
  item.val(['2']);
  item.val(['1']);
  var result = !!(el.getElementsByClassName('selected').length === 1);
  return result;
}
console.log(f());