const a={
    name:"zhangsan"
}

class Singleton{
    constructor(){
        this.a={
            0:"zhangsan"
        }
    }
}

Singleton.getA=(function(){
    let instance
    return function(){
        if(!instance){
            instance=new Singleton
        }
        return instance.a
    }
})()

const b=Singleton.getA()
b.name='xiao'
console.log(b)
const c=Singleton.getA()
console.log(c)

const arr='1234'
for(let i in arr){
    console.log(typeof ('9'-'0'))
}