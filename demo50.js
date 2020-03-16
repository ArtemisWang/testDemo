Array.prototype.myFilter=function(fn,thisValue){
    let arr=thisValue||this
    let res=[]
    if(typeof fn!=="function"){
        throw new Error(fn+'is not a function')
    }
    if(!arr.length) return []
    for(let i=0;i<arr.length;i++){
        if(fn.call(arr,arr[i],i,arr)){
            res.push(arr[i])
        }
    }
    return res
}


const arr=[1,2,3,4,5,6]
let res=arr.myFilter((item)=>{
    if(item%2)return true
    return false
})
console.log(res)