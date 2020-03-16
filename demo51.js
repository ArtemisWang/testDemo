let A=new Promise((resolve,reject)=>{
    resolve(1)
})

let B=new Promise((resolve,reject)=>{
    reject(2)
})




Promise.myAll=function(arr){
    if(!(arr instanceof Array)){
        throw new Error(`${arr} is not an array.`)
    }
    return new Promise((resolve,reject)=>{
        let n=arr.length
        if(n===0) resolve([])
        let res=Array(n)
        for(let i=0;i<n;i++){
            arr[i].then(re=>{
                res[i]=re
                if(i===n-1){
                    resolve(res)
                }
            },rej=>{
                reject(rej)
            })
        }
    })
}

let put=Promise.myAll([A,B])
put.then(x=>console.log(x)).catch(x=>{
    console.log(x)
    return Promise.reject(3)
}).then(x=>console.log(x)).catch(x=>console.log(x))
