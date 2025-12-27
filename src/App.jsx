import React from 'react';
import './index.css';
import WorldCanvas from './components/WorldCanvas';
import HUD from './components/HUD';
import ZoneIndicator from './components/ZoneIndicator';

// Player vehicle is now rendered inside WorldCanvas at the station position
import ClimateControlPanel from './components/ClimateControlPanel';

import GlobalAtmosphere from './components/GlobalAtmosphere';

function App() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[var(--color-bg)]">
      <GlobalAtmosphere />
      <WorldCanvas />
      <HUD />
      <ZoneIndicator />
      <ClimateControlPanel />
    </div>
  );
}

export default App;
