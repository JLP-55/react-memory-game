import { useState, useEffect } from 'react';
import SingleCard from "../components/SingleCard.jsx";
import '../App.css';
// import "./assets"

// imports image assets
const deck = [
	// if choiceOne = deck.src && choiceTwo = deck.matchId ... Match!
	{"src": "/img/ace_of_spades.png", "matchId": "/img/ace_of_clubs.png"},
	{"src": "/img/ace_of_clubs.png", "matchId": "/img/ace_of_spades.png"},
	{"src": "/img/ace_of_hearts.png", "matchId": "/img/ace_of_diamonds.png"},
	{"src": "/img/ace_of_diamonds.png", "matchId": "/img/ace_of_hearts.png"},
	{"src": "/img/2_of_spades.png", "matchId": "/img/2_of_clubs.png"},
	{"src": "/img/2_of_clubs.png", "matchId": "/img/2_of_spades.png"},
	{"src": "/img/2_of_hearts.png", "matchId": "/img/2_of_diamonds.png"},
	{"src": "/img/2_of_diamonds.png", "matchId": "/img/2_of_hearts.png"},
	{"src": "/img/3_of_spades.png", "matchId": "/img/3_of_clubs.png"},
	{"src": "/img/3_of_clubs.png", "matchId": "/img/3_of_spades.png"},
	{"src": "/img/3_of_hearts.png", "matchId": "/img/3_of_diamonds.png"},
	{"src": "/img/3_of_diamonds.png", "matchId": "/img/3_of_hearts.png"},
	{"src": "/img/4_of_spades.png", "matchId": "/img/4_of_clubs.png"},
	{"src": "/img/4_of_clubs.png", "matchId": "/img/4_of_spades.png"},
	{"src": "/img/4_of_hearts.png", "matchId": "/img/4_of_diamonds.png"},
	{"src": "/img/4_of_diamonds.png", "matchId": "/img/4_of_hearts.png"},
	{"src": "/img/5_of_spades.png", "matchId": "/img/5_of_clubs.png"},
	{"src": "/img/5_of_clubs.png", "matchId": "/img/5_of_spades.png"},
	{"src": "/img/5_of_hearts.png", "matchId": "/img/5_of_diamonds.png"},
	{"src": "/img/5_of_diamonds.png", "matchId": "/img/5_of_hearts.png"},
	{"src": "/img/6_of_spades.png", "matchId": "/img/6_of_clubs.png"},
	{"src": "/img/6_of_clubs.png", "matchId": "/img/6_of_spades.png"},
	{"src": "/img/6_of_hearts.png", "matchId": "/img/6_of_diamonds.png"},
	{"src": "/img/6_of_diamonds.png", "matchId": "/img/6_of_hearts.png"},
	{"src": "/img/7_of_spades.png", "matchId": "/img/7_of_clubs.png"},
	{"src": "/img/7_of_clubs.png", "matchId": "/img/7_of_spades.png"},
	{"src": "/img/7_of_hearts.png", "matchId": "/img/7_of_diamonds.png"},
	{"src": "/img/7_of_diamonds.png", "matchId": "/img/7_of_hearts.png"},
	{"src": "/img/8_of_spades.png", "matchId": "/img/8_of_clubs.png"},
	{"src": "/img/8_of_clubs.png", "matchId": "/img/8_of_spades.png"},
	{"src": "/img/8_of_hearts.png", "matchId": "/img/8_of_diamonds.png"},
	{"src": "/img/8_of_diamonds.png", "matchId": "/img/8_of_hearts.png"},
	{"src": "/img/9_of_spades.png", "matchId": "/img/9_of_clubs.png"},
	{"src": "/img/9_of_clubs.png", "matchId": "/img/9_of_spades.png"},
	{"src": "/img/9_of_hearts.png", "matchId": "/img/9_of_diamonds.png"},
	{"src": "/img/9_of_diamonds.png", "matchId": "/img/9_of_hearts.png"},
	{"src": "/img/10_of_spades.png", "matchId": "/img/10_of_clubs.png"},
	{"src": "/img/10_of_clubs.png", "matchId": "/img/10_of_spades.png"},
	{"src": "/img/10_of_hearts.png", "matchId": "/img/10_of_diamonds.png"},
	{"src": "/img/10_of_diamonds.png", "matchId": "/img/10_of_hearts.png"},
	{"src": "/img/jack_of_spades.png", "matchId": "/img/jack_of_clubs.png"},
	{"src": "/img/jack_of_clubs.png", "matchId": "/img/jack_of_spades.png"},
	{"src": "/img/jack_of_hearts.png", "matchId": "/img/jack_of_diamonds.png"},
	{"src": "/img/jack_of_diamonds.png", "matchId": "/img/jack_of_hearts.png"},
	{"src": "/img/queen_of_spades.png", "matchId": "/img/queen_of_clubs.png"},
	{"src": "/img/queen_of_clubs.png", "matchId": "/img/queen_of_spades.png"},
	{"src": "/img/queen_of_hearts.png", "matchId": "/img/queen_of_diamonds.png"},
	{"src": "/img/queen_of_diamonds.png", "matchId": "/img/queen_of_hearts.png"},
	{"src": "/img/king_of_spades.png", "matchId": "/img/king_of_clubs.png"},
	{"src": "/img/king_of_clubs.png", "matchId": "/img/king_of_spades.png"},
	{"src": "/img/king_of_hearts.png", "matchId": "/img/king_of_diamonds.png"},
	{"src": "/img/king_of_diamonds.png", "matchId": "/img/king_of_hearts.png"},
]

