// for (var i = 1; i <= 5; i++) {
//     setTimeout(function timer() {
//       console.log(i)
//     }, i * 100)
//   } // 66666

for (var i = 1; i <= 5; i++) {
  // 立即执行函数
    (function(j){
        setTimeout(function timer() {
            console.log(j)
          }, j * 100)
    })(i)
  }