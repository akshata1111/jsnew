let akshata = {
    firstName:"akshata",
    lastName:"sonkusale",
    age:27,
    rollNo:100
}
let saurabh = {
    firstName:"saurabh",
    lastName:"sonkusale",
    age:31,
    rollNo:104
}

class Person {
    first_name = "akshata"
    last_name = "sonkusale"
    age = 56
    rollNo = 101
    display_name(){
        console.log(this.first_name+this.last_name)
    }
}
let akshataA = new Person()
let saurabhA = new Person()

console.log(saurabhA.first_name)
console.log(saurabhA.last_name)
console.log(saurabhA.age)
console.log(saurabhA.rollNo)
console.log(saurabhA)
saurabhA.display_name()
console.log(akshataA)




let saurabhC = new Person("saurabhC","sonkusaleC",31,104)
let akshataC = new Person("akshataC","sonkusaleC",27,100)
akshataC.city = "ngp"
console.log(akshataC)

// class Person {
//     constructor(fn,ln,age,rollNo){
//         this.firstName = fn
//         this.lastName = ln
//         this.rollNo =rollNo 
//         this.age = age

//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

let saurabhR = new Person("saurabhR","sonkusaleR",31,104)
let akshataR = new Person("akshataR","sonkusaleR",27,100)
akshataC.city = "ngp"
console.log(akshataR)


// Es6 class with constuctor
// class Person {
//     constructor(fn,ln,age,rollNo){
//         this.firstName = fn
//         this.lastName = ln
//         this.rollNo =rollNo 
//         this.age = age

//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }