
const buttonPlus = document.querySelector('[data-action="increment"]')
const buttonMinus = document.querySelector('[data-action="decrement"]')
const spanEl = document.querySelector("#value")

let textSpan = 0

buttonPlus.addEventListener("click", ()=>{
    textSpan ++;
    spanEl.textContent = textSpan;
})

buttonMinus.addEventListener("click", () =>{
    textSpan --;
    spanEl.textContent = textSpan;
})