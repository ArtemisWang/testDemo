function deepClone(a){
    if(typeof a!=='object'||a==null){
        return a
    }
    let b
    if(a instanceof Array){
        b=[]
    }else{
        b={}
    }
    for(let key in a){
        if(a.hasOwnProperty(key)){
            b[key]=deepClone(a[key])
        }
    }
    return b
}

const a={
    name:'art',
    action:'click',
    next:'button',
    age:18,
    person:{
        age:19,
        content:{
            address:'somewhere',
            others:0
        }
    }
}
const b= deepClone(a)
console.log(b===a)