import { useState, useEffect } from 'react';
import SingleCard from "../components/singleCard.jsx";
import '../App.css';
// import "./assets"

// imports image assets
const deck = [ 
	// if choiceOne = deck.src && choiceTwo = deck.matchId ... Match!
	{"src": "/img/ace_of_spades.png", "matchId": "/img/ace_of_clubs.png", matched: false},
	{"src": "/img/ace_of_clubs.png", "matchId": "/img/ace_of_spades.png", matched: false},
	{"src": "/img/ace_of_hearts.png", "matchId": "/img/ace_of_diamonds.png", matched: false},
	{"src": "/img/ace_of_diamonds.png", "matchId": "/img/ace_of_hearts.png", matched: false},
	{"src": "/img/2_of_spades.png", "matchId": "/img/2_of_clubs.png", matched: false},
	{"src": "/img/2_of_clubs.png", "matchId": "/img/2_of_spades.png", matched: false},
	{"src": "/img/2_of_hearts.png", "matchId": "/img/2_of_diamonds.png", matched: false},
	{"src": "/img/2_of_diamonds.png", "matchId": "/img/2_of_hearts.png", matched: false},
	{"src": "/img/3_of_spades.png", "matchId": "/img/3_of_clubs.png", matched: false},
	{"src": "/img/3_of_clubs.png", "matchId": "/img/3_of_spades.png", matched: false},
	{"src": "/img/3_of_hearts.png", "matchId": "/img/3_of_diamonds.png", matched: false},
	{"src": "/img/3_of_diamonds.png", "matchId": "/img/3_of_hearts.png", matched: false},
	{"src": "/img/4_of_spades.png", "matchId": "/img/4_of_clubs.png", matched: false},
	{"src": "/img/4_of_clubs.png", "matchId": "/img/4_of_spades.png", matched: false},
	{"src": "/img/4_of_hearts.png", "matchId": "/img/4_of_diamonds.png", matched: false},
	{"src": "/img/4_of_diamonds.png", "matchId": "/img/4_of_hearts.png", matched: false},
	{"src": "/img/5_of_spades.png", "matchId": "/img/5_of_clubs.png", matched: false},
	{"src": "/img/5_of_clubs.png", "matchId": "/img/5_of_spades.png", matched: false},
	{"src": "/img/5_of_hearts.png", "matchId": "/img/5_of_diamonds.png", matched: false},
	{"src": "/img/5_of_diamonds.png", "matchId": "/img/5_of_hearts.png", matched: false},
	{"src": "/img/6_of_spades.png", "matchId": "/img/6_of_clubs.png", matched: false},
	{"src": "/img/6_of_clubs.png", "matchId": "/img/6_of_spades.png", matched: false},
	{"src": "/img/6_of_hearts.png", "matchId": "/img/6_of_diamonds.png", matched: false},
	{"src": "/img/6_of_diamonds.png", "matchId": "/img/6_of_hearts.png", matched: false},
	{"src": "/img/7_of_spades.png", "matchId": "/img/7_of_clubs.png", matched: false},
	{"src": "/img/7_of_clubs.png", "matchId": "/img/7_of_spades.png", matched: false},
	{"src": "/img/7_of_hearts.png", "matchId": "/img/7_of_diamonds.png", matched: false},
	{"src": "/img/7_of_diamonds.png", "matchId": "/img/7_of_hearts.png", matched: false},
	{"src": "/img/8_of_spades.png", "matchId": "/img/8_of_clubs.png", matched: false},
	{"src": "/img/8_of_clubs.png", "matchId": "/img/8_of_spades.png", matched: false},
	{"src": "/img/8_of_hearts.png", "matchId": "/img/8_of_diamonds.png", matched: false},
	{"src": "/img/8_of_diamonds.png", "matchId": "/img/8_of_hearts.png", matched: false},
	{"src": "/img/9_of_spades.png", "matchId": "/img/9_of_clubs.png", matched: false},
	{"src": "/img/9_of_clubs.png", "matchId": "/img/9_of_spades.png", matched: false},
	{"src": "/img/9_of_hearts.png", "matchId": "/img/9_of_diamonds.png", matched: false},
	{"src": "/img/9_of_diamonds.png", "matchId": "/img/9_of_hearts.png", matched: false},
	{"src": "/img/10_of_spades.png", "matchId": "/img/10_of_clubs.png", matched: false},
	{"src": "/img/10_of_clubs.png", "matchId": "/img/10_of_spades.png", matched: false},
	{"src": "/img/10_of_hearts.png", "matchId": "/img/10_of_diamonds.png", matched: false},
	{"src": "/img/10_of_diamonds.png", "matchId": "/img/10_of_hearts.png", matched: false},
	{"src": "/img/jack_of_spades.png", "matchId": "/img/jack_of_clubs.png", matched: false},
	{"src": "/img/jack_of_clubs.png", "matchId": "/img/jack_of_spades.png", matched: false},
	{"src": "/img/jack_of_hearts.png", "matchId": "/img/jack_of_diamonds.png", matched: false},
	{"src": "/img/jack_of_diamonds.png", "matchId": "/img/jack_of_hearts.png", matched: false},
	{"src": "/img/queen_of_spades.png", "matchId": "/img/queen_of_clubs.png", matched: false},
	{"src": "/img/queen_of_clubs.png", "matchId": "/img/queen_of_spades.png", matched: false},
	{"src": "/img/queen_of_hearts.png", "matchId": "/img/queen_of_diamonds.png", matched: false},
	{"src": "/img/queen_of_diamonds.png", "matchId": "/img/queen_of_hearts.png", matched: false},
	{"src": "/img/king_of_spades.png", "matchId": "/img/king_of_clubs.png", matched: false},
	{"src": "/img/king_of_clubs.png", "matchId": "/img/king_of_spades.png", matched: false},
	{"src": "/img/king_of_hearts.png", "matchId": "/img/king_of_diamonds.png", matched: false},
	{"src": "/img/king_of_diamonds.png", "matchId": "/img/king_of_hearts.png", matched: false},
]


