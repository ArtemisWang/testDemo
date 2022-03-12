/*
 * @Author: yating.wang
 * @Date: 2022-03-07 20:51:46
 * @LastEditTime: 2022-03-07 21:14:12
 * @LastEditors: yating.wang
 * @Description: 封装axios
 */
// axios原理指的就是用XMLHttpRequest实现发送ajax请求
class MyAxios {
  constructor() {}
  request(config) {
    return new Promise((resolve, reject) => {
      const {
        url,
        method = 'get',
        data = {}
      } = config
      const xhr = new XMLHttpRequest()
      xhr.open(method, url, true) // 第三个参数async：默认值为true，如果设为false，则在send方法收到答复前都不会返回，卡在这里了
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.responseText)
          } else {
            reject(xhr.status)
          }
        }
      }
      xhr.send(data)
    })
  }
}