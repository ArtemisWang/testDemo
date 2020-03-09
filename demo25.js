// 单例模式
class Singleton{
    constructor(){

    }
}

Singleton.getInstance=(function(){
    let instance
    return function(){
        if(!instance){
            instance=new Singleton()
        }
        return instance
    }
})()

const instance1=Singleton.getInstance()
const instance2=Singleton.getInstance()
console.log(instance1===instance2)