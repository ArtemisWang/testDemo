class Example {
    @logMethod(1)
    @logMethod(2)
    sum(a, b){
        return a + b;
    }
}
function logMethod(id) {
    console.log('evaluated logMethod '+id);
    return function(target, name, desctiptor){console.log('excuted logMethod '+id)};
}

// 压入执行栈，所以先进后出