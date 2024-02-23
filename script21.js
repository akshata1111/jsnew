// let birthYear = [1989,1990,1991,1992]
// let q1 = birthYear.map(function(el,index,arr){
//   return 2024 - el
// })
// console.log(q1)



// let numbers = [11,22,33,44,55]
// let q2 = numbers.map(function(el){
//     return el + 10
// })
// console.log(q2)


// let marks  = [89,22,33,4,55,66]
// let q3 = marks.filter(function(el,index,arr){
//  return el > 50 && el < 89
// })
// console.log(q3)


// let numbersA = [11,22,33]
// let q4 = numbersA.reduce(function(acc,el,index,arr){
//     return el + acc 
// },0)
// console.log(q4)


// let cities = ["pune","mumbai","bng","kolkata","chennai"]
// let q5  = cities.forEach(function(el,index,arr){
//     console.log("welcome " + el)
// })
// console.log(q5)



// let numberB = [22,33,44,40,33]
// let q6 = numberB.filter(function(el,index,arr){
//   return el > 40
// })
// console.log(q6)

// let q7 = numberB.find(function(el,index,arr){
//  return el > 40
// })
// console.log(q7)


// let q8 = numberB.findIndex(function(el,index,arr){
//  return el > 40
// })
// console.log(q8)

// let numbersV = [11,2,33,11,22,33,44,55,66]
// let q9 = numbersV.every(function(el,index,arr){
//     return el > 10
// })
// console.log(q9)


// numbersV = [11,2,33,11,22,33,44,55,66]
// let q10  = numbersV.some(function(el,index,arr){
//     return el > 500
// })
// console.log(q10)


let nums = [111,222,333,444,555,666,777,888,999]

console.log(nums.slice(3))
console.log(nums.slice(3,6))
console.log(nums.slice(-9,6))
console.log(nums.slice(-3))
console.log(nums.slice(-1,-2))