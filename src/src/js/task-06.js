const inputEl = document.querySelector("#validation-input")
const dataLengthEl = inputEl.dataset.length

inputEl.addEventListener("blur", inputHandler)

function inputHandler(){
if (inputEl.value.length === +(dataLengthEl)){
  inputEl.classList.remove("invalid")
    return inputEl.classList.add("valid") 
}
return inputEl.classList.add("invalid")
}