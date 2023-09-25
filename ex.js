let quote = document.querySelector("q");
let button = document.querySelector(".button");
let span = document.querySelector(".number");
let number = Math.floor(Math.random() * 11);

if(number === 0) {
	number = "1";
} 
button.addEventListener("click", () => {
	let number = Math.floor(Math.random() * 11);
	if(number === 0) {
		number = "1";
	}
	advice(number);
}); 
function advice(number) {
	fetch("./advices.json").then((res) => {
		return res.json();
	}).then((data) => {
		for(let i in data) {
			span.innerHTML = number;
			quote.innerHTML = data[number];
		}
	})
}
advice(number);