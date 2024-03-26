
let akshata = {
    firstName:"AKS",
    lastName:"SS",
    age:27,
    rollNo:100
}

let saurabh = {
    firstName:"SAU",
    lastName:"SSA",
    age:31,
    rollNo:104
}



class Person {
    first_name = "AKS"
    last_name = "SS"
    age = 29
    rollNo = 101

    display_name(){
        console.log(this.first_name+this.last_name)
    }
}

let saurabhA = new Person()
let akshataA = new Person()


console.log(saurabhA.first_name)
console.log(saurabhA.last_name)
console.log(saurabhA.age)
console.log(saurabhA.rollNo)
console.log(saurabhA)
saurabhA.display_name()
console.log(akshataA)

saurabhA.first_name ="SAU"
saurabhA.last_name ="SSA"
saurabhA.age = 31
saurabhA.rollNo = 104
console.log(saurabhA)



class Person {
    constructor(fn,ln,age,rollNo){
        this.firstName = fn
        this.lastName = ln
        this.rollNo =rollNo 
        this.age = age

    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let saurabhC = new Person("SAUB","SSAB",45,85)
let akshataC = new Person("AKSD","SAUD",38,78)
akshataC.city = "ngp"
console.log(akshataC)







