var numColors = 6
var colors = generateRandomColors(numColors);

var squares  = document.querySelectorAll(".square");
var guessColor = document.querySelector("#guesscolor");
var message = document.querySelector("#msg");
var pickedColor = pickColor();
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#new")
var modeButtons = document.querySelectorAll(".mode")

guessColor.textContent = pickedColor

for(var i = 0; i < modeButtons.length; i++){

	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("active")
		modeButtons[1].classList.remove("active")
		this.classList.add("active")
		this.textContent === "EASY"  ? numColors = 3: numColors = 6;
		reset();

	})
}


resetButton.addEventListener("click", function(){
	reset();
})


for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor; 

		if(clickedColor === pickedColor){
			changeColor(clickedColor);
			h1.style.backgroundColor = pickedColor;
			message.textContent = "Correct!!"
			resetButton.textContent = "PLAY AGAIN"
		}
		else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again";
		}

	});
}

function reset(){
	colors = generateRandomColors(numColors);
	pickedColor = pickColor();
	guessColor.textContent = pickedColor 
	resetButton.textContent = "NEW COLORS"
	message.textContent = ""
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){	
		squares[i].style.display = "block"
		squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none"
		}
	}
	h1.style.backgroundColor = "steelblue"
}

function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []
	for(var i = 0 ; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	// return "rgb(" + r + ", " + g + ", " + b + ")";
	return `rgb(${r}, ${g}, ${b})`
}