function insertionSort(arr){
    // 每次从当前索引i处向前找能插入的位置，暂存起始i对应的值，如果前一个位置比当前位置的值大，则把前一个位置的值赋给当前位置
    // 当不满足条件时，将temp值放到向前比较结束的位置
    // 时间复杂度O(n^2)
    let n=arr.length
    for(let j=1;j<n;j++){
        let temp=arr[j]
        let i=j
        for(i;i>0&&temp<arr[i-1];i--){
            arr[i]=arr[i-1]
        }
        arr[i]=temp
    }
}

function swap(arr, i, j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}

let arr=[10,9,8,7,6,5]
insertionSort(arr)
console.log(arr)