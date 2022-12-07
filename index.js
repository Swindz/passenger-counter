let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let makezeroEl = document.getElementById("makezero-btn")

let count = 0

function increment() {
    
    count += 1 
    
    countEl.innerText = count
}

function save() {
    
    let both = count + " - "
    saveEl.textContent += both
}

function makezero() {

    countEl.innerText = 0
    count = 0
}