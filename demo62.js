// 手动实现Promise.myAll

Promise.myAll=(arr)=>{
    if(!(arr instanceof Array)){
        throw new Error('输入的值类型错误，应为数组类型')
    }
    return new Promise((resolve,reject)=>{
        let n=arr.length
        let res=Array(n)
        let errMemo
        for(let i=0;i<n;i++){
            arr[i].then((suc)=>{
                res[i]=suc
                if(i===n-1) resolve(res)
            },(err)=>{
                errMemo=err
                reject(errMemo)
            })
        }
    })
}


const p1=Promise.resolve(1)
const p2=Promise.resolve(2)
const p3=Promise.resolve(3)

function show(x){
    console.log(x)
}

Promise.myAll([p1,p2,p3]).then(show).catch(show)