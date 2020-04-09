class Father {
    constructor(name){
        this.name='yating'
        this.color=['red','blue','green']
    }
    callColor(){
        console.log(this.color)
        let count=1
        return function(){
            count++
            console.log(`count:${count}`)
        }
    }
    proArr=[[1],2,3]
    name='yt'
}

class Child extends Father{
    constructor(name, age){
        super(name)
        this.age=age
    }
}

const ch1=new Child('Art',20)
ch1.color.push('black')
ch1.proArr.push(4)
ch1.proArr[0].push([1,2,[3]])
const ch2=new Child('Kev',19)
// 独自享用的属性-color
let f1=ch1.callColor()
f1()
f1()
f1()
let f2=ch2.callColor()
f2()
f2()
// 共享的原型链属性-proArr
ch2.proArr.push(5)
console.log(ch1.proArr,ch2.proArr)
console.log(ch1.name)
f1()