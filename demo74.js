// 创建10个`<a>`标签，点击的时候弹出来对应的序号
let a
for(let i=0;i<10;i++){
    //let放到这边，每次循环都会产生一个块级作用域，不再是全局的，能够正确返回对应的序号
    a=document.createElement('a')
    a.innerHTML = i+'<br>'
    a.addEventListener('click', function(e){
        // 函数被点击时才会执行，那么在函数循环都结束之后才会点击
        // 造成无论点击哪个数字返回的都是10（i如果为全局变量的结果）
        e.preventDefault()
        alert(i)
    })
    document.body.appendChild(a)
}