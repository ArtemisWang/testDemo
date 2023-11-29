/*
 * @Author: yating.wang
 * @Date: 2023-09-19 17:34:50
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-10-16 18:57:31
 * @Description:
 */

const promiseGenerator = (sec) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sec % 2) {
        return resolve(sec);
      }
      return reject(sec);
    }, sec * 1000);
  });
};

Promise.myAllSettled = (arr) => {
  return new Promise((resolve, reject) => {
    let size = arr.length;
    const res = new Array(size).fill(0);
    let count = 0;
    for (let i = 0; i < size; i++) {
      arr[i].then(
        (value) => {
          res[i] = { status: "fufilled", value };
          count++;
          if (count === size) resolve(res);
        },
        (reason) => {
          res[i] = { status: "rejected", reason };
          count++;
          if (count === size) resolve(res);
        }
      );
    }
  });
};

Promise.myAllSettled([
  promiseGenerator(1),
  promiseGenerator(2),
  promiseGenerator(3),
  promiseGenerator(4),
]).then((arr) => {
  console.log(arr);
});
