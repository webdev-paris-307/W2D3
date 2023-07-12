const allArticles = document.querySelectorAll("article")
const sectionElement = document.querySelector("section.container")
const buttonElement = document.querySelector("#my-button")
const resetButton = document.getElementById("reset-all")
// const allCircles = document.querySelectorAll(".circle")
// Adding an event listener is about having element.addEventListener
buttonElement.addEventListener("click", (event) => {
	console.log(event)
	const circlesAmount = document.querySelectorAll(".circle").length
	const circle = document.createElement("div")
	circle.textContent = circlesAmount
	circle.classList.add("circle")
	circle.style.background = getRandomColor()
	sectionElement.append(circle)
	circle.addEventListener("mouseenter", () => {
		circle.style.background = getRandomColor()
	})

	circle.addEventListener("click", () => {
		circle.remove()
	})

	// console.log(allCircles)
})

resetButton.addEventListener("click", removeCircles)
function removeCircles(event) {
	sectionElement.innerHTML = ""
}

allArticles.forEach((article) => {
	article.style.background = getRandomColor()
})

function getRandomColor() {
	return `hsl(${Math.random() * 360}, 80%, 60%)`
}

/**
 * Select all the element you will need at the beginning of the file, remember to select the elements!
 * Not their value / textContent...
 */

/**
 * Different ways of adding event listeners and passing parameters...
 */

/**
 * Let's add circles. Or squares ? Or Triangles ?
 */
