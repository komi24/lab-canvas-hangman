
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
  this.drawLines();
}

HangmanCanvas.prototype.createBoard = function () {
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

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
