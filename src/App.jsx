import React from 'react';
import './index.css';
import WorldCanvas from './components/WorldCanvas';
import HUD from './components/HUD';
import ZoneIndicator from './components/ZoneIndicator';

// Player vehicle is now rendered inside WorldCanvas at the station position
function App() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[var(--color-bg)]">
      <WorldCanvas />
      <HUD />
      <ZoneIndicator />
    </div>
  );
}

export default App;
