import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Auth from "./utils/Auth.js";

// import something to render here
import App from "./App.jsx"
import Game from './pages/game.jsx';
import Leaderboard from "./pages/leaderboard.jsx";
import Signup from "./pages/signup.jsx";
import Login from "./pages/login.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/game",
				element: <Game />
			},
			{
				path:"/leaderboard",
				element: <Leaderboard />
			},
			{
				path: "/signup",
				element: <Signup />
			},
			{
				path: "/login",
				element: <Login/>
			}
		]
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
)
