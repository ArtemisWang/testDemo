/*
 * @Author: yating.wang
 * @Date: 2023-02-08 09:52:34
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-08 12:50:49
 * @Description: 
 */
function number2Chinese(num) {
  const map = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  if (num < 10) return map[num];
  const dict = [1E+8, 1E+4, 1000, 100, 10, 1];
  const sep = ['亿', '万', '千', '百', '十', ''];
  const res = new Array(6).fill(0);
  for (let i = 0; i < 6; i++) {
    res[i] = Math.floor(num / dict[i]);
    num = num % dict[i];
  }
  let result = '';
  for (let i = 0; i < 6; i++) {
    const tmp = number2Chinese(res[i]);
    if (tmp === '零' && result[result.length - 1] !== '零') {
      result += '零';
    } else if (tmp !== '零') {
      result += (tmp + sep[i]);
    }
  }
  result = result.replace(/(^零*)|(零*$)/g, '');
  return result;
}

console.log(number2Chinese(1000000001));