import "./singleCard.css";
import App from "../pages/game.jsx"

/*pass a prop "card" to the SingleCard function so that we can render images*/
function SingleCard({card, handleChoiceEvent, flipped}) {

	const clickEvent = () => {
			handleChoiceEvent(card)
	};

	return (
		<div className="card">
			<div className={flipped ? "flipped" : ""}>
				{/*will render the front and back of each card image.*/}
				<img 
					className="front" 
					src={card.src} 
					alt="card front"/>
				<img 
					className="back"
					src="/img/rear_red.png" 
					onClick={clickEvent} 
					alt="card back"
				/>
			</div>
		</div>
		)
}

export default SingleCard;