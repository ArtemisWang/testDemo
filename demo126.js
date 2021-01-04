function func(value) {
    return function() {
        console.log(value)
    }
}

const funcs = []
for (var i = 0; i < 10; i++) {
    funcs.push(func(i))
}

console.log(funcs)

funcs.forEach(
    item => { item() }
)

// 当9行执行时，将当前的i值传递至1行的func函数中；
// 1行的func函数中包含一个闭包，一般闭包会阻止其所使用的变量的值释放，也就是说当前传过来的i值，不会随着func外层函数的调用完成而释放
// 这样分10次传递了10个不同的i值过来，10个不同的i值被保留