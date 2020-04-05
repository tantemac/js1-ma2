// question 1
const myFunctionExpression = function() {
	console.log("Hege Bjørkedal");
};

// question 2
const button = document.querySelector(".btn");

function callAfterButtonClick() {
	console.log("I was clicked");
}

button.addEventListener("click", callAfterButtonClick);

// question 3
const firstName = document.querySelector("#firstName");

function callAfterAKeyIsPressed(event) {
	console.dir(event.keyDown);
}

firstName.addEventListener("keydown", callAfterAKeyIsPressed);

// question 4
const button = document.querySelector("button");

function callOnHover() {
	button.classList.add("hover");
}
button.addEventListener("mouseover", callOnHover);

// question 5
const button = document.querySelector("[data-animal='dog']");

function callOnHover() {
	button.classList.remove("hover");
}

button.addEventListener("mouseout", callOnHover);

// question 6
const listItems = document.querySelectorAll("li");

function logDataAttribute() {
	console.log(event.target.dataset.animal);
}

for (let i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener("mouseover", logDataAttribute);
}

// question 7
const animal = "cow";

switch (animal) {
	case "cat":
		console.log("Meow");
		break;
	case "cow":
		console.log("Moo");
		break;
	case "bird":
		console.log("Tweet");
		break;
	default:
		console.log("Harrumph");
}

// question 8
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheeps) {
	console.log(sheeps);
});

// question 9
function logWordEveryHalfSecond() {
	console.log("Hello");

	if (counter === 5) {
		clearInterval(intervalId);
	}
	counter++;
}
let counter = 0;
const intervalId = setInterval(logWordEveryHalfSecond, 500);

// question 10
const counterContainer = document.querySelector(".container");

function updateDiv() {
	counterContainer.innerText = "";

	setTimeout(function() {
		counterContainer.innerText = "Text updated after waiting 2 seconds";
	}, 2000);
}

updateDiv();
