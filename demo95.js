function selectionSort(arr){
    // 每次遍历找到当前最小值的索引minIndex，与当前的i交换
    // 时间复杂度O(n^2)
    let n=arr.length
    for(let i=0;i<n;i++){
        let minIndex=i
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }
        swap(arr,minIndex,i)
    }
}

function swap(arr, i, j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}

let arr=[10,9,8,7,6,5]
selectionSort(arr)
console.log(arr)