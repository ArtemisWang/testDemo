/*
 * @Author: artemis
 * @Date: 2021-12-29 09:55:15
 * @LastEditTime: 2021-12-29 10:27:34
 * @LastEditors: artemis
 * @Description: 使用WeakMap部署私有属性
 */
const _counter = new WeakMap();
const _action = new WeakMap();
class Countdown {
  constructor(counter, action) {
    _counter.set(this, counter);
    _action.set(this, action);
  }
  dec() {
    let counter = _counter.get(this);
    if (counter < 1) return;
    counter--;
    _counter.set(this, counter);
    if (counter === 0) {
      _action.get(this)();
    }
  }
}
const c = new Countdown(2, () => console.log('DONE'));
c.dec();
c.dec();

// 数据缓存
const cache = new WeakMap();
function countOwnKeys(obj) {
  if (cache.has(obj)) {
    return cache.get(obj);
  } else {
    const count = Object.keys(obj).length;
    cache.set(obj, count);
    return count;
  }
}