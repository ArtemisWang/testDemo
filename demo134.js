for (var i = 1; i <= 5; i++) {
    (function() {
        setTimeout(function timer() {
            console.log(i)
        }, 1000 * i)
    }())
}

for (var i = 6; i <= 11; i++) {
    (function(j) {
        setTimeout(function timer() {
            console.log(j)
        }, 1000 * j)
    }(i))
}