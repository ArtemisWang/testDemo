/*
 * @Author: artemis
 * @Date: 2021-12-29 13:16:04
 * @LastEditTime: 2021-12-29 13:45:17
 * @LastEditors: artemis
 * @Description: 单例模式
 */
// 声明getInstance静态方法版单例模式
class Singleton {
  constructor(name) {
    this.name = name;
    this.instance = null;
  }
  static getInstance(name) {
    if (this.instance) {
      return this.instance;
    }
    return this.instance = new Singleton(name);
  }
}

// const person = Singleton.getInstance('yt')
// const person1 = Singleton.getInstance('xg')
// console.log(person, person1)


// 使用new声明版单例模式
class Singleton1 {
  constructor(name) {
    this.name = name;
  }
}
function GetSingleton1(name) {
  if (Singleton1.instance) {
    return Singleton1.instance;
  }
  return Singleton1.instance = new Singleton1(name);
}
const person2 = new GetSingleton1('yt');
const person3 = new GetSingleton1('xg');
console.log(person2, person3);