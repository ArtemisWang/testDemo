function swap(arr, i, j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}

function checkArray(arr){
    if(!arr) return
}

// 堆排序
function sort(arr){
    checkArray(arr)
    let start=arr.length-1
    heapOnce(arr, start--)
    while(start>1){
        heapBetween(arr, start--)
    }
}

function heapOnce(arr, len){
    for(let i=len;i>0;i--){
        let temp=i
        while(arr[i]>arr[parseInt((i-1)>>1)]){
            swap(arr, i, parseInt((i-1)/2))
            i=parseInt((i-1)/2)
        }
        i=temp
    }
    swap(arr, 0, len)
}

function heapBetween(arr, len){
    let parent=0
    let left=1
    let largerIndex
    while(left<len){
        largerIndex=left
        if(left+1<=len&&arr[left]<arr[left+1]){
            largerIndex++
        }
        if(arr[parent]>arr[largerIndex]){break}
        swap(arr,parent,largerIndex)
        parent=largerIndex
        left=parent*2+1
    }
    swap(arr, 0, len)
}

let arr=[1,3,2,8,9,7,6]
sort(arr)
console.log(arr)