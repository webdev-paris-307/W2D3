/**
 * Get an element with getElementById (the id you provide must match an element with that id in the HTML 😁)
 */
console.log(document.getElementById("main-title"))
const title = document.getElementById("main-title")
let intervalId
console.log(title.textContent)
setTimeout(() => {
	title.textContent = "Welcome to DOM world, html"

	intervalId = setInterval(() => {
		title.textContent = "-" + title.textContent
		title.textContent += "!"
	}, 500)
}, 2000)

const button = document.querySelector("button")
button.onclick = () => clearInterval(intervalId)
/**
 * Adding some text to the Title, the html tags are not parsed, they are read as text.
 */
const listOfStudents = document.querySelector(".student-list")
// listOfStudents.textContent += "<li>John</li>"
listOfStudents.innerHTML += `<li style="color: dodgerblue" onclick="alert('Hacking!')">John</li>`

const studentSection = document.querySelector("section")

const students = [
	{
		name: "bob",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repudiandae necessitatibus eveniet ut doloremque, voluptatibus modi officia provident quas facere temporibus amet autem voluptates a, dolorem ullam minima laboriosam dignissimos.",
	},
	{
		name: "bob",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repudiandae necessitatibus eveniet ut doloremque, voluptatibus modi officia provident quas facere temporibus amet autem voluptates a, dolorem ullam minima laboriosam dignissimos.",
	},
	{
		name: "bob",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repudiandae necessitatibus eveniet ut doloremque, voluptatibus modi officia provident quas facere temporibus amet autem voluptates a, dolorem ullam minima laboriosam dignissimos.",
	},
	{
		name: "bob",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repudiandae necessitatibus eveniet ut doloremque, voluptatibus modi officia provident quas facere temporibus amet autem voluptates a, dolorem ullam minima laboriosam dignissimos.",
	},
	{
		name: "bob",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repudiandae necessitatibus eveniet ut doloremque, voluptatibus modi officia provident quas facere temporibus amet autem voluptates a, dolorem ullam minima laboriosam dignissimos.",
	},
	{
		name: "bob",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repudiandae necessitatibus eveniet ut doloremque, voluptatibus modi officia provident quas facere temporibus amet autem voluptates a, dolorem ullam minima laboriosam dignissimos.",
	},
	{
		name: "bob",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repudiandae necessitatibus eveniet ut doloremque, voluptatibus modi officia provident quas facere temporibus amet autem voluptates a, dolorem ullam minima laboriosam dignissimos.",
	},
	{
		name: "bob",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repudiandae necessitatibus eveniet ut doloremque, voluptatibus modi officia provident quas facere temporibus amet autem voluptates a, dolorem ullam minima laboriosam dignissimos.",
	},
	{
		name: "bob",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repudiandae necessitatibus eveniet ut doloremque, voluptatibus modi officia provident quas facere temporibus amet autem voluptates a, dolorem ullam minima laboriosam dignissimos.",
	},
	{
		name: "bob",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repudiandae necessitatibus eveniet ut doloremque, voluptatibus modi officia provident quas facere temporibus amet autem voluptates a, dolorem ullam minima laboriosam dignissimos.",
	},
	{
		name: "bob",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repudiandae necessitatibus eveniet ut doloremque, voluptatibus modi officia provident quas facere temporibus amet autem voluptates a, dolorem ullam minima laboriosam dignissimos.",
	},
	{
		name: "bob",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repudiandae necessitatibus eveniet ut doloremque, voluptatibus modi officia provident quas facere temporibus amet autem voluptates a, dolorem ullam minima laboriosam dignissimos.",
	},
	{
		name: "bob",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repudiandae necessitatibus eveniet ut doloremque, voluptatibus modi officia provident quas facere temporibus amet autem voluptates a, dolorem ullam minima laboriosam dignissimos.",
	},
	{
		name: "bob",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repudiandae necessitatibus eveniet ut doloremque, voluptatibus modi officia provident quas facere temporibus amet autem voluptates a, dolorem ullam minima laboriosam dignissimos.",
	},
	{
		name: "bob",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repudiandae necessitatibus eveniet ut doloremque, voluptatibus modi officia provident quas facere temporibus amet autem voluptates a, dolorem ullam minima laboriosam dignissimos.",
	},
]

students.forEach((student) => {
	const card = document.createElement("div")
	card.classList.add("card")
	const title = document.createElement("h3")
	const paragraph = document.createElement("p")
	title.textContent = student.name
	paragraph.textContent = student.content
	card.append(title, paragraph)
	studentSection.append(card)
})
// for (let i = 0; i <= 10000; i++) {
// 	const newLi = document.createElement("li")
// 	newLi.textContent = i
// 	newLi.className = "student"
// 	listOfStudents.append(newLi)
// }

/**
 * Select all of the h3 in a .card class
 */

const allTheBobs = document.querySelectorAll(".card:nth-of-type(even) > h3")

allTheBobs.forEach((name) => {
	name.classList.add("special")
	// name.style.fontFamily = "Roboto"
	// name.style = `
	// text-transform: capitalize;
	// color: red
	// `
	// name.style.fontSize = "48px"
})

/**
 * Adding more HTML content!
 */

/**
 * Select all of the element with a class of `paragraph`, except the one that have an `important` class
 */

/**
 * Modifying the style of the element in a CSS-like way
 */

/**
 * Modifying the style of a specific property of the element
 */

/**
 * Set a custom attribute
 */

title.setAttribute("custom-attribute", "custom value")
title.setAttribute("custom-attribute", "red")
title.getAttribute("cutsom-attribute")

/**
 * Modify / Read / Create some data-* attributes
 */

const studentWithAttribute = document.querySelector(".student-with-attributes")
console.log(studentWithAttribute.dataset)
studentWithAttribute.dataset.id
studentWithAttribute.dataset.cardNumber
