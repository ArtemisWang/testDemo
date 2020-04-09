const div1=document.getElementById("div1")
console.log(div1)

const divList = document.getElementsByTagName("div")
console.log(divList)

const containerList = document.getElementsByClassName("container")
console.log(containerList[1])

const pList = document.querySelectorAll('p')
console.log(pList)
const p1=pList[0]

// property形式-可以实现节点属性的赋值和读取，并且渲染到页面上
p1.style.width='100px'
p1.className='red'
console.log(p1.style.width)
console.log(p1.nodeName)
console.log(p1.nodeType)

// attribute形式，通过调用attribute-API获取和设置节点属性，并且渲染到页面上，可以增加新的属性名
p1.setAttribute('data-name','imooc')
console.log(p1.getAttribute('data-name'))
// p1.setAttribute('style','font-size:50px')