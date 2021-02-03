function newF() {
    const obj = new Object()
    const Con = [].shift.call(arguments)
    obj.__proto__ = Con.prototype
    const result = Con.apply(obj, arguments)
    return typeof result === 'object' ? result : obj
        // 注意这里需要检查构造函数是否返回一个对象，如果返回对象，则new出的实例为该对象，否则new的实例为新建的对象
}

function Person() {
    this.name = 'yt'
    this.callName = () => {
        console.log(this.name);
    }
    let b = 123
        // return { b }
    return this
}
Person.prototype.age = 18

// 每次通过new创建对象，新创建的对象都会对类的this上的属性进行复制
const result = newF(Person)
console.log(result, result.age)