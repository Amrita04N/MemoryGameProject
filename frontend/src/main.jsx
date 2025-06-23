import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { PlayerProvider } from "./context/PlayerContext";

<React.StrictMode>
  <PlayerProvider>
    <App />
  </PlayerProvider>
</React.StrictMode>
