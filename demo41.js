
function show(count){
    setTimeout(()=>{
        console.log(count)
        count--
        if(count>=0){
            show(count)
        }else{
            return
        }
    },1000)
}

show(10)