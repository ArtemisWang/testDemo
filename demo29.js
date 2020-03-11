function swap(arr, i, j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}

function checkArray(arr){
    if(!arr) return
}

// 快速排序
function sort(arr){
    checkArray(arr)
    quickSort(arr, 0, arr.length-1)
    return arr
}

function quickSort(arr, left, right){
    if(left>=right) return
    let index=partition(arr, left, right)
    quickSort(arr, left, index)
    quickSort(arr, index+1, right)
    return
}

function partition(arr, left, right){
    let pivot=left+parseInt((right-left)>>1)
    let p1=left
    let p2=right
    while(p1<p2){
        while(arr[p1]<arr[pivot]){
            p1++
        }
        while(arr[p2]>arr[pivot]){
            p2--
        }
        if(p1<p2){
            swap(arr, p1, p2)
            p1++
            p2--
        }
    }
    return p2
}

let arr=[2,3,9,6,7,8,10]
sort(arr)
console.log(arr)