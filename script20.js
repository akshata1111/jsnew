// let birthyear = [1989, 1990, 1991, 1992]
// let ages = []

// for(let i = 0; i < birthyear.lenghth ; i++){
//    console.log(i)
//    console.log(birthyear[i])
//    console.log( 2024 - birthyear[i])

//    let x = 2024 - birthyear[i]
//    ages.push(x)
// }
// console.log(ages)



// birthyear = [1989, 1990, 1991, 1992]
// let e2 = birthyear.map(function(el, index,arr){
//     console.log(el, index,arr)
//     return 2024 - el
// })
// console.log(e2)


// let numbers = [11,22,33,44,55,66,77,88,99]
// let e3 = numbers.map(function(el, index,arr){
//     return el + 1
// })
// console.log(e3)


let marks = [33,44,55,33,44,55,66,77,88]
let above50 =[]
   for(let i = 0; i < marks.lenghth; i++){
    console.log(i)
    console.log(marks[i])

    if (marks[i]> 50){
        console.log(marks[i])
        above50.push(marks[i])
    }
    
}
console.log(above50)





