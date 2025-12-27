import React from 'react';
import { useClimateStore } from '../store/useClimateStore';
import { ZONES } from '../data/zones';

function HUD() {
    const depth = useClimateStore((state) => state.depth);
    const year = useClimateStore((state) => state.year);
    const setYear = useClimateStore((state) => state.setYear);

    const currentZone = ZONES.find(z => depth >= z.minDepth && depth <= z.maxDepth) ||
        (depth > 10000 ? ZONES[0] : ZONES[ZONES.length - 1]);

    // Determine vehicle mode
    const vehicleMode = depth > 0 ? 'rocket' : 'submarine';

    return (
        <div className="fixed inset-0 pointer-events-none z-[60] flex flex-col justify-between p-3 md:p-4">

            {/* Top Left: Zone Info */}
            <div className="flex items-start gap-4">
                <div className="panel px-4 py-3">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-medium text-[var(--color-accent)] uppercase tracking-wider">
                            {vehicleMode === 'rocket' ? '🚀' : '🔱'} {vehicleMode === 'rocket' ? 'Aufstieg' : 'Tauchfahrt'}
                        </span>
                    </div>
                    <h2 className="text-base md:text-lg font-bold text-white leading-tight">
                        {currentZone?.title}
                    </h2>
                    <span className="text-xs text-muted">{currentZone?.subtitle}</span>
                </div>
            </div>

            {/* Bottom: Year Slider only */}
            <div className="flex items-end justify-between gap-3">

                {/* Navigation Hint */}
                <div className="panel px-3 py-2">
                    <span className="text-[10px] text-muted hidden md:inline-flex items-center">
                        <kbd className="px-1 py-0.5 bg-white/10 rounded text-white text-[9px] mr-1">↑↓</kbd>
                        Navigation
                    </span>
                    <span className="text-[10px] text-muted md:hidden inline-flex items-center">
                        <span className="mr-1">↕</span> Swipe
                    </span>
                </div>

                {/* Year Slider */}
                <div className="panel px-4 py-2.5 flex items-center gap-3 pointer-events-auto">
                    <span className="text-[10px] text-muted">1950</span>
                    <input
                        type="range"
                        min="1950"
                        max="2100"
                        value={year}
                        onChange={(e) => setYear(Number(e.target.value))}
                        className="w-32 h-1 bg-white/15 rounded-full appearance-none cursor-pointer accent-[var(--color-accent)]"
                    />
                    <span className="text-[10px] text-muted">2100</span>
                    <span className="text-xl font-bold text-white tabular-nums pl-2 border-l border-white/10">{year}</span>
                </div>
            </div>

        </div>
    );
}

export default HUD;
