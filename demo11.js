function prom(val){
    return new Promise((resolve, reject)=>{
        if(typeof val==='string'){
            resolve(val)
        }
        else{
            reject('错误！！传递的不是字符串')
        }
    })
}

prom('abc').then((res)=>{
    console.log(res)
    return prom(1)
}).then(res=>{
    console.log('成功躲避')
    return prom(false)
}).catch((e)=>{
    console.log(e)
})