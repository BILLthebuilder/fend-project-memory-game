 // An empty array to hold the cards
let cardArray = [];
let move = 0;

//A variable that holds the current state of the clock
let clockOff = true;

// A variable to hold the incremented value of time elapsed
let time = 0;



// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const deck = document.querySelector('.deck');

//The event listener that handles all the relevant click events and the logic for flipping the cards
	deck.addEventListener('click', event => {
		const clicked = event.target;
		if(clicked.classList.contains('card') && cardArray.length < 2 && !clicked.classList.contains('open', 'show')){
			flipCard(clicked);
			addCard(clicked);

			if(clockOff){
					startClock();
					clockOff = false;
			}

			if(cardArray.length === 2){
				checkIfMatch();
				addMoves();
				gameRating();
			}

		}
	});

	//function that flips the cards
	function flipCard(clicked){
		clicked.classList.toggle('open');
		clicked.classList.toggle('show');
	}

	//Function that adds the event listener to the array that holds the cards
	function addCard(clicked){
		cardArray.push(clicked);
	}

	//Function that checks if the selected(flipped) cards are a match
	function checkIfMatch() {
		if(cardArray[0].firstElementChild.className === cardArray[1].firstElementChild.className){
			cardArray[0].classList.toggle('match');
			cardArray[1].classList.toggle('match');
		}
		else{
			setTimeout(unFlip =>{
				cardArray[0].classList.remove('open', 'show');
				cardArray[1].classList.remove('open', 'show');
				cardArray = [];
			}, 1000);
			// console.log('Not a match!');
		}
	}

	//Function that shuffles the cards while converting them into an array so that the DOM can be manipulated
	function shuffleDeck(){
			const selectCards =Array.from(document.querySelectorAll('.deck li'));
			const randomCards = shuffle(selectCards);
			console.log('shuffled cards', randomCards);

			for (card of randomCards){
				deck.appendChild(card);
			}
		}

		shuffleDeck();

	function addMoves(){
		move ++;
		const increaseMoves = document.querySelector('.moves')
		increaseMoves.innerHTML = move;
	}

	//Function that determines the rating according to the number of moves made
	function gameRating(){
		if(move >= 16 && move > 1000){
			lowerTheRating();
		// else{
		// 	// improveRating();
		// }

		}

	}

	//Function that lowers the number of stars for the rating
	function lowerTheRating(){
		const starList = document.querySelectorAll('.stars li');
		for(star of starList){
			if(star.style.display !== 'none'){
				star.style.display = 'none';
				break;
			}

		}
	}
	lowerTheRating();
	// lowerTheRating();


	function startClock(){
		let clockId = setInterval(()=>{
			time++;
			displayTime();
			console.log('timer is moving!');
		},1000);
	}

	function displayTime(){
		const selectClock = document.querySelector('.clock');

		let minutes = Math.floor(time / 60);
		let seconds = time % 60;
		// let hours = Math.floor(minutes / 60);


		// selectClock.innerHTML = `${hours}:${minutes}:${seconds}`;
		if (seconds < 10) {
         	selectClock.innerHTML = `${minutes}:0${seconds}`;
     	}
     	else if(minutes < 10){
     		selectClock.innerHTML = `0${minutes}:${seconds}`;
     	}
	     else {
	         selectClock.innerHTML = `${minutes}:${seconds}`;
	     }
	}






/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
