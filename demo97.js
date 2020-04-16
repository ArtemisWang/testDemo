function shellSort(arr){
    // 时间复杂度O(n^1.3)
    // 首先选取数组长度n的一半作为增量，再选取n/4作为增量，直至增量为0结束
    // 每次对从index与index+增量倍数所组成的数组进行插入排序，index从0到增量-1递增
    let n=arr.length
    let k=parseInt(n/2)
    while(k>0){
        for(let i=0;i<n;i++){
            let j=i+k
            let temp=arr[j]
            for(j;j<n&&;j+=k){
                // 未完...
            }
        }
    }

}


function swap(arr, i, j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}