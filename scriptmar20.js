
// let names  = ["AA","BB","CC"]

// let a = names[0]
// let b = names[1]
// let c = names[2]

// console.log(a)
// console.log(b)
// console.log(c)


// let [a1,b1,c1] = names
// console.log(a1)
// console.log(b1)
// console.log(c1)



// let cities =  [["Nagpur","Wardha"],["bhopal","indore"],["lucknow","agra"]]
// let [[c11,c22],[c44,c55],[c66,c77]] = cities
// console.log(c55)
// console.log(c44)


// let info = {
//     firstName:"Akshata",
//     lastName:"Sonkusale"
// }

// let {firstName,lastName} = info
// console.log(firstName)
// console.log(lastName)


// let Vehicle = {
//     color:"red",
//     type:"sedane"
// }
// let {color:cl,type:ty} = Vehicle
// console.log(cl)
// console.log(ty)


let info2 = {
    fullName:"chinmay deshpande",
    parent:{
        mother:"kanchan deshpande",
        father:"shirish deshpande"
    }
}

let {fullName,parent:{mother,father}} = info2
console.log(fullName)
console.log(mother)
console.log(father)
