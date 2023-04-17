const spanEl = document.querySelector(".color")
const buttonEl = document.querySelector(".change-color")

buttonEl.addEventListener("click", colorChangeHandler)

function colorChangeHandler(event){
  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const hexColor = getRandomHexColor()

document.body.style.backgroundColor = hexColor
spanEl.textContent = hexColor
}






