/*
 * @Author: artemis
 * @Date: 2021-11-23 12:59:09
 * @LastEditTime: 2021-11-23 14:24:49
 * @LastEditors: artemis
 * @Description: 字符串的排列
 */
var permutation = function (s) {
  const res = new Set();
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    stack.push([s[i], s.slice(0, i) + s.slice(i + 1)]);
  }
  while (stack.length) {
    let [tmp, other] = stack.pop();
    if (!other) {
      res.add(tmp);
      continue;
    }
    for (let i = 0; i < other.length; i++) {
      stack.push([tmp + other[i], other.slice(0, i) + other.slice(i + 1)]);
    }
  }
  return [...res];
};
var permutation1 = function (s) {
  const result = [];
  if (s) {
    queue = s.split('');
    permute(queue, result, '', '');
  }
  function permute(queue, result, tmp, current) {
    current += tmp;
    if (queue.length === 0) {
      result.push(current);
      return;
    }
    for (let i = 0; i < queue.length; i++) {
      tmp = queue.shift();
      permute(queue, result, tmp, current);
      queue.push(tmp);
    }
  }
  return [...new Set(result)];
};



console.log(permutation('abc'));