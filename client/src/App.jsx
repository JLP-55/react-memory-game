import { useState } from 'react'
import './App.css'
// import "./assets"

// imports image assets
const deck = [
  {"src": "/img/ace_of_spades.png"},
  {"src": "/img/ace_of_clubs.png"},
  {"src": "/img/ace_of_hearts.png"},
  {"src": "/img/ace_of_diamonds.png"},
  {"src": "/img/1_of_spades.png"},
  {"src": "/img/1_of_clubs.png"},
  {"src": "/img/1_of_hearts.png"},
  {"src": "/img/1_of_diamonds.png"},
  {"src": "/img/2_of_spades.png"},
  {"src": "/img/2_of_clubs.png"},
  {"src": "/img/2_of_hearts.png"},
  {"src": "/img/2_of_diamonds.png"},
  {"src": "/img/3_of_spades.png"},
  {"src": "/img/3_of_clubs.png"},
  {"src": "/img/3_of_hearts.png"},
  {"src": "/img/3_of_diamonds.png"},
  {"src": "/img/4_of_spades.png"},
  {"src": "/img/4_of_clubs.png"},
  {"src": "/img/4_of_hearts.png"},
  {"src": "/img/4_of_diamonds.png"},
  {"src": "/img/5_of_spades.png"},
  {"src": "/img/5_of_clubs.png"},
  {"src": "/img/5_of_hearts.png"},
  {"src": "/img/5_of_diamonds.png"},
  {"src": "/img/6_of_spades.png"},
  {"src": "/img/6_of_clubs.png"},
  {"src": "/img/6_of_hearts.png"},
  {"src": "/img/6_of_diamonds.png"},
  {"src": "/img/7_of_spades.png"},
  {"src": "/img/7_of_clubs.png"},
  {"src": "/img/7_of_hearts.png"},
  {"src": "/img/7_of_diamonds.png"},
  {"src": "/img/8_of_spades.png"},
  {"src": "/img/8_of_clubs.png"},
  {"src": "/img/8_of_hearts.png"},
  {"src": "/img/8_of_diamonds.png"},
  {"src": "/img/9_of_spades.png"},
  {"src": "/img/9_of_clubs.png"},
  {"src": "/img/9_of_hearts.png"},
  {"src": "/img/9_of_diamonds.png"},
  {"src": "/img/10_o_fspades.png"},
  {"src": "/img/10_o_clubsf.png"},
  {"src": "/img/10_o_heartsf.png"},
  {"src": "/img/10_of_diamonds.png"},
  {"src": "/img/jack_of_spades.png"},
  {"src": "/img/jack_of_clubs.png"},
  {"src": "/img/jack_of_hearts.png"},
  {"src": "/img/jack_of_diamonds.png"},
  {"src": "/img/queen_of_spades.png"},
  {"src": "/img/queen_of_clubs.png"},
  {"src": "/img/queen_of_hearts.png"},
  {"src": "/img/queen_of_diamonds.png"},
  {"src": "/img/king_of_spades.png"},
  {"src": "/img/king_of_clubs.png"},
  {"src": "/img/king_of_hearts.png"},
  {"src": "/img/king_of_diamonds.png"},
]

console.log(deck);
function App() {
  // useState sets initial value
  const [shuffle, setShuffle] = useState([])
  const [turns, setTurns] = useState(0)

  // randomise images 
  const randomise = () => {
    // spread the deck variable to get all items in the array
    const cards = [...deck]
    // calls a function for each item in the array
    .sort(() => Math.random() - 0.5)
    .map((card) => ({... card, id: Math.random()}))

    // this will change the state by using setShuffle and passing randomise
    // currently just creates an infinite loop
    setShuffle(cards)
    setTurns(0)
  }

  // !!! IMPORTANT
  // !!! ERROR
  // why are we console.logging twice?
  console.log(shuffle, turns);

  return (
    <>
      <div>
        <button onClick={randomise}>click me!</button>
      </div>
    </>
  )
}

export default App
