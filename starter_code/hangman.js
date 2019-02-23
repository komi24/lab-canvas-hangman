var hangman;

function Hangman() {
  this.words      = ['IRONHACK', 'NODEJS', 'JAVASCRIPT', 'METEOR', 'ANGULAR', 'BARCELONA', 'MADRID', 'MIAMI', 'HTML'];
  this.secretWord = '';
  this.letters    = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
  this.secretWord = this.getWord();

  // Création du canvas
  this.hangmanCanvas = new HangmanCanvas(this.secretWord);
  this.hangmanCanvas.createBoard()
}

Hangman.prototype.getWord = function () {
  var random = Math.floor(Math.random() * this.words.length);
  return this.words[random];
};


Hangman.prototype.checkIfLetter = function (keyCode) {
	return keyCode >= 65 && keyCode <= 90;
};

Hangman.prototype.checkClickedLetters = function (key) {
	return !this.letters.includes(key.toUpperCase());
};

Hangman.prototype.addCorrectLetter = function (i) {
	this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
	this.errorsLeft --;
};

Hangman.prototype.checkGameOver = function () {
	return this.errorsLeft <= 0;
};

Hangman.prototype.checkWinner = function () {
	return this.secretWord.split('').sort().join('') === this.guessedLetter.split('').sort().join('')
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
