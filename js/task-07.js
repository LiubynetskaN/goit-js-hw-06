const inputEl = document.querySelector("#font-size-control")
const spanEl = document.querySelector("#text")

spanEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener("input", inputHandler)

function inputHandler (){
    spanEl.style.fontSize = `${inputEl.value}px`
    console.log(inputEl.value)
}
