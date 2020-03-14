

function animate(){
    if(count===0) {
        console.log(time--)
        count=60
        if(time<0) return 
    }
    count--
    return window.requestAnimationFrame(animate)
}

let count=60
let time=10
animate()