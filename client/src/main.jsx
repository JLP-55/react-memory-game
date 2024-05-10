import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// imprort something to render here
import App from "./App.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/*render something here*/}
    <App />
  </React.StrictMode>,
)
