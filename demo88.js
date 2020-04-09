let exam = {
    name: "Tom",
    age: 24,
    get info(){
        return this.name + this.age;
    }
}
Reflect.get(exam, 'name'); // "Tom"
 
// 当 target 对象中存在 name 属性的 getter 方法， getter 方法的 this 会绑定 // receiver
let receiver = {
    name: "Jerry",
    age: 20
}
// 使用receiver仅仅绑定了方法中的this值到receiver上，对于直接获取get函数，其操作的仍然为target对象的属性
console.log(Reflect.get(exam, 'info', receiver)); // Jerry20
console.log(Reflect.get(exam, 'name', receiver)) // Tom

 
// 当 name 为不存在于 target 对象的属性时，返回 undefined
Reflect.get(exam, 'birth'); // undefined

// 当 target 不是对象时，会报错
// Reflect.get(1, 'name'); // TypeError