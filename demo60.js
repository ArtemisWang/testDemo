function object(o){
    function F(){}
    F.prototype=o
    return new F()
}

// 组合寄生式继承

function Father(name){
    this.name=name
    this.color=['red','blue','green']
}
Father.prototype.callColor=function(){
    console.log(this.color)
    let count=1
    return function(){
        count++
        console.log(`count:${count}`)
    }
}
Father.prototype.proArr=[1,2,3]

function Child(name,age){
    Father.call(this,name)
    this.age=age
}

let proto=object(Father.prototype)
proto.constructor=Child
Child.prototype=proto

const ch1=new Child('Art',20)
ch1.color.push('black')
ch1.proArr.push(4)
const ch2=new Child('Kev',19)
// 独自享用的属性
let f1=ch1.callColor()
f1()
f1()
let f2=ch2.callColor()
f2()
f2()
// 共享的原型链属性
ch2.proArr.push(5)
console.log(ch1.proArr,ch2.proArr)
console.log(Child.prototype.__proto__)