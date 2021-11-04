/*
 * @Author: yating.wang
 * @Date: 2021-10-20 14:50:22
 * @LastEditTime: 2021-10-20 14:50:22
 * @LastEditors: yating.wang
 * @Description: 购物车
 */
function add(items) {
  if (!items) return;
  const tbody = document.querySelector("#jsTrolley>tbody")
  let sum_price = 0
  // 添加行
  items.forEach(({
    name,
    price
  }) => {
    var str =
      `<tr><td>${name}</td><td>${price.toFixed(2)}</td><td><a href="javascript:void(0);">删除</a></td></tr>`
    tbody.insertAdjacentHTML('beforeEnd', str)
    sum_price += Number(price)
  })
  // 更新总计
  upTfoot(sum_price, items.length)
}

function bind() {
  const tbody = document.querySelector("#jsTrolley>tbody")
  tbody.addEventListener('click', function (e) {
    if (e.target.nodeName === 'A') {
      var tr = e.target.parentNode.parentNode
      var price = removeTr(tr)
      upTfoot(-price, -1)
    }
  })
}

function upTfoot(price, number) {
  const tfoot_td = document.querySelector("#jsTrolley>tfoot td")
  let [sum, num] = tfoot_td.innerText.match(/[\d\.]+/g)
  tfoot_td.innerText = `${(Number(sum) + price ).toFixed(2)}(${Number(num) + number}件商品)`
}

function removeTr(tr) {
  var price = tr.querySelectorAll("td")[1].innerText
  tr.remove()
  return Number(price)
}