import React, { useState } from 'react';
import { useClimateStore } from '../store/useClimateStore';
import { ZONES } from '../data/zones';
import { BookOpen } from 'lucide-react';
import KnowledgeBase from './KnowledgeBase';

function HUD() {
    const depth = useClimateStore((state) => state.depth);
    const year = useClimateStore((state) => state.year);
    const setYear = useClimateStore((state) => state.setYear);
    const [isKnowledgeOpen, setIsKnowledgeOpen] = useState(false);

    const currentZone = ZONES.find(z => depth >= z.minDepth && depth <= z.maxDepth) ||
        (depth > 10000 ? ZONES[0] : ZONES[ZONES.length - 1]);

    // Determine vehicle mode
    const vehicleMode = depth > 0 ? 'rocket' : 'submarine';

    return (
        <div className="fixed inset-0 pointer-events-none z-[60] flex flex-col justify-between p-4 md:p-6">

            <KnowledgeBase isOpen={isKnowledgeOpen} onClose={() => setIsKnowledgeOpen(false)} />

            {/* Top Left: Zone Info & Knowledge Trigger */}
            <div className="flex items-start justify-between w-full">
                <div className="panel px-4 py-3">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-medium text-[var(--color-accent)] uppercase tracking-wider">
                            {vehicleMode === 'rocket' ? '🚀' : '🔱'} {vehicleMode === 'rocket' ? 'Aufstieg' : 'Tauchfahrt'}
                        </span>
                    </div>
                    <h2 className="text-lg font-bold text-white leading-tight">
                        {currentZone?.title}
                    </h2>
                    <span className="text-xs text-muted">{currentZone?.subtitle}</span>
                </div>

                <button
                    onClick={() => setIsKnowledgeOpen(true)}
                    className="panel p-3 pointer-events-auto hover:bg-white/10 transition-all group items-center gap-2 hidden md:flex"
                    title="Wissensbereich & Spenden"
                >
                    <BookOpen size={20} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Wissen</span>
                </button>
            </div>

            {/* Bottom: Year Slider & Mobile Knowledge Trigger */}
            <div className="flex flex-col md:flex-row items-stretch md:items-end justify-between gap-3">
                <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto">
                    {/* Mobile Knowledge Button - Compact */}
                    <button
                        onClick={() => setIsKnowledgeOpen(true)}
                        className="panel p-2.5 pointer-events-auto flex md:hidden items-center justify-center aspect-square"
                    >
                        <BookOpen size={20} className="text-cyan-400" />
                    </button>

                    {/* Navigation Hint - Hidden on Mobile */}
                    <div className="panel px-3 py-2 hidden md:block">
                        <span className="text-[10px] text-muted inline-flex items-center">
                            <kbd className="px-1 py-0.5 bg-white/10 rounded text-white text-[9px] mr-1">↑↓</kbd>
                            Navigation
                        </span>
                    </div>

                    {/* Year Slider - Expanded on Mobile */}
                    <div className="panel px-4 py-2.5 flex items-center gap-3 pointer-events-auto flex-1 md:flex-none justify-between md:justify-start">
                        <span className="text-[10px] text-muted hidden md:inline">1950</span>
                        <input
                            type="range"
                            min="1950"
                            max="2100"
                            value={year}
                            onChange={(e) => setYear(Number(e.target.value))}
                            className="flex-1 md:w-32 h-1 bg-white/15 rounded-full appearance-none cursor-pointer accent-[var(--color-accent)]"
                        />
                        <span className="text-[10px] text-muted hidden md:inline">2100</span>
                        <span className="text-xl font-bold text-white tabular-nums pl-2 border-l border-white/10">{year}</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HUD;
