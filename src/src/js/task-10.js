const inputEl = document.querySelector("input")
inputEl.value = 'Lenochka'

const buttonCreateEl = document.querySelector("[data-create]")
const buttonDestroyEl = document.querySelector("[data-destroy]")
const divEl = document.querySelector("#boxes")

buttonCreateEl.addEventListener("click", createHandler)
buttonDestroyEl.addEventListener("click", destroyHandler)

function createHandler(event){
createBoxes(inputEl.value)
}

function createBoxes(value){
  const elements = []
  for (let i = 0; i < value; i ++) {
    const box = document.createElement('div');

    box.style.backgroundColor = getRandomHexColor();
    // let size = 30 + i * 10;
    box.style.width = `${30 + i * 10}px`
    box.style.height = `${30 + i * 10}px`

      elements.push(box);
    }
    return divEl.append(...elements)
}

function destroyHandler(event){
divEl.innerHTML = ""
inputEl.value = ''
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
