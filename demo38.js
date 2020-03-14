const swap=(arr,p,q)=>{
    let temp=arr[p]
    arr[p]=arr[q]
    arr[q]=temp
}

const sort=(arr)=>{
    buildHeap(arr,arr.length-1)
    for(let i=arr.length-2;i>=1;i--){
        heapSort(arr,i)
    }
}

const buildHeap=(arr,len)=>{
    // 从下向上建堆
    while(len>=1){
        let temp=len
        while(len>=1&&arr[len]>arr[Math.floor((len-1)>>1)]){
            let parent=Math.floor((len-1)>>1)
            swap(arr,len,parent)
            len=parent
        }
        len=temp-1
    }
    swap(arr,0,arr.length-1)
}

const heapSort=(arr,len)=>{
    // 比较两个子节点和父节点，向下shift
    let parent=0
    let left=1
    let largerIndex=1
    while(left<=len){
        if(left+1<=len&&arr[left]<arr[left+1]){
            largerIndex++
        }
        if(arr[largerIndex]<=arr[parent]) break
        swap(arr,parent,largerIndex)
        parent=largerIndex
        left=2*parent+1
        largerIndex=left    
    }
    swap(arr,0,len)
}


const arr=[98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121]
sort(arr)
console.log(arr)