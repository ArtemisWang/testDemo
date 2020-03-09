// 装饰模式
function nameDecorator(target, key, descriptor) {
    descriptor.value = () => {
        return 'jake';
    }
    return descriptor;
}
class Person {
    constructor() {
        this.name = 'jake'
    }
    @nameDecorator
    getName() {
        return this.name;
    }
}

let p1 = new Person();
console.log(p1.getName())