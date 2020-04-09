class People{
    constructor(name){
        this.name=name
    }
    EventTarget(){
        console.log(`${this.name} eats something.`)
    }
}

class Student extends People{
    constructor(name,age){
        super(name)
        this.age=age
    }
    sayHi(){
        console.log("this.name:"+this.name)
        console.log(`${this.name} of age ${this.age} says hi to you.`)
        // return this
    }
    biBao(){
        return this.sayHi
    }
}

let xialuo=new Student('xialuo', 20)
let xiaoli=new Student('xiaoli',23)
console.log(xialuo.__proto__===Student.prototype)
console.log(Student.prototype.__proto__===People.prototype)
console.log(People.prototype.__proto__===Object.prototype)
xialuo.sayHi()
Student.prototype.sayHi.call(xialuo)
xialuo.__proto__.sayHi.call(xiaoli)
// let fn = xialuo.biBao()
// console.log(fn())
// 当一个实例调用其闭包函数方法时，这个闭包函数所返回的方法中的this为undefined形式
// 需要通过bind、call、apply等函数绑定才能正确执行