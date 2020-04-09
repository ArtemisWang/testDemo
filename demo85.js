let str="hello"
let set=new Set(str)
console.log(set)
let str1=[...set].join('')
console.log(`new string:${str1}`)