/*
 * @Author: yating.wang
 * @Date: 2021-12-25 16:17:02
 * @LastEditTime: 2021-12-25 16:17:02
 * @LastEditors: yating.wang
 * @Description: Proxy代理
 */
function reactive(value = {}) {
  if (!value || (typeof value !== 'object')) {
    return
  }
  // 代理配置
  const proxyConf = {
    get(target, key, receiver) {
      // 只处理非原型的属性
      let ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        console.log('get', key)
      }
      const result = Reflect.get(target, key, receiver)
      // 深度监听 
      // 性能如何提升？ 什么时候用什么时候递归
      return reactive(result)
    },
    set(target, key, val, receiver) {
      // 重复的数据不处理
      const oldVal = target[key]
      if (val === oldVal) return true

      const ownKey = Reflect.ownKeys(target)
      if (ownKeys.include(key)) {
        console.log('已有的key', key)
      } else {
        console.log('新增的key', key)
      }

      const result = Reflect.set(target, key, val, receiver)
      console.log('set', key, val)
      return result
    },
    deleteProperty(target, key) {
      const result = Reflect.deleteProperty(target, key)
      console.log('delete property', key)
      return result
    }
  }
  // 生成代理对象
  const observed = new Proxy(value, proxyConf)
  return observed
}
const data = {
  name: 'zhangsan',
  age: 20,
  info: {
    address: '北京'
  },
  num: [1, 2, 3]
}
const proxyData = reactive(data)
proxyData.name = 'lisi' // set name lisi