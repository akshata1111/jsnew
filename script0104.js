let akshata = {
    firstName:"akshata",
    lastName:"SS",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}

let saurabh = {
    firstName:"saurabh",
    lastName:"SON",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}

console.log(akshata.firstName)
console.log(akshata.lastName)
akshata.displayName()

function Person(fn,ln){
        this.firstName = fn 
        this.lastName = ln
        this.displayName = function(){
            console.log(this.firstName + this.lastName)
        }
    }

let akshata1 = new Person("akshata2","SS2")
let saurabh1 = new Person("saurabh2","SON")
console.log(akshata)
console.log(saurabh)


console.log(akshata.__proto__ === Person.prototype)
console.log(saurabh.__proto__ === Person.prototype)
Person.prototype.displayName = function(){
    console.log(this.firstName + this.lastName)
    }
Person.prototype.city = "pune"
akshata.displayName()
saurabh.displayName()


console.log(akshata instanceof Person)
console.log(saurabh instanceof Person)

console.log(akshata.hasOwnProperty('firstName'))
console.log(akshata.hasOwnProperty('lastName'))
console.log(akshata.city)
console.log(saurabh.city)

let names = ["saurabh","john"]
console.log(names)
console.log(names.__proto__ === Array.prototype)
names.pop()

// Es6 class 

// class Person {
//     country = "india"
//     constructor(fn,ln){
//         this.firstName = fn 
//         this.lastName = ln
//         this.displayName = function(){
//             console.log(this.firstName + this.lastName)
//         }
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

let John = new Person("John","Smith")
let Elis = new Person("Elis","Wok")
console.log(John)
console.log(Elis)
John.displayName()
Elis.displayName()

// // Object.create()
// let info = {
//     init:function(fn,ln){
//         this.firstName = fn 
//         this.lastName = ln
//     },
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

let ElisE = Object.create(info)
console.log(ElisE)
ElisE.init("Elis","Wok")
ElisE.displayName()
