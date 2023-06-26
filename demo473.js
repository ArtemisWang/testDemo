/*
 * @Author: yating.wang
 * @Date: 2023-02-14 13:19:36
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-15 09:12:47
 * @Description: 
 */
var largestNumber = function (nums) {
  nums = nums.sort((a, b) => {
    let sa = 10, sb = 10;
    while (sa <= a) {
      sa *= 10;
    }
    while (sb <= b) {
      sb *= 10;
    }
    return (a + b * sa) - (b + a * sb);
  });
  let res = nums.join('');
  if (Number(res) === 0) return '0';
  return res;
};

console.log(largestNumber([90, 94, 30, 22, 1, 9, 0]));