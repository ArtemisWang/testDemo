/*
 * @Author: artemis
 * @Date: 2021-10-21 12:50:14
 * @LastEditTime: 2021-10-21 14:03:55
 * @LastEditors: artemis
 * @Description: 倒计时
 */
function second(second) {
  return {
    day: Math.floor(second / 3600 / 24),
    hour: Math.floor(second / 3600 % 24),
    min: Math.floor(second / 60 % 60),
    second: second % 60
  };
}

function render(data) {
  const d = document.getElementById('jsCountdown');
  d.innerHTML = `
      <span class=${data.day === 0 ? 'hide' : ''}>${('0' + data.day).slice(-2)}天</span>
      <span>${('0' + data.hour).slice(-2)}:</span>
      <span>${('0' + data.min).slice(-2)}:</span>
      <span>${('0' + data.second).slice(-2)}</span>
  `;
}
render(second(3601));