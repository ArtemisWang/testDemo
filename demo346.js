/*
 * @Author: yating.wang
 * @Date: 2021-12-10 14:29:12
 * @LastEditTime: 2021-12-10 14:31:55
 * @LastEditors: yating.wang
 * @Description: parseQuery
 */
function parseQuery(query) {
  const res = {}
  const objs = query.split('&')
  for (let obj of objs) {
    if (obj) {
      obj = obj.split('=')
      res[obj[0].trim()] = (obj[1]||'').trim()
    }
  }
  return res
}


var jerry = parseQuery("name=jerry&age=1");
console.log(jerry)
// 返回值：{name: " jerry ", age: "1"}，返回类型Object
var tom = parseQuery("name= tom &age=12&gender&");
console.log(tom)
// 返回值：{name: "tom", age: "12", gender: ""}