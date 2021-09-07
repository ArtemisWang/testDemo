function instanceof1(left, right) {
  // instanceof是保留字
  let prototype = right.prototype
  left = left.__proto__
  while (left) {
    if (left === prototype) return true
    left = left.__proto__
  }
  return false
}

console.log(instanceof1(Array, Object))