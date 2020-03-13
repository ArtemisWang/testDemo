function quickSort(arr){
    if(arr.length<=1) return arr
    let left=[]
    let right=[]
    let mid=Math.floor(arr.length>>1)
    let pivot=arr.splice(mid,1)
    for(let i=0;i<arr.length;i++){
        if(arr[i]<pivot) left.push(arr[i])
        else right.push(arr[i])
    }
    return quickSort(left).concat(pivot,quickSort(right))
}

const arr=[98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121]

console.log(quickSort(arr))