// 使用Promise加载一个图片
function loadImg(src){
    return new Promise((resolve, reject)=>{
        const img = document.createElement('img')
        img.onload=()=>{
            resolve(img)
        }
        img.onerror=()=>{
            const err = new Error('图片加载失败')
            reject(err)
        }
        img.src = src
    })
}

const url='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581093730748&di=821b8c8a8348d669e3acb545de9b197e&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn17%2F287%2Fw640h447%2F20180318%2F52eb-fyshfur3112083.jpg'
const url2='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3825320129,3326714166&fm=26&gp=0.jpg'
loadImg(url).then((img1)=>{
    console.log(`img1的宽度：${img1.width}`)
    return img1 // 返回普通对象
}).then((img1)=>{
    console.log(`img1的高度：${img1.height}`)
    return loadImg(url2) // 返回promise实例，则下面的img2为执行这个函数后得到的img对象
}).then(img2=>{
    console.log(`img2的宽度：${img2.width}`)
    return loadImg(url)
}).then((img1)=>{
    console.log(`img1的高度：${img1.height}`)
}).catch(ex=>console.error(ex))
// img1的宽度：640
// img1的高度：447
// img2的宽度：756
// img1的高度：447