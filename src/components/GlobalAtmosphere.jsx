import React from 'react';
import useSimulationStore from '../store/useSimulationStore';
import { useClimateStore } from '../store/useClimateStore';

const GlobalAtmosphere = () => {
    const {
        isSimulationActive,
        getEcosystemStats,
        pollutionLevel // Ergänzt: Pollution Level für den visuellen Filter
    } = useSimulationStore();

    const depth = useClimateStore((state) => state.depth);

    // Ensure getEcosystemStats is a function before calling
    const stats = typeof getEcosystemStats === 'function' ? getEcosystemStats() : { oxygen: 100, foodSupply: 100 };
    const isCrisis = isSimulationActive && (stats.oxygen < 70 || stats.foodSupply < 50);

    // Ergänzung: Berechnung der Filter-Sichtbarkeit (max. 40% Opacity für bessere Nutzbarkeit)
    const pollutionOpacity = isSimulationActive ? (pollutionLevel / 100) * 0.4 : 0;

    // Depth scales: Space > 500, Horizon = 0, Deep < -500
    // depth 0 is sea level. 
    // depth > 0 is upwards (Space)
    // depth < 0 is downwards (Underwater)

    // We want effects based on depth:
    const isInAtmosphere = depth > -100; // Sky or surface
    const isAtSurface = depth < 100 && depth > -200; // Near horizon
    const isUnderwater = depth < -10;

    return (
        <div className="fixed inset-0 pointer-events-none z-[50]">
            
            {/* NEU: Beige/Braun Filter für Verschmutzung */}
            <div 
                className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                style={{ 
                    backgroundColor: '#7d6340', // Schmutziges Braun/Beige
                    opacity: pollutionOpacity,
                    mixBlendMode: 'multiply' 
                }} 
            />

            {/* Atmospheric Depth Overlays */}

            {/* God Rays (Sunlight Zone) */}
            {isAtSurface && isUnderwater && (
                <div className="absolute inset-0 overflow-hidden opacity-30">
                    <div className="absolute top-0 left-1/4 w-[20%] h-[200%] bg-gradient-to-b from-white/20 to-transparent rotate-[15deg] origin-top animate-[god-rays_8s_ease-in-out_infinite]" />
                    <div className="absolute top-0 left-1/2 w-[15%] h-[200%] bg-gradient-to-b from-white/10 to-transparent rotate-[-10deg] origin-top animate-[god-rays_12s_ease-in-out_infinite_1s]" />
                </div>
            )}

            {/* Sea Ripples (Surface/Sub-surface) */}
            {isAtSurface && (
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/water.png')] opacity-10 animate-[sea-ripple_20s_linear_infinite]" />
            )}

            {/* Clouds (Troposphere/Atmosphere) */}
            {isInAtmosphere && depth > 50 && depth < 2000 && (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-[20%] left-[-20%] w-64 h-32 bg-white/20 blur-3xl rounded-full animate-[cloud-drift_40s_linear_infinite]" />
                    <div className="absolute top-[50%] left-[-30%] w-96 h-48 bg-white/10 blur-[100px] rounded-full animate-[cloud-drift_60s_linear_infinite_10s]" />
                </div>
            )}

            {/* Crisis Overlays (Desaturation & Vignette) */}
            <div className={`absolute inset-0 transition-all duration-1000 ${isCrisis ? 'backdrop-grayscale-[0.4] contrast-[0.9]' : 'opacity-0'}`} />

            {/* Dark/Dead Vignette */}
            <div className={`absolute inset-0 transition-all duration-1000 pointer-events-none ${isCrisis ? 'shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]' : 'opacity-0'}`} />

            {/* "Dead Zone" Gray Overlay - intensifies with crisis */}
            {isCrisis && (
                <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply transition-opacity duration-1000" />
            )}
        </div>
    );
};

export default GlobalAtmosphere;