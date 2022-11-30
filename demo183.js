/*
 * @Author: artemis
 * @Date: 2021-10-13 09:06:12
 * @LastEditTime: 2021-10-13 09:37:08
 * @LastEditors: artemis
 * @Description: 根据包名，在指定空间中创建对象
 */
function namespace(oNamespace, oPackage) {
  let packageArr = oPackage.split('.');
  let p = oNamespace;
  packageArr.forEach((item) => {
    p[item] = Object.assign({}, p[item]);
    p = p[item];
  });
  return oNamespace;
}
console.log((function () { var a = {}; var r = namespace(a, 'a.b.c.d.e.f.g'); a.a.b.c.d.e.f.g = 1; return a.a.b.c.d.e.f.g === 1; })());