/*
 * @Author: artemis
 * @Date: 2021-10-20 09:56:15
 * @LastEditTime: 2021-10-20 10:02:57
 * @LastEditors: artemis
 * @Description: 批量改变对象的属性
 */
function alterObjects(constructor, greeting) {
  constructor.prototype.greeting = greeting;
}

var C = function (name) {
  this.name = name;
  return this;
};
var obj1 = new C('Rebecca');
alterObjects(C, 'What\'s up');
console.log(obj1.greeting);