// 小岛沉没

function dfs(data,i,j){
    if(i>=data.length||j>=data[0].length){
        return 0
    }
    if(data[i][j]===1){
        data[i][j]=0
        return 1+dfs(data,i+1,j)+dfs(data,i,j+1)
    }
    return 0
}


let data=[
    [0,0,1,0,0,0,0,1],
    [0,0,0,0,0,0,0,1],
    [0,1,1,0,1,0,0,0],
    [0,1,0,0,1,1,0,0],
    [0,0,0,0,1,1,0,0],
]

let res=0
for(let i=0;i<5;i++){
    for(let j=0;j<8;j++){
        if(data[i][j]===1){
            data[i][j]=0
            res=Math.max(res,1+dfs(data,i+1,j)+dfs(data,i,j+1))
        }
    }
}
console.log(res)