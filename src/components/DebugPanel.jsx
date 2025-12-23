import React, { useState, useEffect } from 'react';
import { useClimateStore } from '../store/useClimateStore';

function DebugPanel() {
    const [isVisible, setIsVisible] = useState(false);
    const { depth, year, config, setDepth } = useClimateStore();

    // Stats
    const fps = 60; // Placeholder

    return (
        <div className="fixed top-4 right-32 z-[100] flex flex-col items-end gap-2">
            <button
                onClick={() => setIsVisible(!isVisible)}
                className="bg-white/10 hover:bg-white/20 text-[10px] text-white/50 px-2 py-1 rounded border border-white/10 backdrop-blur tracking-tighter transition"
            >
                {isVisible ? 'HIDE DEBUG' : 'SHOW DEBUG'}
            </button>

            {isVisible && (
                <div className="bg-black/90 border border-white/20 p-4 rounded-xl w-64 text-xs font-mono text-cyan-400 backdrop-blur-xl shadow-2xl animate-in slide-in-from-top-4 duration-300">
                    <div className="flex justify-between border-b border-white/10 pb-2 mb-2">
                        <span className="text-white font-bold tracking-widest text-[10px]">ATLANTIS CORE DEBUG</span>
                        <span className="text-green-500">v1.0.4</span>
                    </div>

                    <div className="space-y-1">
                        <div className="flex justify-between"><span>DEPTH:</span> <span className="text-white">{depth.toFixed(2)}m</span></div>
                        <div className="flex justify-between"><span>YEAR:</span> <span className="text-white">{year}</span></div>
                        <div className="flex justify-between"><span>TEMP_ANOM:</span> <span className="text-white">+{((year - 2020) * 0.05).toFixed(2)}°C</span></div>
                        <div className="flex justify-between text-zinc-500"><span>CO2_RATE:</span> <span>{config.co2EmissionRate}x</span></div>
                        <div className="flex justify-between text-zinc-500"><span>PROTECTION:</span> <span>{config.protectionPolicy}</span></div>
                    </div>

                    <div className="mt-4 pt-2 border-t border-white/10">
                        <span className="text-white/40 text-[9px] mb-2 block uppercase">Quick Navigation</span>
                        <div className="grid grid-cols-3 gap-1">
                            <button onClick={() => setDepth(10000)} className="bg-white/5 hover:bg-white/10 p-1 rounded text-[9px]">SPACE</button>
                            <button onClick={() => setDepth(0)} className="bg-white/10 hover:bg-white/20 p-1 rounded text-[9px] text-white">HORIZON</button>
                            <button onClick={() => setDepth(-11000)} className="bg-white/5 hover:bg-white/10 p-1 rounded text-[9px]">TRENCH</button>
                        </div>
                    </div>

                    <div className="mt-4 text-[9px] text-zinc-600 italic">
                        Visual Engine: Tailwind v4 / React 19
                    </div>
                </div>
            )}
        </div>
    );
}

export default DebugPanel;
