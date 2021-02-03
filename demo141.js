function SuperClass(name) {
    this.name = name
    console.log('父类');

}
SuperClass.prototype.getName = function() {
    console.log(this.name);

}

// 组合继承
function SubClass(name) {
    SuperClass.call(this, name)
    console.log('子类');

}

SubClass.prototype = new SuperClass()

const instance1 = new SubClass('yt')
instance1.getName()

// 缺点：调用了2次父类构造函数