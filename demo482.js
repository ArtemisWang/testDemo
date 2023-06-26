var permutation = function (s) {
  const res = new Set();
  const n = s.length;
  const f = function (tmp, other) {
    if (tmp.length === n) {
      res.add(tmp);
      return;
    }
    let cur = other[0];
    other = other.slice(1);
    for (let i = 0; i <= tmp.length; i++) {
      f(tmp.slice(0, i) + cur + tmp.slice(i), other);
    }
  };
  f('', s);
  return Array.from(res);
};

console.log(permutation('abc'));