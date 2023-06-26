var calculate = function (s) {
  let stack = s.match(/(\d+)|(\*|\/|\+|\-)/g);
  let tmp = [];
  for (let i = 0; i < stack.length; i++) {
    if (/(\d+)|\+|\-/.test(stack[i])) {
      tmp.push(stack[i]);
    } else if (stack[i] === '*') {
      i++;
      let last = tmp.pop();
      last = last * stack[i];
      tmp.push(last);
    } else if (stack[i] === '/') {
      i++;
      let last = tmp.pop();
      last = Math.floor(last / stack[i]);
      tmp.push(last);
    }
  }
  let res = Number(tmp[0]);
  for (let i = 1; i < tmp.length; i++) {
    if (tmp[i] === '+') {
      i++;
      res += Number(tmp[i]);
    } else if (tmp[i] === '-') {
      i++;
      res -= Number(tmp[i]);
    }
  }
  return res;
};

console.log(calculate(' 14/3-2+4+6 '));