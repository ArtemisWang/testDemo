
function show(){
    setInterval(()=>{
        let d=new Date()
    console.log(`${d.getFullYear()}年${d.getMonth()}月${d.getDate()}日 ${d.getHours()}时${d.getMinutes()}分${d.getSeconds()}秒`)
    },1000)
}

show()

