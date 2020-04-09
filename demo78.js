// 1.每次循环内部都执行插入操作，影响性能
const list = document.getElementById('list');
// for (let i = 0; i < 10; i++) {
// 	const li = document.createElement('li');
// 	li.innerHTML = `List item ${i}`;
// 	list.appendChild(li);
// }


// 2.使用fragment，一次性插入
// 创建一个文档片段，此时还没有插入到DOM结构中
const frag = document.createDocumentFragment();
for (let i = 0; i < 10; i++) {
	const li = document.createElement('li');
	li.innerHTML = `List item ${i}`;
	// 先插入到文档片段中
	frag.appendChild(li);
}
// 都完成之后，再统一插入到DOM结构中
list.appendChild(frag);
