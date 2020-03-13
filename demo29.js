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
    let pivot=Math.floor((right-left)>>1)+left
    let temp=arr[pivot]
    let p1=left
    let p2=right
    while(p1<p2){
        while(arr[p1]<temp){
            p1++
        }
        while(arr[p2]>temp){
            p2--
        }
        if(p1<p2){
            if(pivot===p1) pivot=p2
            else if(pivot===p2) pivot=p1
            swap(arr, p1, p2)
            p1++
            p2--
        }
    }
    return pivot
}

let arr=[98, 42, 25, 54, 15, 3, 26, 72, 41, 10, 121]
sort(arr)
console.log(arr)