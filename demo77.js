const div1=document.getElementById("div1")

// 新建节点
const p1=document.createElement('p')
p1.innerHTML = 'This is p1'
// 插入节点
div1.appendChild(p1)

console.log(p1.parentNode)
console.log(div1.childNodes)
childNodesP=Array.prototype.slice.call(div1.childNodes).filter((child)=>{return child.nodeType===1})
console.log(childNodesP)