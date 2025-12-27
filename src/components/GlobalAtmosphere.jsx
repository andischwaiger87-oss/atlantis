import React from 'react';
import useSimulationStore from '../store/useSimulationStore';

const GlobalAtmosphere = () => {
    const { isSimulationActive, temperatureAnomaly, pollutionLevel } = useSimulationStore();

    if (!isSimulationActive) return null;

    // Calculate dynamic styles
    // Temperature: 0 -> 4°C. 
    // At 0: Blueish/Neutral. At 1.5: Slight Orange. At 4: Intense Red/Orange.
    const heatOpacity = Math.max(0, (temperatureAnomaly - 0.5) / 4) * 0.4; // Max 40% red tint

    // Pollution: 0 -> 100%.
    // At 50: Little murk. At 100: Brownish/Grey overlay.
    const pollutionOpacity = (pollutionLevel / 100) * 0.5; // Max 50% murk

    return (
        <div className="fixed inset-0 pointer-events-none z-[5] transition-colors duration-1000 ease-in-out">
            {/* Heat Overlay (Red/Orange hot) */}
            <div
                className="absolute inset-0 bg-orange-600 mix-blend-overlay transition-opacity duration-1000"
                style={{ opacity: heatOpacity }}
            />

            {/* Pollution Overlay (Murky Green/Brown) */}
            <div
                className="absolute inset-0 bg-[#4a5d23] mix-blend-multiply transition-opacity duration-1000"
                style={{ opacity: pollutionOpacity }}
            />

            {/* Vignette for dramatic effect in crisis mode */}
            {(temperatureAnomaly > 2.5 || pollutionLevel > 70) && (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] animate-pulse-slow" />
            )}
        </div>
    );
};

export default GlobalAtmosphere;
