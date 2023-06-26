/*
 * @Author: yating.wang
 * @Date: 2023-02-08 12:07:29
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-08 12:59:32
 * @Description: leetcode 会议室 https://blog.csdn.net/u013570834/article/details/122266312
 */
// 给定一个会议时间安排的数组 intervals ，每个会议时间都会包括开始和结束的时间 intervals[i] = [starti, endi]，请你判断一个人是否能够参加这里面的全部会议。
// 输入：intervals = [[0,30],[5,10],[15,20]]
// 输出：false
// 输入：intervals = [[7,10],[2,4]]
// 输出：true

var canAttendMeetings = function (a) {
  a = a.sort((x, y) => x[0] - y[0]);
  for (let i = 1; i < a.length; i++) {
    if (a[i][0] < a[i - 1][1]) return false;
  }
  return true;
};

console.log(canAttendMeetings([[7, 10], [2, 4], [9, 10], [0, 11]]));