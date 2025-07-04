import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { PlayerProvider } from './context/PlayerContext'; // ✅ move this import up

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlayerProvider> {/* ✅ wrap App inside this */}
      <App />
    </PlayerProvider>
  </StrictMode>
);

