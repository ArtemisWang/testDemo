Object.prototype.isPrototypeOf1 = function (obj) {
  obj = obj.__proto__
  while (obj) {
    if (obj === this) return true
    obj = obj.__proto__
  }
  return false
}

console.log(Array.isPrototypeOf1([]))
console.log(Array.prototype.isPrototypeOf1([]))
console.log(Object.isPrototypeOf1({}))
console.log(Object.prototype.isPrototypeOf1({}))