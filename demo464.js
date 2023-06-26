var decodeString = function (s) {
  if (!s) return '';
  let res = '';
  let left = -1;
  let right = -1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[') {
      left = i;
    } else if (s[i] === ']') {
      right = i;
      break;
    }
  }
  if (left > 0) {
    let tmp = s.slice(left + 1, right);
    left--;
    let num = '';
    while (left >= 0 && s[left] <= '9' && s[left] >= '0') {
      num = s[left] + num;
      left--;
    }
    let times = Number(num);
    while (times) {
      res += tmp;
      times--;
    }
    res = (s.slice(0, left + 1) ?? '') + decodeString(res) + decodeString(s.slice(right + 1));
    return decodeString(res);
  } else {
    return s;
  }
};

console.log(decodeString('z100[leetcode]y'));