// for (let i = 0; i < 52; i++) {
// 	console.log(deck[i]["src"]);
// 	console.log(deckTwo[i]["src"]);
// };

function Game() {
	// useState sets initial value
	// useState for rendering the card images
	const [shuffle, setShuffle] = useState([]);
	const [turns, setTurns] = useState(0);
	// useState for user choices, set to an empty string, not null so that there is an initial value that can be read
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);

	// randomise images 
	const randomise = () => {
		// spread the deck variable to get all items in the array
		const cards = [...deck]
		// calls a function for each item in the array
		.sort(() => Math.random() - 0.5)
		.map((card) => ({...card, id: Math.random()}))

		// this will change the state by using setShuffle and passing cards 
		setShuffle(cards);
		setTurns(0);
	}
	// handle choice event
	const choiceEvent = (card) => {
		// console.log("event test")
		// loop through the array of cards
		// for (let i = 0; i < card.length; i++) {
		// 	console.log(card);
		// }

		// set the value of choiceOne, based on the users choice, and pass in the card
		choiceOne
			? setChoiceTwo(card)
			: setChoiceOne(card)

		// console.log(card.src);

		// console.log(choiceOne)
		// console.log(choiceTwo)

		// for (let i = 0; i < 5; i++) {
			// if (choiceOne === choiceTwo) {
			// 	console.log("match");
			// }
		// }
	};

	// compare two cards
	// use effect will fire initially upon page load, and again when a dependancy changes
	useEffect(() => {
		// console.log(deck[0]["matchId"]);
		// console.log(deck.matchId);
			// console.log(choiceOne.src, choiceTwo.src);
			// console.log(deck[0]["src"]);
			// console.log(deck[0]["matchId"]);
		// for (let i = 0; i < 52; i++) {
			// validate the existanceof both choiceOne and choiceTwo, then check for a match
			if (choiceOne && choiceTwo) {
				if (
					choiceOne.src === deck[0]["src"] && choiceTwo.src === deck[0]["matchId"]
					|| /*OR...*/
					choiceOne.src === deck[0]["matchId"] && choiceTwo.src === deck[0]["src"]) {
					console.log("Match!");
				resetTurn();
				} else if (
					choiceOne.src === deck[2]["src"] && choiceTwo.src === deck[2]["matchId"]
					||
					choiceOne.src === deck[2]["src"] && choiceTwo.src === deck[2]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[4]["src"] && choiceTwo.src === deck[4]["matchId"]
					||
					choiceOne.src === deck[4]["src"] && choiceTwo.src === deck[4]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[6]["src"] && choiceTwo.src === deck[6]["matchId"]
					||
					choiceOne.src === deck[6]["src"] && choiceTwo.src === deck[6]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[8]["src"] && choiceTwo.src === deck[8]["matchId"]
					||
					choiceOne.src === deck[8]["src"] && choiceTwo.src === deck[8]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[10]["src"] && choiceTwo.src === deck[10]["matchId"]
					||
					choiceOne.src === deck[10]["src"] && choiceTwo.src === deck[10]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[12]["src"] && choiceTwo.src === deck[12]["matchId"]
					||
					choiceOne.src === deck[12]["src"] && choiceTwo.src === deck[12]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[14]["src"] && choiceTwo.src === deck[14]["matchId"]
					||
					choiceOne.src === deck[14]["src"] && choiceTwo.src === deck[14]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[16]["src"] && choiceTwo.src === deck[16]["matchId"]
					||
					choiceOne.src === deck[16]["src"] && choiceTwo.src === deck[16]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[18]["src"] && choiceTwo.src === deck[18]["matchId"]
					||
					choiceOne.src === deck[18]["src"] && choiceTwo.src === deck[18]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[20]["src"] && choiceTwo.src === deck[20]["matchId"]
					||
					choiceOne.src === deck[20]["src"] && choiceTwo.src === deck[20]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[22]["src"] && choiceTwo.src === deck[22]["matchId"]
					||
					choiceOne.src === deck[22]["src"] && choiceTwo.src === deck[22]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[24]["src"] && choiceTwo.src === deck[24]["matchId"]
					||
					choiceOne.src === deck[24]["src"] && choiceTwo.src === deck[24]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[26]["src"] && choiceTwo.src === deck[26]["matchId"]
					||
					choiceOne.src === deck[26]["src"] && choiceTwo.src === deck[26]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[28]["src"] && choiceTwo.src === deck[28]["matchId"]
					||
					choiceOne.src === deck[28]["src"] && choiceTwo.src === deck[28]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[30]["src"] && choiceTwo.src === deck[30]["matchId"]
					||
					choiceOne.src === deck[30]["src"] && choiceTwo.src === deck[30]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[32]["src"] && choiceTwo.src === deck[32]["matchId"]
					||
					choiceOne.src === deck[32]["src"] && choiceTwo.src === deck[32]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[34]["src"] && choiceTwo.src === deck[34]["matchId"]
					||
					choiceOne.src === deck[34]["src"] && choiceTwo.src === deck[34]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[36]["src"] && choiceTwo.src === deck[36]["matchId"]
					||
					choiceOne.src === deck[36]["src"] && choiceTwo.src === deck[36]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[38]["src"] && choiceTwo.src === deck[38]["matchId"]
					||
					choiceOne.src === deck[38]["src"] && choiceTwo.src === deck[38]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[40]["src"] && choiceTwo.src === deck[40]["matchId"]
					||
					choiceOne.src === deck[40]["src"] && choiceTwo.src === deck[40]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[42]["src"] && choiceTwo.src === deck[42]["matchId"]
					||
					choiceOne.src === deck[42]["src"] && choiceTwo.src === deck[42]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[44]["src"] && choiceTwo.src === deck[44]["matchId"]
					||
					choiceOne.src === deck[44]["src"] && choiceTwo.src === deck[44]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[46]["src"] && choiceTwo.src === deck[46]["matchId"]
					||
					choiceOne.src === deck[46]["src"] && choiceTwo.src === deck[46]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[48]["src"] && choiceTwo.src === deck[48]["matchId"]
					||
					choiceOne.src === deck[48]["src"] && choiceTwo.src === deck[48]["src"]) {
					console.log("Match!");
					resetTurn();
				} else if (
					choiceOne.src === deck[50]["src"] && choiceTwo.src === deck[50]["matchId"]
					||
					choiceOne.src === deck[50]["src"] && choiceTwo.src === deck[50]["src"]) {
					console.log("Match!");
					resetTurn();
				} else {
					console.log("No match!");
					resetTurn();
				}
			};
			// console.log(choiceOne.src, choiceTwo.src);
			// console.log(deck[0]["src"]);
		// }
	}, [choiceOne, choiceTwo])

	// reset choice and update turn
	const resetTurn = () => {
		setChoiceOne(null)
		setChoiceTwo(null)
		setTurns(prevTurns => prevTurns +1)
		console.log(choiceOne.src);
		console.log(choiceTwo.src);
	}


	// console.log(choiceOne);
	// for (let i = 0; i < 52; i++) {
	// 	const card = deck[i];
	// 	if (card === card) {
	// 		console.log(card);
	// 	}
	// }

	// const compareChoices = {
	// 	choiceOne: deckTwo[0],
	// 	choiceTwo: deck[0]
	// }

	// will not log the deck[i] to the console and cannot compare it to the user choice to trigger the if statement
	// for (let i = 0; i < 5; i++) {
		// console.log(deck[0]);
		// console.log(deckTwo[0]);

	// !!! NOTE - target the "src" from both the choice and the index of the array you want to target.
	// !!! NOTE - "src" is an object? Cannot match src against the user choice currently as 
	// 	console.log(choiceOne);
		// console.log(deck[0]['src']);
	// 	// console.log(choiceTwo);
	// 	// if (choiceOne == choiceTwo) {
	// 	if (choiceOne == deck[0]) {
	// 		console.log("Match!");
	// 	}
	// }

	return (
		<>
			<div>
				<button id="randomise-btn" onClick={randomise}>Randomise Cards</button>
				<p id="play-prompt-card">Flip cards to find a match</p>
				<div className="card-grid">
					{shuffle.map(card => (
						// prop to give the card access to the images
						<SingleCard
							key={card.id} 
							card={card}
							handleChoiceEvent={choiceEvent}
						/>
					))}
				</div>
			</div>
		</>
	)
}

export default Game 
