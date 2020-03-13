function debounce(fn, delay=500){
    let timer=null
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer=setTimeout(()=>{
            fn.apply(this,arguments)
            timer=null
        },delay)
    }
}

let input1=document.getElementById('input1')
input1.addEventListener('keyup', debounce(()=>{
    console.log(input1.value)
},1000))