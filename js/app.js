 // An empty array to hold the cards
let cardArray = [];

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

//The event listener that handles the logic for flipping the cards
	deck.addEventListener('click', event => {
		const clicked = event.target;
		if(clicked.classList.contains('card') && cardArray.length < 2 && !clicked.classList.contains('open', 'show')){
			flipCard(clicked);
			addCard(clicked);
			if(cardArray.length === 2){
				checkIfMatch();
				// shuffleDeck();
			}

		}
	});

	function flipCard(clicked){
		clicked.classList.toggle('open');
		clicked.classList.toggle('show');
	}

	function addCard(clicked){
		cardArray.push(clicked);
	}

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
			}, 2000);
			console.log('Not a match!');
		}
	}

	function shuffleDeck(){
			const selectCards =Array.from(document.querySelectorAll('.deck li'));
			const randomCards = shuffle(selectCards);
			console.log('shuffled cards', randomCards);
		}

		shuffleDeck();








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
