// let names = ["AA","BB","CC","DD"]

// let a1 = names[0]
// let a2 = names[1]
// let a3 = names[2]
// let a4 = names[3]

// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a4)



// names = ["ABC","DEF","GHU","JKL"]
// let [n1,n2,n3,n4] = names
// console.log(n1)
// console.log(n2)
// console.log(n3)
// console.log(n4)


// let fruits = ["Apple","Banana","Grapes"]
// // let [f1,,f2] = fruits
// // console.log(f1)
// // console.log(f2)

// let [f1,f2,f3] = fruits
// console.log(f1)
// console.log(f2)
// console.log(f3)


// let states = [["NGP","WRD"], ["JPR","UDP"],["BHP","IDR"]]

// let [[c11,c12],[c13,c14],[c15,c16]]  = states
// console.log(c11)
// console.log(c12)
// console.log(c13)
// console.log(c14)
// console.log(c15)


// let data = {
//     firstName:"Akshata",
//     lastName:"Sonkusale"
// }

// let {firstName,lastName} = data
// console.log(firstName)
// console.log(lastName)


// let Vehicle = {
//     type:"Car",
//     model:"SUV"
// }

// let {type:ty,model:md} = Vehicle
// console.log(ty)
// console.log(md)


// let data1 = {
//     fullName:"AS",
//     parent:{
//         mother:"TP",
//         father:"PP"
//     }
// }

// let {fullName:fn,parent:{mother:mr,father:fr}} = data1
// console.log(fn)
// console.log(mr)
// console.log(fr)


let Data2 = {
    fullName:"Purva Vyas",
    address:"ujjain",
    skills:["django","python"]
}
let {fullName:fn2, address:ad2, skills:[h1,h2]} = Data2
console.log(fn2)
console.log(ad2)
console.log(h1)
console.log(h2)




