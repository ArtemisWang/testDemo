/*
 * @Author: artemis
 * @Date: 2021-11-22 13:45:14
 * @LastEditTime: 2021-11-22 15:13:21
 * @LastEditors: artemis
 * @Description: 单词接龙
 */
// 建立一个hashMap， 存储当前遍历到的从单词到层数的映射， 同时建立一个队列， 存储需要进行广度搜索的单词。
// 为了获得最短转换序列， 需要保证链表没有环， 每次向下走都必须改变一个单词， 且该单词不能是之前遍历过的。
var ladderLength = function (beginWord, endWord, wordList) {
  if (wordList.indexOf(endWord) === -1) return 0;
  const hash = new Map();
  hash.set(beginWord, 1);
  const queue = [beginWord];
  while (queue.length) {
    beginWord = queue.shift();
    let num = hash.get(beginWord);
    for (let word of wordList) {
      if (oneChange(beginWord, word) && !hash.has(word)) {
        if (word === endWord) return num + 1;
        hash.set(word, num + 1);
        queue.push(word);
      }
    }
  }
  return 0;
};

function oneChange(word1, word2) {
  // 如果两个单词只有1个字母不同，返回true，否则返回false
  let res = 0;
  for (let i = 0; i < word1.length; i++) {
    word1[i] !== word2[i] && res++;
    if (res > 1) return false;
  }
  return res === 1;
}

var ladderLength1 = function (beginWord, endWord, wordList) {
  const set = new Set(wordList);
  const queue = [[beginWord, 1]];
  let level = 0;
  while (queue.length) {
    [beginWord, level] = queue.shift();
    for (let i = 0; i < beginWord.length; i++) {
      for (let j = 97; j < 123; j++) {
        let tmp = beginWord.slice(0, i) + String.fromCharCode(j) + beginWord.slice(i + 1);
        if (set.has(tmp)) {
          if (tmp === endWord) return level + 1;
          queue.push([tmp, level + 1]);
          set.delete(tmp);
        }
      }
    }
  }
  return 0;
};


console.log(ladderLength1("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));