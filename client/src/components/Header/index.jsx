// export default Header;
import {Link} from 'react-router-dom';
import "../../App.css";
import Game from "../../pages/game.jsx";

import Auth from '../../utils/auth';

const Header = () => {
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	};
	return (
		<header>
			<div id="header">
				<div>
					<Link to="/">
						<h1 className="text-heading">A Game of&nbsp;<span id="span">Memory</span></h1>
						{/*<h1 className="text-heading">Memory</h1>*/}
					</Link>
				</div>
				<div id="header-link">
					{Auth.loggedIn() ? (
						<>
							<span id="greeting">Logged in as {Auth.getProfile().data.username}&nbsp;</span>
							<Link className="btn" to="/game">
							 Start Game
							</Link>
							<Link className="btn" onClick={logout}>
								Logout
							</Link>
						</>
					) : (
						<>
							<p id="prompt-card">Log in or sign up to play</p>
							<Link className="btn" to="/signup">
								Signup
							</Link>
							<Link className="btn" to="/login">
								Login
							</Link>
						</>
					)}
				</div>
				<div>
				{/*implement a form to show the users scores and rank them*/}
{/*					<div className="leaderboard">
						<div>
						 <p>Leaderboard</p> 
						</div>
					</div>
*/}				</div>
			</div>
		</header>
	);
};

export default Header;
