import "./singleCard.css";

/*pass a prop "card" to the SingleCard function so that we can render images*/
function SingleCard({card}) {
return (
        <div className="card">
          <div>
          	{/*will render the front and back of each card image.*/}
            <img className="front" src={card.src} alt="card front"/>
            <img className="back" src="/img/rear_red.png" alt="card back"/>
          </div>
        </div>
	)
}

export default SingleCard;