import React, { useState, useEffect } from 'react';
import { Monitor, X, Smartphone } from 'lucide-react';

const MobileNotice = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Prüfen, ob es ein mobiles Gerät ist (Width < 1024px für Tablets/Phones)
        const checkMobile = () => {
            if (window.innerWidth < 1024) {
                setIsVisible(true);
            }
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-x-4 top-6 z-[300000] animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1a]/80 p-5 backdrop-blur-xl shadow-2xl">
                {/* Akzent-Linie oben */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                
                <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                        <Monitor size={20} />
                    </div>
                    
                    <div className="flex-1">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white">
                            Desktop-Optimiert
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-white/60">
                            Für das volle Erlebnis der Simulation und die präzise Steuerung empfehlen wir die Nutzung am **Notebook oder Desktop**.
                        </p>
                    </div>

                    <button 
                        onClick={() => setIsVisible(false)}
                        className="rounded-lg p-1 text-white/20 hover:bg-white/5 hover:text-white transition-colors"
                    >
                        <X size={18} />
                    </button>
                </div>
                
                <div className="mt-4 flex items-center gap-2 border-t border-white/5 pt-3">
                    <Smartphone size={12} className="text-white/20" />
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
                        Mobile Version in Entwicklung
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MobileNotice;