import React, { useState } from 'react';
import { Settings2, RotateCcw, Thermometer, Droplets, Trash2, X } from 'lucide-react';
import useSimulationStore from '../store/useSimulationStore';

const ClimateControlPanel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {
        isSimulationActive,
        setSimulationActive,
        temperatureAnomaly, setTemperature,
        oceanPh, setPh,
        pollutionLevel, setPollution,
        resetSimulation,
        getEcosystemStats
    } = useSimulationStore();

    const stats = getEcosystemStats ? getEcosystemStats() : { oxygen: 100, foodSupply: 100, calcification: 100 };

    // Toggle logic
    const toggleSim = () => {
        if (!isOpen) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    };

    const activateSim = (active) => {
        setSimulationActive(active);
    };

    return (
        <div className="fixed bottom-20 right-4 z-[100000] flex flex-col items-end gap-2 pointer-events-none">

            {/* Main Interface Panel */}
            <div className={`
                panel p-4 w-72 transition-all duration-300 origin-bottom-right pointer-events-auto
                ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4 pointer-events-none hidden'}
            `}>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <Settings2 size={16} className="text-[var(--color-accent)]" />
                        Klima-Simulation
                    </h3>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1 hover:bg-white/10 rounded-lg text-muted transition-colors"
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* Master Switch */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <span className="text-xs text-gray-300">Simulation aktiv</span>
                    <button
                        onClick={() => activateSim(!isSimulationActive)}
                        className={`
                            w-12 h-6 rounded-full p-1 transition-colors duration-300
                            ${isSimulationActive ? 'bg-[var(--color-accent)]' : 'bg-white/10'}
                        `}
                    >
                        <div className={`
                            w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300
                            ${isSimulationActive ? 'translate-x-6' : 'translate-x-0'}
                        `} />
                    </button>
                </div>

                {/* Controls - Only active if Sim is ON */}
                <div className={`space-y-6 transition-opacity duration-300 ${isSimulationActive ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>

                    {/* Temperature */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                            <span className="flex items-center gap-1 text-gray-300">
                                <Thermometer size={12} /> Temp. Anomalie
                            </span>
                            <span className={`font-mono font-bold ${temperatureAnomaly > 1.5 ? 'text-red-400' : 'text-blue-300'}`}>
                                +{temperatureAnomaly.toFixed(1)}°C
                            </span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="4"
                            step="0.1"
                            value={temperatureAnomaly}
                            onChange={(e) => setTemperature(parseFloat(e.target.value))}
                            className="w-full h-1.5 bg-gradient-to-r from-blue-500 via-yellow-400 to-red-600 rounded-lg appearance-none cursor-pointer accent-white"
                        />
                    </div>

                    {/* pH Value */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                            <span className="flex items-center gap-1 text-gray-300">
                                <Droplets size={12} /> Ozean pH
                            </span>
                            <span className={`font-mono font-bold ${oceanPh < 7.8 ? 'text-orange-400' : 'text-green-300'}`}>
                                {oceanPh.toFixed(1)}
                            </span>
                        </div>
                        <input
                            type="range"
                            min="7.6"
                            max="8.2"
                            step="0.1"
                            value={oceanPh}
                            onChange={(e) => setPh(parseFloat(e.target.value))}
                            className="w-full h-1.5 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg appearance-none cursor-pointer accent-white"
                            dir="rtl" // Right to left because lower pH is "worse" (more acidic) but conventionally on right? Actually 8.1 is right. Let's keep normal: Left 7.6 (Bad) -> Right 8.2 (Good)? Or match Slider? 
                        // Standard: Left (Low) -> Right (High). 
                        // 7.6 ( Acidic/Bad) ........ 8.1 (Base/Good).
                        // Gradient: Orange -> Green. Correct.
                        />
                    </div>

                    {/* Pollution */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                            <span className="flex items-center gap-1 text-gray-300">
                                <Trash2 size={12} /> Verschmutzung
                            </span>
                            <span className={`font-mono font-bold ${pollutionLevel > 50 ? 'text-purple-400' : 'text-gray-300'}`}>
                                {pollutionLevel}%
                            </span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={pollutionLevel}
                            onChange={(e) => setPollution(parseInt(e.target.value))}
                            className="w-full h-1.5 bg-gradient-to-r from-gray-500 to-purple-600 rounded-lg appearance-none cursor-pointer accent-white"
                        />
                    </div>

                    {/* Ecosystem Health Monitor (Predicted) */}
                    <div className="pt-4 border-t border-white/5 space-y-2">
                        <span className="text-[10px] uppercase font-bold text-muted tracking-wider">Ökosystem-Status</span>

                        {/* Oxygen */}
                        <div className="flex flex-col gap-0.5">
                            <div className="flex justify-between text-[10px] text-gray-400">
                                <span>Sauerstoff</span>
                                <span>{stats.oxygen.toFixed(0)}%</span>
                            </div>
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className={`h-full transition-all duration-500 ${stats.oxygen < 60 ? 'bg-red-500' : 'bg-blue-400'}`}
                                    style={{ width: `${stats.oxygen}%` }}
                                />
                            </div>
                        </div>

                        {/* Food Supply */}
                        <div className="flex flex-col gap-0.5">
                            <div className="flex justify-between text-[10px] text-gray-400">
                                <span>Nahrungskette</span>
                                <span>{stats.foodSupply.toFixed(0)}%</span>
                            </div>
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className={`h-full transition-all duration-500 ${stats.foodSupply < 40 ? 'bg-red-500' : 'bg-green-400'}`}
                                    style={{ width: `${stats.foodSupply}%` }}
                                />
                            </div>
                        </div>

                        {/* Calcification */}
                        <div className="flex flex-col gap-0.5">
                            <div className="flex justify-between text-[10px] text-gray-400">
                                <span>Kalkbildung</span>
                                <span>{stats.calcification.toFixed(0)}%</span>
                            </div>
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className={`h-full transition-all duration-500 ${stats.calcification < 50 ? 'bg-orange-500' : 'bg-teal-400'}`}
                                    style={{ width: `${stats.calcification}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reset or Tips */}
                <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                    <button
                        onClick={resetSimulation}
                        className="text-[10px] flex items-center gap-1.5 text-muted hover:text-[var(--color-accent)] transition-colors"
                    >
                        <RotateCcw size={12} />
                        Standardwerte
                    </button>
                    {isSimulationActive && (
                        <span className="text-[10px] text-[var(--color-accent)] animate-pulse">
                            Simulation aktiv
                        </span>
                    )}
                </div>
            </div>

            {/* Toggle Button (Always Visible) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    pointer-events-auto
                    w-12 h-12 rounded-full flex items-center justify-center
                    backdrop-blur-xl border border-white/20 shadow-lg
                    hover:scale-110 active:scale-95 transition-all duration-300
                    ${isOpen || isSimulationActive ? 'bg-[var(--color-accent)] text-white shadow-[0_0_20px_var(--color-accent)]' : 'bg-black/60 text-white hover:bg-white/10'}
                `}
                title="Klima-Simulation öffnen"
            >
                <Settings2 size={20} className={isSimulationActive ? 'animate-spin-slow' : ''} />
            </button>
        </div>
    );
};

export default ClimateControlPanel;
