import React, { useState, useEffect } from 'react';

const StartScreen = ({ onEnter }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isLeaving, setIsLeaving] = useState(false);

    const handleEnter = () => {
        setIsLeaving(true);
        setTimeout(() => {
            setIsVisible(false);
            onEnter();
        }, 1200);
    };

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[200000] flex flex-col items-center justify-center bg-[#060a12] transition-all duration-1000 ease-in-out ${isLeaving ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'}`}
        >
            {/* Background Atmosphere */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            </div>

            {/* Content */}
            <div className="relative flex flex-col items-center text-center px-6 max-w-lg">
                <h1 className="text-5xl md:text-9xl font-cinzel text-white mb-6 md:mb-12 drop-shadow-[0_0_30px_rgba(0,212,255,0.3)] animate-[fade-in_2s_ease-out]">
                    ATLANTIS
                </h1>

                <div className="mb-6 md:mb-12 overflow-hidden">
                    <span className="block text-cyan-400 text-xs md:text-base font-bold uppercase tracking-[0.4em] animate-[slide-up_1s_ease-out_0.5s_both]">
                        Simulation System-Archäologie
                    </span>
                </div>

                <p className="w-full text-white/50 text-xs md:text-lg leading-relaxed mb-8 md:mb-12 animate-[fade-in_2s_ease-out_0.8s_both]">
                    Erforsche die vertikale Tiefe unseres Planeten – vom Weltraum bis zum Meeresgrund – und simuliere die Auswirkungen des Klimawandels auf fragile Ökosysteme.
                </p>

                <button
                    onClick={handleEnter}
                    className="group relative px-10 md:px-12 py-3 md:py-4 bg-transparent border border-white/20 rounded-full text-white text-xs md:text-sm font-bold tracking-widest hover:border-cyan-400 transition-all duration-500 animate-[fade-in_2s_ease-out_1.2s_both]"
                >
                    <span className="relative z-10">SYSTEM BETRETEN</span>
                    <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 rounded-full transition-all duration-500" />
                    <div className="absolute -inset-0.5 bg-cyan-400 opacity-0 group-hover:opacity-20 blur-md rounded-full transition-all duration-500" />
                </button>
            </div>

            {/* Footer */}
            <div className="absolute bottom-12 md:bottom-8 px-4 text-[10px] text-white/10 uppercase tracking-widest font-mono text-center">
                Projekt Atlantis © 2025 // Datenbasierte Klima-Aufklärung
            </div>

            <style>{`
                @keyframes slide-up {
                    0% { transform: translateY(100%); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                @keyframes fade-in {
                    0% { opacity: 0; transform: translateY(10px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default StartScreen;
