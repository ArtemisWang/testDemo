function newfunction(Constructor,...args){
    let obj={}
    obj=Constructor.prototype
    Constructor.apply(obj,args)
    return obj
}

function Parent(name,age){
    this.name=name
    this.age=age
}

Parent.prototype.getAge=function(){
    console.log(this.age)
}

let obj=newfunction(Parent,'yating',18)
obj.getAge()
console.log(obj)