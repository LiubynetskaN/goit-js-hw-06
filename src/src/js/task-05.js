const inputEL = document.querySelector("#name-input")
const spanEl = document.querySelector("#name-output")

inputEL.addEventListener("input", inputHandler)

function inputHandler(event){
    if (event.target.value === "") {
        return spanEl.textContent = "Anonymous"
    }
    return spanEl.textContent = event.target.value
} 

