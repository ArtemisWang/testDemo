function flat(arr){
    const isDeep=arr.some(item=>item instanceof Array)
    if(!isDeep) return arr
    let temp=Array.prototype.concat.apply([],arr)
    return flat(temp)
}


let arr= flat([1,2,3,[4,5,[6],[7]]])
console.log(arr)


