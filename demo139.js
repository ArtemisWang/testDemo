function SuperClass() {
    this.name = 'yt'
    console.log('父类');

}
SuperClass.prototype.getName = function() {
    console.log(this.name);

}

function SubClass() {
    console.log('子类');

}
// 类式继承
SubClass.prototype = new SuperClass()

const instance1 = new SubClass()
instance1.getName()

// 缺点：1.父类中共有属性若为引用类型会在子类中被所有实例共用；2.创建父类时无法向父类传参，无法对父类构造函数内属性初始化