/*
 * @Author: yating.wang
 * @Date: 2023-01-09 10:00:56
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-01-09 13:50:16
 * @Description: 
 */
var restoreIpAdresses = function (s) {
  const res = [];
  const isIp = (ip) => {
    return ip.length === (Number(ip) + '').length && Number(ip) < 256 && Number(ip) >= 0;
  };
  const countIp = (cur, tmp, other) => {
    if (tmp.length >= 4) return;
    if (cur) {
      if (isIp(cur)) {
        tmp.push(cur);
        if (!other.length) {
          tmp.length === 4 && res.push(tmp.join('.'));
          return;
        }
      } else {
        return;
      }
    }
    for (let i = 1; i <= 3; i++) {
      countIp(other.slice(0, i), tmp.slice(), other.slice(i));
    }
  };
  countIp('', [], s);
  return [...new Set(res)];
};

console.log(restoreIpAdresses('1010223'));