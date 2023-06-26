/*
 * @Author: yating.wang
 * @Date: 2023-02-14 09:54:01
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-14 10:48:40
 * @Description:
 */
// https://leetcode.cn/problems/course-schedule/
var canFinish = function (numCourses, prerequisites) {
  const hash = new Map();
  const memo = new Map();
  for (let i = 0; i < prerequisites.length; i++) {
    let nextCourses = hash.get(prerequisites[i][1]) ?? [];
    nextCourses.push(prerequisites[i][0]);
    hash.set(prerequisites[i][1], nextCourses);
    let num = 1;
    if (memo.has(prerequisites[i][0])) {
      num = memo.get(prerequisites[i][0]) + 1;
    }
    if (!memo.has(prerequisites[i][1])) {
      memo.set(prerequisites[i][1], 0);
    }
    memo.set(prerequisites[i][0], num);
  }
  while (memo.size > 0) {
    let flag = true;
    for (let [course, level] of memo.entries()) {
      if (level === 0) {
        memo.delete(course);
        flag = false;
        let nextCourse = hash.get(course);
        nextCourse && nextCourse.forEach(crs => { memo.set(crs, memo.get(crs) - 1); });

      }
    }
    if (flag) return false;
  }
  return true;
};

console.log(canFinish(5, [[1, 4], [2, 4], [3, 1], [3, 2]]));