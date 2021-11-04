/*
 * @Author: yating.wang
 * @Date: 2021-10-21 14:32:54
 * @LastEditTime: 2021-10-21 15:44:48
 * @LastEditors: yating.wang
 * @Description: 双色球机选一注
 */
console.log(randomFn());

function randomFn() {
  const set = new Set()
  while (set.size < 6) {
    set.add(Math.floor(Math.random() * 33) + 1)
  }
  const red = [...set].sort((a, b) => a - b).map(item => {
    return item < 10 ? '0' + item : item
  })
  var redNodes = document.querySelectorAll('.red > .balls-wp')[0].children
  let redSet = new Set(new Array(33).fill(0).map((_, index) => index + 1))
  red.map((item, index) => {
    redNodes[index].innerHTML = item
    redNodes[index].className = 'active'
    redSet.delete(Number(item));
  });
  [...redSet].map((item, index) => {
    redNodes[index + 6].innerHTML = (item < 10 ? '0' + item : item)
  })

  let blue = Math.floor(Math.random() * 16) + 1
  blue = blue < 10 ? '0' + blue : blue
  var blueNodes = document.querySelectorAll('.blue > .balls-wp')[0].children
  blueNodes[0].innerHTML = blue
  blueNodes[0].className = 'active'
  let blueSet = new Set(new Array(16).fill(0).map((_, index) => index + 1))
  blueSet.delete(Number(blue));
  [...blueSet].map((item, index) => {
    blueNodes[1 + index].innerHTML = (item < 10 ? '0' + item : item)
  })
  return red.join(',') + '|' + blue
}