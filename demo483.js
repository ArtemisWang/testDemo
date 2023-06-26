/*
 * @Author: yating.wang
 * @Date: 2023-02-20 08:54:38
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-20 09:30:05
 * @Description: 
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const hash = new Map();
  for (let i = 0; i < s.length; i++) {
    hash.set(s[i], (hash.get(s[i]) ?? 0) + 1);
    hash.set(t[i], (hash.get(t[i]) ?? 0) - 1);
    if (hash.get(s[i]) === 0) {
      hash.delete(s[i]);
    }
    if (hash.get(t[i]) === 0) {
      hash.delete(t[i]);
    }
  }
  return hash.size === 0;
};

console.log(isAnagram('anagram', 'nagaram'));