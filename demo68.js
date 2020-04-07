Array.prototype.myReduce=function(fn,initialValue){
    let arr=this
    if(!(arr instanceof Array)){
        throw new Error('TypeError：Not Array')
    }
    for(let i=0;i<arr.length;i++){
        initialValue=fn(initialValue, arr[i],i,arr)
    }
    return initialValue
}


let arr=[1,2,3,4,5]
console.log(arr.myReduce((prev,val)=>{return prev+val},10))