let akshata = {
    firstName:"akshata",
    lastName:'sonkusale',
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}
akshata.displayName()


let saurabh  = {
    firstName:"saurabh",
    lastName:"sonkusale",
}

let displayname2  = akshata.displayName
let displayName2 = function(){
    console.log(this.firstName + this.lastName)
}



let arr1 = displayName2.bind(saurabh)
let arr = function(){
        console.log(saurabh.firstName + saurabh.lastName)
    }


    console.log(akshata.firstName)
 console.log(akshata.lastName)
    akshata.displayName()


    //2

    let saurabhA = {
        firstName:"saurabhA",
        lastName:"sonkusaleA"
    } 
    let saurabhB = {
        firstName:"saurabhB",
        lastName:"sonkusaleB"
    } 
    
    let saurabhC = {
        firstName:"saurabhC",
        lastName:"sonkusaleC"
    } 
    
    let displayName = function(){
        console.log(this.firstName + this.lastName)
    }
    let q1 = displayName.bind(saurabhA)
    let q2 = displayName.bind(saurabhB)
    let q3 = displayName.bind(saurabhC)
    
    
    let displayName3 = function(greet){
        console.log(this.firstName+ this.lastName)
        console.log(greet)
    }
    
    displayName3.call(saurabhA,"hi")
    displayName3.call(saurabhB,"hi2")
    displayName3.call(saurabhB,"hi3")
    
    
    displayName3.apply(saurabhA,["bye"])
    displayName3.apply(saurabhB,["bye2"])
    displayName3.apply(saurabhC,["bye3"])
    
    