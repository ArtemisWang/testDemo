function Person(name) {
    if (this instanceof Person) {
        this.name = name
    } else {
        throw new Error("必须通过new关键字来调用Person")
    }
}


const person = new Person('Nicholas')
console.log(person.name)
const notAPerson = Person.call(person, "Micheal")
console.log(person.name)