let students = [
    {
        firstName: "chinmay",
        lastName: "deshpande",
        age: 11,
        skills: ["python", "js", "django"],
        city: "pune"
    },
    {
        firstName: "sarika",
        lastName: "pansare",
        age: 23,
        skills: ["python", "js", "cypress"],
        city: "mumbai"
    },
    {
        firstName: "amol",
        lastName: "rao",
        age: 25,
        skills: ["python", "html", "cypress"],
        city: "nagpur"
        
    },
    {
        firstName: "mayuri",
        lastName: "rao",
        age: 35,
        skills: ["testing", "html", "cypress"],
        city: "pune"
    }

]


// for(let i = 0 ; i < students.length ; i++){
//     console.log(students[i].firstName)
// }


// students.forEach(function(el){
//     console.log(el.firstName)
//     console.log(el['firstName'])
// })



// for(let i = 0 ; i < students.length ; i++){
//     if(students[i].city == "pune"){
//         console.log(students[i].firstName)
//     }
// }


// students.forEach(function(el){
//     if(el.city == "pune"){
//         console.log(el.firstName)
//     }
// })




// let r1 = students.filter(function(el){
//     return el.city == "pune"
// })
// console.log(r1)
// r1.forEach(function(el){
//     console.log(el.firstName)
// })


// students.filter(function(el){
//     return el.city == "pune"
// }).forEach(function(el){
//     console.log(el.firstName)
// })



// students.forEach(function(el){
//     if(el.city == "pune" &&  el.age > 30){
//         console.log(el.firstName)    
//     }
// })


// students.forEach(function(el){
//     el.skills.push("css")
// })

// let r2 = students.map(function(el){
//     el.skills.push("html5")
//     return el
// })
// console.log(r2)


// students.forEach(function(el){
//     console.log(el.firstName + ":"+el.skills.length)
// })


// let total = 0
// for(let i = 0 ; i < students.length ; i++){
//     total = total + students[i].age
// }
// console.log(total/students.length)



let q2 = students.reduce(function(acc,el){
    return acc  + el.age
},0)
console.log(q2/students.length)

