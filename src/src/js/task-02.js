const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// 1.
const ingredientsEl = document.querySelector("#ingredients");

const items = ingredients.map(ingredient => {
  const element = document.createElement("li")
  element.textContent = ingredient
  
  element.classList.add("item")
  console.log(element)
  
  return element
})

ingredientsEl.append(...items)
console.log(ingredientsEl)
