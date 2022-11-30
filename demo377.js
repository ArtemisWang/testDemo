/*
 * @Author: artemis
 * @Date: 2022-02-17 13:34:03
 * @LastEditTime: 2022-02-17 13:35:06
 * @LastEditors: artemis
 * @Description: 
 */
"use strict";

let obj = { a: 1, b: 2 };
Object.defineProperties(obj, {
  a: {
    writable: false
  }
});
obj.a = 2;