/*
 * @Author: artemis 
 * @Date: 2021-07-Tu 01:20:19 
 * @Last Modified by:   artemis 
 * @Last Modified time: 2021-07-Tu 01:20:19 
 */
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


function insertion(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        swap(arr, j, i);
      }
    }
    console.log(arr);
  }
}
insertion([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);