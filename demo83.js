let yellow = Symbol("Yellow");
let yellow1 = Symbol.for("Yellow");
console.log(yellow === yellow1);      // false
 
let yellow2 = Symbol.for("Yellow");
console.log(yellow1 === yellow2);     // true

console.log(Symbol.keyFor(yellow2))