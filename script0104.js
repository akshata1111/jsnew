let akshata = {
    firstName:"akshata",
    lastName:"SS",
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


let akshata1 = new Person("akshata2","SS2")
let saurabh = new Person("saurabh2","SON")
console.log(akshata)
console.log(saurabh)


console.log(akshata.__proto__ === Person.prototype)
console.log(saurabh.__proto__ === Person.prototype)
Person.prototype.displayName = function(){
    console.log(this.firstName + this.lastName)
    }
Person.prototype.city = "pune"
