import React, { useState } from 'react';
import { useClimateStore } from '../store/useClimateStore';

function Configurator() {
    const [isOpen, setIsOpen] = useState(false);
    const config = useClimateStore((state) => state.config);
    const updateConfig = useClimateStore((state) => state.updateConfig);

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-6 left-6 glass-panel px-5 py-3 border-white/20 hover:border-accent/50 text-sm font-bold tracking-wider uppercase text-white/80 hover:text-accent z-[70] transition-all"
            >
                ⚙ Simulation
            </button>

            {/* Side Panel */}
            <div
                className={`fixed left-0 top-0 h-full w-[380px] glass-panel rounded-none border-y-0 border-l-0 z-[200] transition-transform duration-500 ease-out overflow-y-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                <div className="p-8">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-10">
                        <div>
                            <span className="text-xs font-bold font-mono text-accent uppercase tracking-widest block mb-2">Parameter</span>
                            <h2 className="text-3xl font-black text-white tracking-tight">Simulation</h2>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Controls */}
                    <div className="space-y-10">

                        {/* CO2 Control */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-base font-semibold text-white">CO₂ Emissionen</span>
                                <span className="text-lg font-bold font-mono text-accent">{config.co2EmissionRate}x</span>
                            </div>
                            <input
                                type="range" min="0" max="5" step="0.1"
                                value={config.co2EmissionRate}
                                onChange={(e) => updateConfig({ co2EmissionRate: Number(e.target.value) })}
                                className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-accent"
                            />
                            <p className="text-sm text-white/50 leading-relaxed">
                                Multiplikator für industrielle CO₂-Emissionen relativ zu 2020.
                            </p>
                        </div>

                        {/* Renewables Control */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-base font-semibold text-white">Erneuerbare Energien</span>
                                <span className="text-lg font-bold font-mono text-green-400">{config.renewableAdoption}%</span>
                            </div>
                            <input
                                type="range" min="0" max="100"
                                value={config.renewableAdoption}
                                onChange={(e) => updateConfig({ renewableAdoption: Number(e.target.value) })}
                                className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-green-400"
                            />
                            <p className="text-sm text-white/50 leading-relaxed">
                                Globaler Anteil erneuerbarer Energiequellen.
                            </p>
                        </div>

                        {/* Ocean Protection */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-base font-semibold text-white">Meeresschutz</span>
                                <span className="text-lg font-bold font-mono text-blue-400">{config.protectionPolicy}%</span>
                            </div>
                            <input
                                type="range" min="0" max="100"
                                value={config.protectionPolicy}
                                onChange={(e) => updateConfig({ protectionPolicy: Number(e.target.value) })}
                                className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-blue-400"
                            />
                            <p className="text-sm text-white/50 leading-relaxed">
                                Anteil der unter Schutz stehenden Meeresgebiete.
                            </p>
                        </div>

                    </div>

                    {/* Footer */}
                    <div className="mt-12 pt-8 border-t border-white/10">
                        <p className="text-xs text-white/40 font-mono text-center">
                            Atlantis Klimasimulation v2.0
                        </p>
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[190] animate-in fade-in duration-300"
                />
            )}
        </>
    );
}

export default Configurator;
