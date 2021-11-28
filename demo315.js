/*
 * @Author: yating.wang
 * @Date: 2021-11-22 15:30:06
 * @LastEditTime: 2021-11-22 16:20:24
 * @LastEditors: yating.wang
 * @Description: 员工的重要性
 */
var GetImportance = function(employees, id) {
  const hash = new Map()
  for (let employee of employees) {
    hash.set(employee[0],employee)
  }
  let queue = []
  queue.push(id)
  let res = 0
  while (queue.length) {
    id = queue.shift()
    if (hash.has(id)) {
      res += hash.get(id)[1]
      queue = queue.concat(hash.get(id)[2])
    }
  }
  return res
};

console.log(GetImportance(
  [
    [1, 2, [5]],
    [5, -3, []]
  ]
,5))