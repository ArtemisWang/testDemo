let i=0

const show=(i)=>{
    
    setTimeout(function(){console.log(i)},500)
}

for(i;i<10;i++){
    (function (i){
        console.log(i)
    })(i)
    // show(i)
}