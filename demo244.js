/*
 * @Author: yating.wang
 * @Date: 2021-10-21 16:05:32
 * @LastEditTime: 2021-10-22 10:30:13
 * @LastEditors: yating.wang
 * @Description: 智能提示
 */
function suggest(items) {
  let inputValue = document.getElementsByClassName('js-input')[0].value
  let suggestDiv = document.getElementsByClassName('js-suggest')[0]
  let ul = suggestDiv.children[0]
  if (inputValue.trim() === '') {
    suggestDiv.className = 'js-suggest hide'
    ul.innerHTML = ''
    return
  }
  const reg = new RegExp(inputValue.trim().split('').map(item => {
    return ((/[\(\,\*\.\?\^\\\|\"\'\:\<\>\/\$\&\)\{\}\[\]\!\@\`\~]/).test(item) ? `\\${item}` : item)
  }).join('.*'))
  const filterItems = items.filter(item => reg.test(item))
  if (!filterItems.length) {
    suggestDiv.className = 'js-suggest hide'
    ul.innerHTML = ''
  } else {
    suggestDiv.className = 'js-suggest'
    ul.innerHTML = `<li>${filterItems.join('</li><li>')}</li>`
  }
}
suggest(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '10', '110'])