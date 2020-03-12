Promise.myAll=(arr)=>{
    return new Promise((resolve,reject)=>{
        if(!(arr instanceof Array)){
            throw new Error('输入格式不符，应该为数组类型')
        }
        let n=arr.length
        let res=[]
        let err=[]
        for(let i=0;i<n;i++){
            Promise.resolve(arr[i]).then(item=>{
                res.push(item)
            }).catch(e=>{
                err.push(e)
            })
        }
        resolve(res)
        reject(err)
    })
}


var p1 = Promise.resolve('a');
var p2 = Promise.resolve('b');
var p3 = Promise.resolve('c');
Promise.myAll([1,2,3]).then(val=>{console.log(val)})
console.log(Promise)