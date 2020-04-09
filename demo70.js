// 在一串字符串中找到身份证号码并返回

function printIDCard( str ) {
    let reg=/[(11)(12)(13)(14)(15)(21)(22)(23)(31)(32)(33)(34)(35)(36)(37)(41)(42)(43)(44)(45)(46)(50)(51)(52)(53)(54)(61)(62)(63)(64)(65)(71)(81)(82)(91)](\d{14})(\d)/
    let index=str.search(reg)
    while(index!==-1){
        let w=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2]
        let y=['1','0','X','9','8','7','6','5','4','3','2']
        let jy=str[index+17]
        let sum=0
        for(let i=0;i<17;i++){
            sum+=w[i]*parseInt(str[index+i],10)
        }
        if(isBirth(str.slice(index+6,index+14))){
            if(y[sum%11]===jy){
                return  (`true ${str.slice(index, index+18)}`)
            }
        }
        str=str.slice(index+1)
        index=str.search(reg)
    }
    return false
}

function isBirth(str){
    let year=parseInt(str.slice(0,4),10)
    if(year>2020||year<1900) return false
    let month=parseInt(str.slice(4,6),10)
    if(month<1||month>12) return false
    let day=parseInt(str.slice(6,8),10)
    let mini=[2,4,6,9,11]
    if(month in mini){
        if(month===2){
            if(year%400===0||(year%4===0&&year%100!==0)){
                if(day>29) return false
            }else if(day>28) return false
        }
        else if(day>30) return false
    }else if(day>31) return false
    return true
}

// console.log(printIDCard("34052419800101001X"))
console.log(printIDCard("AAA311224861101201BBB211224199612012010CCC34052419800101001X"))
