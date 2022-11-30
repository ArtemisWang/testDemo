/*
 * @Author: artemis
 * @Date: 2020-07-30 13:33:48
 * @LastEditTime: 2021-12-02 20:37:03
 * @LastEditors: artemis
 * @Description: 原型继承
 */
function SuperType() {
  this.name = 'yt';
}

SuperType.prototype = {
  fullName: 'yating'
};

function SubType() {
  SuperType.call(this);
}

SubType.prototype = Object.create(SuperType.prototype, {
  constructor: {
    value: SubType
  }
});

// SubType.prototype=new SuperType()
let sub = new SubType();
console.log(sub.name, sub.fullName, SubType.prototype.__proto__ === SuperType.prototype, SubType.prototype.constructor);
