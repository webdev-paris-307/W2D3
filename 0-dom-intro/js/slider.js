const slider = "Hey this is a slider."
export const exported = 5
export default slider

export function randomColor() {
	return `hsl: ${getRandomNumber(361)}, 80%, 70%`
}

function getRandomNumber(num) {
	return Math.floor(Math.random() * 361)
}
