let addButton = document.querySelector("#one")
let inputT = document.querySelector('input')
let ulList = document.querySelector('ul')

addButton.addEventListener('click',function(){
    let text = inputT.value
    let newE = document.createElement('li') 
    newE.textContent = text 
    createButtons(newE)
    ulList.appendChild(newE)
    inputT.value = ""

})

{/* <button class = "remove">Remove</button>
<button class = "up">Up</button>
<button class = "down">Down</button> */}

function createButtons(li){

    let r = document.createElement("button") 
    r.textContent = "Remove" 
    r.classList.add("remove") 
    li.appendChild(r)

    let u = document.createElement("button") 
    u.textContent = "Up" 
    u.classList.add("up") 
    li.appendChild(u)

    let d = document.createElement("button") 
    d.textContent = "Down" 
    d.classList.add("down")
    li.appendChild(d)

}
