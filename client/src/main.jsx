import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

// import something to render here
import App from "./App.jsx"
// import Home from './pages/Home';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import SingleThought from './pages/SingleThought';
// import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		// errorElement: <ErrorPage />,
		// children: [
		//   {
		//     index: true,
		//     element: <Home />
		//   }, {
		//     path: '/login',
		//     element: <Login />
		//   }, {
		//     path: '/signup',
		//     element: <Signup />
		//   }, {
		//     path: '/thoughts/:thoughtId',
		//     element: <SingleThought />
		//   }
		// ]
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
	// <React.StrictMode>
	// {/*render something here*/}
		// {<App />}
	// </React.StrictMode>,
)
