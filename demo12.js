let a = 0
let b = async () => {
  setTimeout(()=>console.log(a),0)
  a = a +  await 10
  console.log('2', a) // -> '2' 10
}
b()
a++
console.log('1', a) // -> '1' 1