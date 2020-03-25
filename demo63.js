// 手动实现Promise.race

Promise.myRace=(arr)=>{
    if(!(arr instanceof Array)){
        throw new Error('输入的值类型错误，应为数组类型')
    }

    return new Promise((resolve,reject)=>{
        const n=arr.length
        // const res=Array(n)
        for(let i=0;i<n;i++){
            arr[i].then((res)=>{
                resolve(res)
            },(rej)=>{
                reject(rej)
            })
        }
    })
}

const p1=Promise.reject(1)
const p2=Promise.resolve(2)
const p3=Promise.resolve(3)

function show(x){
    console.log(x)
}

Promise.myRace([p1,p2,p3]).then(show).catch(show)

