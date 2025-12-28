import React from 'react';
import useSimulationStore from '../store/useSimulationStore';

const GlobalAtmosphere = () => {
    const { isSimulationActive, temperatureAnomaly, pollutionLevel, getEcosystemStats } = useSimulationStore();

    if (!isSimulationActive) return null;

    const stats = getEcosystemStats ? getEcosystemStats() : { oxygen: 100, foodSupply: 100, calcification: 100 };

    // Calculate dynamic styles
    // Temperature: 0 -> 4°C. 
    // At 0: Blueish/Neutral. At 1.5: Slight Orange. At 4: Intense Red/Orange.
    const heatOpacity = Math.max(0, (temperatureAnomaly - 0.5) / 4) * 0.4; // Max 40% red tint

    // Pollution: 0 -> 100%.
    // At 50: Little murk. At 100: Brownish/Grey overlay.
    const pollutionOpacity = (pollutionLevel / 100) * 0.5; // Max 50% murk

    // Ecosystem Collapse (Desaturation/Dead zones)
    // Desaturate if Oxygen < 40 or Food < 30
    const collapseOpacity = Math.max(0, (60 - stats.oxygen) / 60, (50 - stats.foodSupply) / 50) * 0.6;

    return (
        <div
            className="fixed inset-0 pointer-events-none z-[5] transition-all duration-1000 ease-in-out"
            style={{
                backdropFilter: `saturate(${100 - (collapseOpacity * 100)}%)`
            }}
        >
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

            {/* Dead Zone (Gray-out) */}
            <div
                className="absolute inset-0 bg-gray-900 mix-blend-color transition-opacity duration-1000"
                style={{ opacity: collapseOpacity * 0.5 }}
            />

            {/* Vignette for dramatic effect in crisis mode */}
            {(temperatureAnomaly > 2.5 || pollutionLevel > 70 || stats.oxygen < 50 || stats.foodSupply < 40) && (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] animate-pulse-slow" />
            )}
        </div>
    );
};

export default GlobalAtmosphere;
