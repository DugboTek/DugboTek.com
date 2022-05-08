
document.addEventListener("DOMContentLoaded", ()=> {
	createSquares();
	registerKeyboardEvents();

	let guessedWords = [[]];
	let availableSpace = 1;
	const WORD_LENGTH = 5;

	let row = 0;

	let word = "dugbo"

	const keys = document.querySelectorAll(".keyboard-row button");
	let availableSpaceEl = document.getElementById(String(availableSpace))


	function getCurrentWordArr(){
		const numberOfGuessedWords = guessedWords.length;
		return guessedWords[numberOfGuessedWords-1];
	}

	function updateGuessedWords(letter, direction){
		const currentWordArr = getCurrentWordArr();
		if(direction === "add"){
			if(currentWordArr && currentWordArr.length<WORD_LENGTH){
				currentWordArr.push(letter);
				availableSpaceEl = document.getElementById(String(availableSpace))
				
				availableSpace = availableSpace+1;
	
				availableSpaceEl.textContent= letter;
			}
		}
		else if(direction === "sub"){
			if(currentWordArr && currentWordArr.length>0){
				currentWordArr.pop();
				availableSpace = availableSpace-1;
				availableSpaceEl = document.getElementById(String(availableSpace))
				availableSpaceEl.textContent= "";
			}
		}
		
	}

	function createSquares(){
		const gameBoard = document.getElementById("board");

		for(let index = 0; index < 30; index++){
			const element = new Array(index);
			let square = document.createElement("div");
			square.classList.add("square");
			square.setAttribute("id",index +1);
			gameBoard.appendChild(square);
		}
	}

	function submitWord(){
		const currentWordArr = getCurrentWordArr();
		let rowOffset = 5*row;
		if(currentWordArr.length !==5){
			window.alert("word must be " + WORD_LENGTH + " lettters")
			return;
		}

		const currentWord = currentWordArr.join('')

		for (let i = 0; i < currentWordArr.length; i++) {
			let letter = currentWordArr[i];
			if(word.includes(letter)){
				if(word.substring(i,i+1)===letter){
					var greenWord = document.getElementById(String(i+1+rowOffset))
					greenWord.style.backgroundColor = "green";

					var greenLetter = document.querySelector('[data-key="'+letter+'"]')
					greenLetter.style.backgroundColor ="green";
				}
				else{
					var yellowWord = document.getElementById(String(i+1+rowOffset))
					yellowWord.style.backgroundColor = "#e9c601";

					var yellowLetter = document.querySelector('[data-key="'+letter+'"]')
					yellowLetter.style.backgroundColor ="#e9c601";
				}			
			}
			else{
				var grayWord = document.getElementById(String(i+1+rowOffset))
				grayWord.style.backgroundColor = "gray";
				
				var grayLetter = document.querySelector('[data-key="'+letter+'"]')
				grayLetter.style.backgroundColor ="gray";
			}
			
		}
		//checks word
		if(currentWord === word)
		{
			window.alert("congrats u won bruh")
		}

		if (guessedWords.length === 6) {
			window.alert("Sorry, you have no more guess the word is "+ word)
			
		}
		guessedWords.push([]);
		row++;
	}


	function isLetter(key){
		return key.length === 1 && key.match(/[a-z]/i);
	}

	for (let i = 0; i < keys.length; i++) {
		keys[i].onclick = ({target})=>{
			const letter = target.getAttribute('data-key');
			if (letter === 'enter') {
				submitWord()
			}
			else if(letter == 'del'){
				updateGuessedWords(letter,"sub")
			}
			else{
				updateGuessedWords(letter,"add");
			}
		}
	}

	function registerKeyboardEvents(){
		document.body.onkeydown = (e)=>{
			const pressedKey = String(e.key);
			if(pressedKey === 'Enter'){
				submitWord();
			}
			if(pressedKey ==='Backspace'){
				updateGuessedWords(pressedKey,"sub")
			}
			if(isLetter(pressedKey)){
				updateGuessedWords(pressedKey,"add")
			}
	
		}
	}

})


