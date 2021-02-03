// 寄生式继承：对原型继承的二次封装
function inheritObj(o) {
    function F() {}
    F.prototype = o
    return new F()
}

function createBook(obj) {
    var o = new inheritObj(obj)
    o.getName = function() {
        console.log(this.name);

    }
    return o
}

const o = {
    name: 'yt'
}
const o2 = createBook(o)
o2.getName()