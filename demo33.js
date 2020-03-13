
function show(i){
    console.log(i)
}

// setInterval倒计时
// let timer=setInterval(()=>{
//     if(count>=0) show(count--)
//     else{
//         clearInterval(timer)
//     }
// },1000)

// setTimeout倒计时
function output(count){
    if (count<0) return
    setTimeout(()=>{
        console.log(count--)
        output(count)
    },1000)
}
let count=10
output(count)

