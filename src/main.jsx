import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "cally"
import './index.css'
import App from './App.jsx'
import { Context } from "./context.js";
import { store } from "./auth/userStore.js";

createRoot(document.getElementById('root')).render(
  
    <Context.Provider value={{store}}>
      <App />
    </Context.Provider>
  
)
