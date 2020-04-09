let arr=[{i:1},{i:2},{i:3}]
let newArr=arr[0]

arr.forEach(item=>{
    item={i:0}  // 这行加不加是不一样的
    item.i+=1
})

console.log(newArr,arr)