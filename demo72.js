class jQuery{
    constructor(selector){
        const result = document.querySelectorAll(selector)
        const length = result.length
        for(let i=0; i<length; i++){
            this[i]=result[i]
        }
        this.length=length
    }
    get(index){
        return this[index]
    }
    each(fn){
        for(let i=0;i<this.length;i++){
            const elem = this[i]
            fn(elem)
        }
    }
    on(type, fn){
        return this.each(elem=>{
            elem.addEventListener(type, fn, false)
        })
    }
}

// 插件-类的显式原型中保存函数方法
jQuery.prototype.dialog = function(info){
    alert(info)
}

// 复写 “造轮子”-类的继承，填充更多的方法
class myJQuery extends jQuery{
    constructor(selector){
        super(selector)
    }
    // 扩展自己的方法
    addClass(className){

    }
    style(data){

    }
}

// const $p=new jQuery("p")
// $p.get(1)
// $p.each((elem)=>console.log(elem.nodeName))
// $p.on('click', ()=>alert("clicked"))
