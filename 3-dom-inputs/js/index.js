const list = document.querySelector("#grocery-list")
const button = document.querySelector("button")
const inputElement = document.querySelector("#item")
const quantityElement = document.querySelector("#quantity")
const title = document.querySelector("h1")

button.addEventListener("click", () => {
	console.log(inputElement)
	if (
		inputElement.value === "" ||
		quantityElement.value === "" ||
		quantityElement.value === "0"
	) {
		alert("Wrong inputs")
		return
	}
	const li = document.createElement("li")
	li.textContent = `${inputElement.value}: ${quantityElement.value}`
	list.append(li)
	li.addEventListener("click", () => {
		li.remove()
	})
	inputElement.value = ""
})

button.addEventListener("click", () => console.log("Cool sherlock"))

// button.onclick = () => {
// 	console.log(1)
// }

// button.onclick = () => {
// 	console.log(2)
// }

inputElement.addEventListener("input", (event) => {
	console.log(event.target)
	console.log(event.target.value)
	title.textContent = event.target.value
})
