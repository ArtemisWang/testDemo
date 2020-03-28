

function countBonus(a){
    let n=a.length
    let dp=[0]
    for(let i=1;i<n;i++){
        dp.push(i+dp[i-1])
    }
    
}


let a=[1,1,2,0,1,2,1,1]