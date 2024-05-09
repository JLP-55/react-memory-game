import {useState} from "react"
import "./App.css"

function NewApp() {
	const [greeting, updateGreeting] = useState(0)

	return (
		<>
			<div>
				<p> HELLO WORLD! </p>
			</div>
		</>
	)
}

export default NewApp