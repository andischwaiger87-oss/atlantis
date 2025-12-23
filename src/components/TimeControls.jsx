import React from 'react';
import { useClimateStore } from '../store/useClimateStore';

function TimeControls() {
    const year = useClimateStore((state) => state.year);
    const minYear = useClimateStore((state) => state.minYear);
    const maxYear = useClimateStore((state) => state.maxYear);
    const setYear = useClimateStore((state) => state.setYear);

    return (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 w-full max-w-3xl px-12 z-[100]">
            <div className="glass-panel p-2 pl-8 flex items-center gap-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] border-white/10">
                <span className="text-[10px] font-mono text-white/30 tracking-widest">{minYear}</span>

                <div className="relative flex-1 group py-4">
                    <input
                        type="range"
                        min={minYear}
                        max={maxYear}
                        value={year}
                        onChange={(e) => setYear(Number(e.target.value))}
                        className="w-full h-0.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-accent hover:accent-white transition-all outline-none"
                    />

                    {/* Visual markers on the slider track */}
                    <div className="absolute top-1/2 left-0 w-full h-[1px] -z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                </div>

                <span className="text-[10px] font-mono text-white/30 tracking-widest">{maxYear}</span>

                <div className="h-10 w-[1px] bg-white/10" />

                <div className="pr-4 py-2">
                    <div className="flex flex-col items-end">
                        <div className="text-[8px] font-mono uppercase tracking-[0.3em] text-accent mb-0.5 font-bold">Chronos_View</div>
                        <div className="font-mono text-xl font-bold text-white leading-none tabular-nums">{year}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeControls;
