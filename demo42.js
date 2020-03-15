function* gen(a){
    let b=1
    let c=2
    let d =(yield b)+(yield c)
    yield d
}


let it=gen(10)
console.log(it.next(20),it.next(30),it.next(40),it.next(10))