var numSquares = 6;
var colours = [];
var pickedColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.querySelector("#colourDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

resetButton.addEventListener("click", reset);

function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function(){
		var clickedColour = this.style.backgroundColor;
		if (clickedColour === pickedColour) {
			messageDisplay.textContent = "Correct"
			resetButton.textContent = "Play Again?"
			changeColours(clickedColour);
			h1.style.backgroundColor = clickedColour;
		}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"
		}
	});
	}
}

function setupModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}	
}

function reset(){
	colours = generateColours(numSquares);
	pickedColour = pickRandom();
	colourDisplay.textContent = pickedColour;
	resetButton.textContent = "New colours"
	messageDisplay.textContent = "";
	updateSquares();
	h1.style.backgroundColor = "steelblue";
}

function updateSquares(){
	for (var i = 0; i < squares.length; i++) {
		if (colours[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colours[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
}

function changeColours(colour){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colour;
	}
}

function pickRandom(){
	var random = Math.floor(Math.random() * colours.length);
	return colours[random];
}

function generateColours(num){
	var arr =[];
	for (var i = 0; i < num; i++) {
		arr.push(randomColour());
	}
	return arr;
}

function randomColour(){
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
