// 属性特性

const person={
    _name:'yt'
}

Object.defineProperty(person,"name",{
    set:function(name){this._name=name},
    get:function(){return this._name}
})


console.log(person.name)
person.name='yating'
console.log(person.name)