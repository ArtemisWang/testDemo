setTimeout(()=>{
    console.log('timer1')
    Promise.resolve().then(function() {
        console.log('promise1')
    })
}, 0)
setTimeout(()=>{
    console.log('timer2')
    Promise.resolve().then(function() {
        console.log('promise2')
    })
}, 0)

// 浏览器event loop结果：timer1-promise1-timer2-promise2
// nodejs 结果：timer1-timer2-promise1-promise2