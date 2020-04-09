// './test020.json'
const xhr = new XMLHttpRequest()
xhr.open('GET', './demo79.json', false)
// POST方法
// xhr.open('POST', './demo79.json', false)
xhr.onreadystatechange = function(){ // 触发函数
    if(xhr.readyState===4){
        if(xhr.status===200){
            // 这个时候数据才会返回
            alert(xhr.responseText)
            // console.log(JSON.parse(xhr.responseText))
        }
        else{
            console.log('其他情况')
        }
    }
}
const postData={
    username:"zhangsan",
    password:"xxx"
}
xhr.send(null)
// POST方法
// xhr.send(JSON.stringify(postData))