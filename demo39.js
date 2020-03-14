function jundgeNumber(arr){
    return new Promise((resolve,reject)=>{
        let i=arr.length-1
        while(i>=0){
            if(typeof arr[i]!=="number"){
                reject(`索引${i}处不是数字类型`)
                break
            }
            i--
        }
        if(i<0) resolve(arr)
    })
}

jundgeNumber([1,'2',3]).then((res)=>{console.log(res)}).catch(e=>console.log(e))