var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")

init();

function init() {
	// mode buttons event listeners
	setUpModeButtons();
	setUpSquares();
	reset();
}		

function setUpModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			// ternary operator, same as if/else statement:
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setUpSquares() {
	for (var i = 0; i < colors.length; i++) {
	//add click listeners to squares
		squares[i].addEventListener("click", function() {
			// grab color of clicked square
			// compare color to pickedColor
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again"
			}

		}) 
	}
}

function reset() {
		// Generate all new colors
	colors = generateRandomColors(numSquares);
	// Pick a new random color from array
	pickedColor = pickColor();
	// Change color display to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

	// Change colors of the squares on the page
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color) {
	// loop through all squares
	// change each color to match given color
	for (var i= 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// Make an array
	var arr = [];
	// Repeat num times
	for (var i = 0; i < num; i++) {
		// Get random color and push into array
		arr.push(randomColor());
	}
	// Return that array
	return arr;
}

function randomColor(){
	// pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 to 255
	var b = Math.floor(Math.random() * 256);
	// "rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", "+ b + ")";
}