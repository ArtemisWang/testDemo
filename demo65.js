function f1(){
    let a=1
    return function f2(){
        let b=1
        console.log(a++,b++)
        return f2
    }
}

console.log(f1()())

console.log(f1()()())


function f3(sum){
    return function(i){
        sum+=i
        console.log(sum)
    }
}

let callSum=f3(1) // 闭包函数创建
callSum(2)
callSum(3)
callSum(4)
callSum=null
console.log(typeof undefined)