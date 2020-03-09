// 适配器模式
class Plug{
    getName(){
        return '这里是原版'
    }
}

class PlugNew{
    constructor() {
        
        this.plug=new Plug()
    }
    getName(){
        return this.plug.getName()+'才怪'
    }
}

const plugNew=new PlugNew()
console.log(plugNew.getName())