function mergeSort(arr, left, right){
    if(left>=right) return
    let mid=Math.floor((right-left)>>1)+left
    mergeSort(arr,left,mid)
    mergeSort(arr,mid+1,right)
    let p1=left
    let p2=mid+1
    let temp=[]
    let i=0
    while(p1<=mid&&p2<=right){
        temp[i++]=(arr[p1]<arr[p2])?arr[p1++]:arr[p2++]
    }
    while(p1<=mid){
        temp[i++]=arr[p1++]
    }
    while(p2<=right){
        temp[i++]=arr[p2++]
    }
    i=0
    for(let j=left;j<=right;j++){
        arr[j]=temp[i++]
    }
    return arr
}

let arr=[98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121]
mergeSort(arr,0,arr.length-1)
console.log(arr)