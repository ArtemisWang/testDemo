/*
 * @Author: yating.wang
 * @Date: 2021-12-05 16:17:11
 * @LastEditTime: 2021-12-05 16:39:10
 * @LastEditors: yating.wang
 * @Description: 原型链
 */
class Person{
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  getName() {
    console.log(this.name)
  }
  getAge() {
    console.log(this.age)
  }
}
class Man extends Person{
  constructor(name, age, type) {
    super(name, age)
    this.type = type
  }
  getType() {
    console.log(this.type)
  }
}

const xiaoguai = new Man('xiaoguai', 18, 'Cat')
xiaoguai.getName()
console.log(xiaoguai.__proto__ === Man.prototype) // true
console.log(Man.prototype.__proto__ === Person.prototype) // true