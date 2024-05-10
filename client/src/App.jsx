import { useState } from 'react'
import './App.css'
// import "./assets"

// imports image assets
const deck = [
  {"src": "./assets/ace_of_spades.png"},
  {"scr": "./assets/ace_of_clubs.png"},
  {"scr": "./assets/ace_of_hearts.png"},
  {"scr": "./assets/ace_of_spades.png"},
]

console.log(deck);
function App() {
  const [shuffle, setShuffle] = useState(/*initial value is an empty array*/[])

  // randomise images 
  const randomise = () => {
    // spread the deck variable to get all items in the array
    const cards = [...deck]
    // calls a function for each item in the array
    .sort(() => Math.random() - 0.5)
    .map((card) => ({... card, id: Math.random()}))

    // this will change the state by using setShuffle and passing randomise
    // currently just creates an infinite loop
    setShuffle(randomise)
  }

  console.log(shuffle);

  return (
    <>
      <div>
        <button onClick={randomise}>click me!</button>
        {/*<button>click me!</button>*/}
      </div>
    </>
  )
}

export default App
