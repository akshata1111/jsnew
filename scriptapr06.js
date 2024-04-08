// var firstName = "ABC"
// var lastName = "AAA"
// console.log(window.firstName)
// console.log(window.lastName)

// let Akshata = {
//         firsName:"Akshata",
//         lastName:"SS",
//         displayName:function(){
        
//             console.log(this.firsName + this.lastName) 
//             let displayName2 = function(){
              
//                 console.log(this.firsName + this.lastName) 
//             }
//             displayName2()
//         }
//     }
//     Akshata.displayName()


//     let Akshata = {
//     firsName:"Akshata",
//     lastName:"SS",
//     displayName:function(){

//         console.log(this.firsName + this.lastName) 
//         let displayName2 = () =>{
            
//             console.log(this.firsName + this.lastName) 
//         }
//         displayName2()
//     }
// }
// Akshata.displayName()


let  Akshata = {
    firsName:"Akshata",
    lastName:"SS",
    displayName:()=>{
 
        console.log(this.firsName + this.lastName) // 
        let displayName2 = () =>{
            
            console.log(this.firsName + this.lastName) // 
        }
        displayName2()
    }
}
Akshata.displayName()