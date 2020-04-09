const sy=Symbol("sy")
let syObject = {};
syObject[sy] = "kk";
console.log(syObject);
 
for (let i in syObject) {
  console.log(i);
}    // 无输出


console.log(Object.keys(syObject));                     // []
console.log(Object.getOwnPropertySymbols(syObject));    // [Symbol(key1)]
console.log(Reflect.ownKeys(syObject));                 // [Symbol(key1)]