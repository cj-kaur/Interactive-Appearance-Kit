let inputs = document.querySelectorAll("input");
console.log(inputs);
// let root = document.styleSheets[1]
let root = document.querySelector(":root");
console.log(root);
function _updateHandle() {
	let suffix = this.dataset.suffix || "";
	let value = this.value + suffix;
	// console.log(value);
	// console.log(`--${this.name}`)
	document.documentElement.style.setProperty(`--${this.name}`, value);
}

inputs.forEach((input) => input.addEventListener("change", _updateHandle));
inputs.forEach((input) => input.addEventListener("mousemove", _updateHandle));
