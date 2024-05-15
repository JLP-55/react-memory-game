// export default Header;
import { Link } from 'react-router-dom';
import "../../App.css";

import Auth from '../../utils/auth';

const Header = () => {
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	};
	return (
		<header className="bg-primary text-light mb-4 py-3 flex-row align-center">
			<div id="header" className="container flex-row justify-space-between-lg justify-center align-center">
				<div>
					<Link className="text-light" to="/">
						<h1 className="m-0">A Game of{/*&nbsp;<span>Memory</span>*/}</h1>
						<h1>Memory</h1>
					</Link>
					<p className="m-0">Log in or sign up to play</p>
				</div>
				<div id="header-link">
					{Auth.loggedIn() ? (
						<>
							<span>Hey there, {Auth.getProfile().data.username}!</span>
							<button className="btn btn-lg btn-light m-2" onClick={logout}>
								Logout
							</button>
						</>
					) : (
						<>
							<Link className="btn btn-lg btn-info m-2" to="/login">
								Login
							</Link>
							<Link className="btn btn-lg btn-light m-2" to="/signup">
								Signup
							</Link>
							<Link className="btn btn-lg btn-light m-2" to="/game">
							 Start Game
							</Link>
						</>
					)}
				</div>
				<div>
					<div className="leaderboard">
						<div>
						 <p>Leaderboard</p> 
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
