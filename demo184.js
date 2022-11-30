/*
 * @Author: artemis
 * @Date: 2021-10-13 09:41:46
 * @LastEditTime: 2021-10-13 09:45:45
 * @LastEditors: artemis
 * @Description: 数组去重
 */
Array.prototype.uniq = function () {
    return [...new Set(this)];
};

let arr = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN];

console.log(arr.uniq());