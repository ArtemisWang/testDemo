function swap(arr, i, j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}

function checkArray(arr){
    if(!arr) return
}

// 归并排序
function sort(arr){
    checkArray(arr)
    mergeSort(arr, 0, arr.length-1)
    return arr
}

function mergeSort(arr, left, right){
    if(left===right) return
    let mid=left+parseInt((right-left)>>1)
    mergeSort(arr, left, mid)
    mergeSort(arr, mid+1, right)
    
    let temp=[]
    let i=0
    let p1=left
    let p2=mid+1
    while(p1<=mid&&p2<=right){
        temp[i++]=arr[p1]<arr[p2]?arr[p1++]:arr[p2++]
    }
    while(p1<=mid){
        temp[i++]=arr[p1++]
    }
    while(p2<=right){
        temp[i++]=arr[p2++]
    }
    for(let j=0;j<temp.length;j++){
        arr[left++]=temp[j]
    }
    return arr
}

let arr=[98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121]
sort(arr)
console.log(arr)