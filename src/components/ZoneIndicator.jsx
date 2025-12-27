import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { useClimateStore } from '../store/useClimateStore';
import { ZONES } from '../data/zones';

function ZoneIndicator() {
    const depth = useClimateStore((state) => state.depth);
    const setDepth = useClimateStore((state) => state.setDepth);
    const [isExpanded, setIsExpanded] = useState(false);

    const totalMax = 12000;
    const totalMin = -11000;
    const totalRange = totalMax - totalMin;

    const percentage = ((totalMax - depth) / totalRange) * 100;

    // Find current zone - the zone where current depth falls within
    const currentZone = ZONES.find(z => depth >= z.minDepth && depth <= z.maxDepth) ||
        (depth > 10000 ? ZONES[0] : ZONES[ZONES.length - 1]);

    // Navigate to the most extreme/interesting point of the zone
    const goToZone = (zone) => {
        let target;
        if (zone.id === 'horizon') target = 0;
        else if (zone.minDepth < 0) target = zone.minDepth; // Bottom of sea zones
        else target = zone.maxDepth; // Top of sky zones
        setDepth(target);
    };

    // Visual position on the track - use zone center
    const getZonePosition = (zone) => {
        const center = (zone.minDepth + zone.maxDepth) / 2;
        return ((totalMax - center) / totalRange) * 100;
    };

    return (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 h-[85vh] flex gap-3 z-[100]">

            {/* Vertical Track */}
            <div className="relative h-full w-6 flex flex-col items-center">
                <div className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-violet-500/40 via-cyan-400/40 to-slate-800/40 rounded-full" />

                {ZONES.map(zone => (
                    <div
                        key={zone.id}
                        onClick={() => goToZone(zone)}
                        className={`anchor-point absolute cursor-pointer ${currentZone?.id === zone.id ? 'active' : ''}`}
                        style={{ top: `${getZonePosition(zone)}%`, transform: 'translateY(-50%)' }}
                        title={zone.title}
                    />
                ))}

                {/* Current position indicator */}
                <div
                    className="absolute w-5 h-5 -left-[6px] transition-all duration-150 pointer-events-none"
                    style={{ top: `${percentage}%`, transform: 'translateY(-50%)' }}
                >
                    <div className="w-full h-full rounded-full bg-[var(--color-accent)] shadow-[0_0_15px_var(--color-accent)] border-2 border-white" />
                </div>
            </div>

            {/* Mobile Toggle Button */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="md:hidden absolute right-8 top-0 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white z-[110]"
            >
                {isExpanded ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Zone List */}
            <div className={`panel p-3 flex flex-col gap-1 w-44 max-h-[70vh] md:max-h-full overflow-y-auto transition-all duration-300
                ${isExpanded ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-10 pointer-events-none md:opacity-100 md:translate-x-0 md:pointer-events-auto'}
                fixed right-16 top-1/2 -translate-y-1/2 md:static md:transform-none z-[105]`}>
                <span className="text-xs font-semibold text-muted uppercase tracking-wider px-1 mb-1">Zonen</span>

                {ZONES.map(zone => (
                    <button
                        key={zone.id}
                        onClick={() => goToZone(zone)}
                        className={`zone-btn text-left py-1.5 px-3 rounded transition-all ${currentZone?.id === zone.id ? 'active bg-[var(--color-accent)]/20 border-[var(--color-accent)]' : 'hover:bg-white/5'}`}
                    >
                        <span className="block text-sm font-semibold truncate">{zone.title}</span>
                        <span className="text-[10px] text-muted truncate block">{zone.subtitle}</span>
                    </button>
                ))}

                {/* Depth Display */}
                <div className="mt-3 pt-3 border-t border-white/10 text-center">
                    <span className="text-2xl font-bold text-[var(--color-accent)] tabular-nums block">
                        {Math.round(Math.abs(depth))}m
                    </span>
                    <span className="text-xs text-muted uppercase tracking-wider">
                        {depth > 0 ? 'Höhe' : depth < 0 ? 'Tiefe' : 'Horizont'}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ZoneIndicator;
