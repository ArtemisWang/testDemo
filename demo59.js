function SuperType(){
    this.name='yt'
}

SuperType.prototype={
    fullName:'yating'
}

function SubType(){

}

SubType.prototype=new SuperType()
let sub=new SubType()
console.log(sub.name,sub.fullName)