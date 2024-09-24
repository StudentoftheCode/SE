const listA = document.getElementById("meals")
const listB = document.getElementById("intake")
const button = document.getElementById("button")
let count = 0
// const h2 = document.querySelector("h2");

button.addEventListener("click", function () {
  console.log("working")
  const foods = document.getElementById("food").value
  const calorie = Number(document.getElementById("calories").value)

  if (foods !== "") {
    const newItemA = document.createElement("li")
    newItemA.textContent = foods
    listA.appendChild(newItemA)
    food.value = ""
  }
  if (calorie !== "") {
    const newItemB = document.createElement("li")
    newItemB.textContent = calorie
    listB.appendChild(newItemB)
    calories.value = ""
    count+=calorie
    document.querySelector('h3').textContent = 'Calories: ' + count
  }
})