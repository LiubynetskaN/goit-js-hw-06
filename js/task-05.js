const inputEL = document.querySelector("#name-input")
const spanEl = document.querySelector("#name-output")

inputEL.addEventListener("input", inputHandler)

function inputHandler(event){
    if (event.currentTarget.value.trim()!== "") {
        return spanEl.textContent = event.target.value;
    }
    return spanEl.textContent = "Anonimous"
} 

