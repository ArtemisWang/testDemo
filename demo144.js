function inheritObj(obj) {
    function F() {}
    F.prototype = obj
    return new F()
}

function SuperClass(name) {
    this.name = name
    console.log('父类');

}
SuperClass.prototype.getName = function() {
    console.log(this.name);

}

function SubClass(name) {
    SuperClass.call(this, name)
    console.log('子类');

}

SubClass.prototype = inheritObj(SuperClass.prototype)
SubClass.prototype.constructor = SubClass

const instance1 = new SubClass('yt')
instance1.getName()