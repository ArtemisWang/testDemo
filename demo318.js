/*
 * @Author: artemis
 * @Date: 2021-11-23 10:03:48
 * @LastEditTime: 2021-11-23 10:53:31
 * @LastEditors: artemis
 * @Description: 课程表
 */
function canFinish(N, arr) {
  const indegree = new Array(N).fill(0);
  const record = {};
  // 1. 遍历课程依赖数组，建立有向图record，其中存储prev->[next]，同时更新next课程的入度
  arr.forEach(([next, pre]) => {
    if (!record[pre]) record[pre] = [];
    record[pre].push(next); // 构建有向图
    indegree[next]++; // 入度计算
  });
  // total, currentValue, currentIndex
  // 2. 遍历找出入度为0的课程，入栈，栈中存储的是课程的入口
  const stack = indegree.reduce((t, i, index) => {
    !i && t.push(index);
    return t;
  }, []); // 寻找起点
  let res = 0;
  const flag = [];
  // 3. 出栈
  // 每弹出一个课程，压入res，同时将该课程的flag标识为1，正在完成
  // 查询record中是否有此课程的next数组，如果有的话：
  // 遍历next数组，如果next[i]的flag标识为1，表示下一个课程也是正在完成，正在完成的课程只有一个，如果发现了两个，表示有环，return false；
  // 更新下一个课程对应的入度，如果更新完入度变为0，将下一门课程压入栈
  // 当前课程的[next]数组遍历完成后，更新当前课程的flag为-1，表示当前课程已经完成
  // 最后返回的值取决于学习过的课程数量是否等于N，等于则为true
  while (stack.length) {
    const front = stack.pop();
    res++;
    flag[front] = 1;
    const nexts = record[front];
    if (nexts) {
      const len = nexts.length;
      for (let j = 0; j < len; j++) {
        if (flag[nexts[j]] === 1) return false;
        if (!--indegree[nexts[j]]) stack.push(nexts[j]);
      }
    }
    flag[front] = -1;
  }
  return res === N;
}