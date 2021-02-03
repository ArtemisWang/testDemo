function SuperClass(name) {
    this.name = name
    console.log('父类');

}
SuperClass.prototype.getName = function() {
    console.log(this.name);

}

// 构造函数式继承
function SubClass(name) {
    SuperClass.call(this, name)
    console.log('子类');

}



const instance1 = new SubClass()
instance1.getName()

// 缺点：父类的原型方法没有得到继承