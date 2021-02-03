// 原型式继承
function inheritObj(o) {
    function F() {}
    F.prototype = o
    return new F()
}

// 根据已有对象，创建一个新对象
// 缺点：父类对象中值属性被复制，引用类型属性被共用