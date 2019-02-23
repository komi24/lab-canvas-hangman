
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.arc(150,100,100,0,2*Math.PI);
ctx.fill();
var x = 150;

function shiftX(x) {
  return (x+1)%250;
}
function clear() {
	ctx.clearRect(0,0,2500,2500);
}
function updateCanvas(){
  x = x + 1;
  clear();
  ctx.beginPath();
  ctx.arc(x,100,100,0,2*Math.PI);
  ctx.fill();
  ctx.closePath();
}

setInterval(updateCanvas, 100)

function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
  this.drawLines();
}

HangmanCanvas.prototype.createBoard = function () {
	this.ctx.clearRect(0,0,1200,800)
	this.ctx.fillText("Bonjour", 20, 20)
};

HangmanCanvas.prototype.drawLines = function () {
	// On dessine des lignes à partir de la coordonnée
	// (600, 600). On en dessine autant qu'il y a de 
	// lettres dans secretWord
	var lineWidth = 40;
	this.ctx.beginPath();
	for (var i = 0; i < this.secretWord.length; i++) {
		this.ctx.moveTo(200 + 2*lineWidth*i, 600);
		this.ctx.lineTo(
			200 + 2*lineWidth*i + lineWidth, 
			600);
		this.ctx.stroke();
	}
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
	var letter = this.secretWord[index];

	var lineWidth = 40;
	this.ctx.beginPath();
	this.ctx.font = "40px Arial";
	this.ctx.fillStyle = "red";
	this.ctx.fillText(letter,205 + 2*lineWidth*index, 580)
	this.ctx.stroke();

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
	var lineWidth = 40;
	this.ctx.beginPath();
	this.ctx.font = "40px Arial";
	this.ctx.fillText(letter,205 + 2*lineWidth*errorsLeft, 200)
	this.ctx.stroke();
};

HangmanCanvas.prototype.drawHangman = function (shape) {
	switch (shape) {
		case 9:
			this.ctx.beginPath()
			this.ctx.moveTo(50, 600)
			this.ctx.lineTo(150, 600)
			this.ctx.lineTo(100, 500)
			this.ctx.lineTo(50, 600)
			this.ctx.stroke()
		break;
		case 8:
			this.ctx.beginPath()
			this.ctx.moveTo(100, 500)
			this.ctx.lineTo(100, 200)
			this.ctx.stroke()		
		break;
		case 7:
			this.ctx.beginPath()
			this.ctx.moveTo(100, 200)
			this.ctx.lineTo(400, 200)
			this.ctx.lineTo(400, 250)
			this.ctx.stroke()		
		break;
		case 6:
			this.ctx.beginPath()
			this.ctx.moveTo(450, 300)
			this.ctx.arc(400, 300, 50, 0, 2 * Math.PI, true)
			this.ctx.stroke()		
		break;
		case 5:
			this.ctx.beginPath()
			this.ctx.moveTo(400, 350)
			this.ctx.lineTo(400, 400)
			this.ctx.stroke()		
		break;
		case 4:
			this.ctx.beginPath()
			this.ctx.moveTo(400, 400)
			this.ctx.lineTo(350, 450)
			this.ctx.stroke()		
		break;
		case 3:
			this.ctx.beginPath()
			this.ctx.moveTo(400, 400)
			this.ctx.lineTo(450, 450)
			this.ctx.stroke()		
		break;
		case 2:
			this.ctx.beginPath()
			this.ctx.moveTo(400, 350)
			this.ctx.lineTo(350, 350)
			this.ctx.stroke()		
		break;
		case 1:
			this.ctx.beginPath()
			this.ctx.moveTo(400, 350)
			this.ctx.lineTo(450, 350)
			this.ctx.stroke()		
		break;
	}
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
