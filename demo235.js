/*
 * @Author: artemis
 * @Date: 2021-10-20 11:06:54
 * @LastEditTime: 2021-10-20 11:08:37
 * @LastEditors: artemis
 * @Description: 判断是否以元音字母结尾
 */
function endsWithVowel(str) {
  return /.*[aeiouAEIOU]$/.test(str);
}

console.log(endsWithVowel('gorilla'));