function Game() {
	// useState sets initial value
	// useState for rendering the card images
	const [shuffle, setShuffle] = useState([]);
	const [turns, setTurns] = useState(0);
	// useState for user choices, set to an empty string, not null so that there is an initial value that can be read
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);
	// useState for disabling a card
	const [disable, setDisable] = useState(false);

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
		// set the value of choiceOne, based on the users choice, and pass in the card
		choiceOne
			? setChoiceTwo(card)
			: setChoiceOne(card);
	};

	// compare two cards
	// use effect will fire initially upon page load, and again when a dependancy changes
	useEffect(() => {
		// setDisable(true);
			if (choiceOne && choiceTwo) {
			// setDisable(true);
				if (
					choiceOne.src === deck[0]["src"] && choiceTwo.src === deck[0]["matchId"]
					|| /*OR...*/
					choiceOne.src === deck[0]["matchId"] && choiceTwo.src === deck[0]["src"]) {
					setShuffle(previousCards => {
						// console.log(previousCards);
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						// needs to return all cards, plus deck[i]
						return previousCards.map((card, i) => {
							// console.log(card);
							// console.log(i);
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
								// console.log to test the matched status
								setTimeout(() => {
									// you will have to select the same match again to see an update.
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								}, 1000);
								// console.log({...card});
								// return a new matched property
								return {...card, matched: true};
							} else {
								return card;
								// console.log(card);
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[2]["src"] && choiceTwo.src === deck[2]["matchId"]
					||
					choiceOne.src === deck[2]["matchId"] && choiceTwo.src === deck[2]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[4]["src"] && choiceTwo.src === deck[4]["matchId"]
					||
					choiceOne.src === deck[4]["matchId"] && choiceTwo.src === deck[4]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[6]["src"] && choiceTwo.src === deck[6]["matchId"]
					||
					choiceOne.src === deck[6]["matchId"] && choiceTwo.src === deck[6]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[8]["src"] && choiceTwo.src === deck[8]["matchId"]
					||
					choiceOne.src === deck[8]["matchId"] && choiceTwo.src === deck[8]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[10]["src"] && choiceTwo.src === deck[10]["matchId"]
					||
					choiceOne.src === deck[10]["matchId"] && choiceTwo.src === deck[10]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[12]["src"] && choiceTwo.src === deck[12]["matchId"]
					||
					choiceOne.src === deck[12]["matchId"] && choiceTwo.src === deck[12]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[14]["src"] && choiceTwo.src === deck[14]["matchId"]
					||
					choiceOne.src === deck[14]["matchId"] && choiceTwo.src === deck[14]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[16]["src"] && choiceTwo.src === deck[16]["matchId"]
					||
					choiceOne.src === deck[16]["matchId"] && choiceTwo.src === deck[16]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[18]["src"] && choiceTwo.src === deck[18]["matchId"]
					||
					choiceOne.src === deck[18]["matchId"] && choiceTwo.src === deck[18]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[20]["src"] && choiceTwo.src === deck[20]["matchId"]
					||
					choiceOne.src === deck[20]["matchId"] && choiceTwo.src === deck[20]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[22]["src"] && choiceTwo.src === deck[22]["matchId"]
					||
					choiceOne.src === deck[22]["matchId"] && choiceTwo.src === deck[22]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[24]["src"] && choiceTwo.src === deck[24]["matchId"]
					||
					choiceOne.src === deck[24]["matchId"] && choiceTwo.src === deck[24]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[26]["src"] && choiceTwo.src === deck[26]["matchId"]
					||
					choiceOne.src === deck[26]["matchId"] && choiceTwo.src === deck[26]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[28]["src"] && choiceTwo.src === deck[28]["matchId"]
					||
					choiceOne.src === deck[28]["matchId"] && choiceTwo.src === deck[28]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[30]["src"] && choiceTwo.src === deck[30]["matchId"]
					||
					choiceOne.src === deck[30]["matchId"] && choiceTwo.src === deck[30]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[32]["src"] && choiceTwo.src === deck[32]["matchId"]
					||
					choiceOne.src === deck[32]["matchId"] && choiceTwo.src === deck[32]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[34]["src"] && choiceTwo.src === deck[34]["matchId"]
					||
					choiceOne.src === deck[34]["matchId"] && choiceTwo.src === deck[34]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[36]["src"] && choiceTwo.src === deck[36]["matchId"]
					||
					choiceOne.src === deck[36]["matchId"] && choiceTwo.src === deck[36]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[38]["src"] && choiceTwo.src === deck[38]["matchId"]
					||
					choiceOne.src === deck[38]["matchId"] && choiceTwo.src === deck[38]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[40]["src"] && choiceTwo.src === deck[40]["matchId"]
					||
					choiceOne.src === deck[40]["matchId"] && choiceTwo.src === deck[40]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[42]["src"] && choiceTwo.src === deck[42]["matchId"]
					||
					choiceOne.src === deck[42]["matchId"] && choiceTwo.src === deck[42]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[44]["src"] && choiceTwo.src === deck[44]["matchId"]
					||
					choiceOne.src === deck[44]["matchId"] && choiceTwo.src === deck[44]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[46]["src"] && choiceTwo.src === deck[46]["matchId"]
					||
					choiceOne.src === deck[46]["matchId"] && choiceTwo.src === deck[46]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[48]["src"] && choiceTwo.src === deck[48]["matchId"]
					||
					choiceOne.src === deck[48]["matchId"] && choiceTwo.src === deck[48]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else if (
					choiceOne.src === deck[50]["src"] && choiceTwo.src === deck[50]["matchId"]
					||
					choiceOne.src === deck[50]["matchId"] && choiceTwo.src === deck[50]["src"]) {
					setShuffle(previousCards => {
						console.log("src =", choiceOne.src, choiceTwo.src);
						console.log("matchId =", choiceOne.matchId, choiceTwo.matchId);
						return previousCards.map((card, i) => {
							if (card.src === choiceTwo.src || card.src === choiceOne.src) {
									console.log("THE CARD IS MATCHED!", card.matched);
									console.log(previousCards);
								return {...card, matched: true};
							} else {
								return card;
							}
						})
					});
					console.log("match");
					resetTurn();
				} else {
					// display the selection momentarily
					setTimeout(() => {
						resetTurn();
					}, 1000)
					console.log("no match")
				}
			};
	}, [choiceOne, choiceTwo]);

	// reset choice and update turn
	// increment turns
	// reset disable to false
	const resetTurn = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setTurns(prevTurns => prevTurns +1);
		setDisable(false);
		// console.log(choiceOne.src);
		// console.log(choiceTwo.src);
		// console.log(choiceTwo.matchId);
		console.log(turns);
		// console.log(deck[0]["matched"])
	};

	return (
		<>
			<div>
				<button id="randomise-btn" onClick={randomise}>Randomise Cards</button>
				<p id="play-prompt-card">Flip cards to find a match.<span>Match like colours and numbers</span></p>
				<div className="card-grid">
					{shuffle.map(card => (
						// prop to give the card access to the images
						<SingleCard
							key={card.id} 
							card={card}
							handleChoiceEvent={choiceEvent}
							flipped={
								// flipped prop is true if it is equal in any of the below conditions
								card === choiceOne || 
								card === choiceTwo || 
								card.matched
							}
							disable={disable}
						/>
					))}
				</div>
			</div>
		</>
	)
}

export default Game 
