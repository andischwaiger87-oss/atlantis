import React, { useState, useEffect } from 'react';
import './index.css';
import WorldCanvas from './components/WorldCanvas';
import HUD from './components/HUD';
import ZoneIndicator from './components/ZoneIndicator';
import ClimateControlPanel from './components/ClimateControlPanel';
import GlobalAtmosphere from './components/GlobalAtmosphere';
import StartScreen from './components/StartScreen';
import Onboarding from './components/Onboarding';

function App() {
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);

  // Check if user has seen onboarding before
  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('atlantis_onboarding_seen');
    if (hasSeenOnboarding) {
      // If seen, we don't show it again unless triggered or startScreen is finished
    }
  }, []);

  const handleStart = () => {
    setShowStartScreen(false);
    setShowOnboarding(true);
  };

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    localStorage.setItem('atlantis_onboarding_seen', 'true');
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-[var(--color-bg)]">
      {showStartScreen && <StartScreen onEnter={handleStart} />}
      {showOnboarding && <Onboarding onComplete={handleOnboardingComplete} />}

      <GlobalAtmosphere />
      <WorldCanvas />
      <HUD />
      <ZoneIndicator />
      <ClimateControlPanel />
    </div>
  );
}

export default App;
