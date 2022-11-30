/*
 * @Author: artemis
 * @Date: 2022-04-07 16:19:18
 * @LastEditTime: 2022-04-07 20:25:59
 * @LastEditors: artemis
 * @Description: 排序算法汇总
 */

// 1. 冒泡 2. 插入 3. 选择 4. 堆 5. 快速 6. 归并 7. 希尔 8. 计数 9. 基数
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let isSorted = true;
    for (let j = n - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        const tmp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = tmp;
        isSorted = false;
      }
    }
    if (isSorted) return;
  }
}

function insertSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let j = i + 1;
    const tmp = arr[j];
    while (j > 0 && tmp < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j = j - 1;
    }
    arr[j] = tmp;
  }
}

function chooseSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
}

class Heap {
  constructor(arr) {
    this.heap = arr;
    this.size = arr.length;
    this.buildHeap();
  }
  buildHeap() {
    let index = Math.floor((this.size - 2) / 2);
    while (index >= 0) {
      this.downAdjust(index);
      index--;
    }
  }
  downAdjust(i) {
    const tmp = this.heap[i];
    while (i * 2 + 1 < this.size) {
      let left = i * 2 + 1;
      if (left + 1 < this.size && this.heap[left + 1] > this.heap[left]) {
        left++;
      }
      if (this.heap[left] > tmp) {
        this.heap[i] = this.heap[left];
        i = left;
      } else {
        break;
      }
    }
    this.heap[i] = tmp;
  }
  delete() {
    this.size--;
    const tmp = this.heap[0];
    this.heap[0] = this.heap[this.size];
    this.heap[this.size] = tmp;
    this.downAdjust(0);
  }
}

function heapSort(arr) {
  const heap = new Heap(arr);
  arr.forEach(_ => {
    heap.delete();
  });

}

function quickSort(arr, left, right) {
  if (left >= right) return;
  let mark = left,
    p = left + 1;
  const tmp = arr[left];
  while (p <= right) {
    if (arr[p] < tmp) {
      mark++;
      [arr[mark], arr[p]] = [arr[p], arr[mark]];
    }
    p++;
  }
  arr[left] = arr[mark];
  arr[mark] = tmp;
  quickSort(arr, left, mark - 1);
  quickSort(arr, mark + 1, right);
}

function mergeSort(arr, left, right) {
  if (left >= right) return;
  const mid = Math.floor((left + right) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  const tmp = [];
  let index = 0,
    p1 = left,
    p2 = mid + 1;
  while (p1 <= mid && p2 <= right) {
    tmp[index++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
  }
  while (p1 <= mid) {
    tmp[index++] = arr[p1++];
  }
  while (p2 <= right) {
    tmp[index++] = arr[p2++];
  }
  index = 0;
  while (left <= right) {
    arr[left++] = tmp[index++];
  }
}

function shellSort(arr) {
  let span = Math.floor(arr.length / 2);
  while (span > 0) {
    for (let i = 0; i < span; i++) {
      for (let j = i + span; j < arr.length; j += span) {
        let tmpJ = j,
          tmp = arr[j];
        while (j >= span && arr[j - span] > tmp) {
          arr[j] = arr[j - span];
          j = j - span;
        }
        arr[j] = tmp;
        j = tmpJ;
      }
    }
    span = Math.floor(span / 2);
  }
}

function countSort(arr) {
  let min = arr[0],
    max = arr[0];
  arr.forEach(item => {
    min = Math.min(min, item);
    max = Math.max(max, item);
  });
  const tmp = new Array(max - min + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    tmp[arr[i] - min]++;
  }
  let index = 0;
  for (let i = 0; i < tmp.length; i++) {
    while (tmp[i]) {
      arr[index++] = i + min;
      tmp[i]--;
    }
  }
}

function radixSort(arr) {
  let maxLength = 0;
  arr.forEach(item => {
    maxLength = Math.max(item.length, maxLength);
  });
  for (let i = maxLength - 1; i >= 0; i--) {
    const sortedArr = new Array(128).fill(0);
    for (let item of arr) {
      const index = i < item.length ? item.charCodeAt(i) : 0;
      sortedArr[index]++;
    }
    for (let j = 1; j < 128; j++) {
      sortedArr[j] += sortedArr[j - 1];
    }
    const tmp = [];
    for (let j = arr.length - 1; j >= 0; j--) {
      const index = i < arr[j].length ? arr[j].charCodeAt(i) : 0;
      sortedArr[index]--;
      tmp[sortedArr[index]] = arr[j];
    }
    arr = tmp.slice();
  }
  return arr;
}

// const arr = [9, 5, 4, 6, 3, 2, 8, 1, 7, 0]
// bubbleSort(arr)
// insertSort(arr)
// chooseSort(arr)
// heapSort(arr)
// quickSort(arr, 0, arr.length - 1)
// mergeSort(arr, 0, arr.length - 1)
// shellSort(arr)
// countSort(arr)
// console.log(arr)

const arr1 = ['qd', 'abc', 'qwe', 'hhh', 'a', 'cws', 'ope'];
console.log(radixSort(arr1));