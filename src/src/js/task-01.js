// 1.
const categoriesEl = document.querySelectorAll(".item");
console.log(`categories: ${categoriesEl.length}`);

// 2.
categoriesEl.forEach(categore => {
    console.log(categore.querySelector("h2").textContent)
console.log(categore.querySelectorAll("li").length)
})
