// 1.
const categoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesEl.length}`);

// 2.
categoriesEl.forEach((el) => {
    console.log(`Category: ${el.firstElementChild.textContent}`)
console.log(`Elements: ${el.lastElementChild.childElementCount}`)
})