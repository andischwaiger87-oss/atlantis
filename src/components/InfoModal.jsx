import React from 'react';
import * as Icons from 'lucide-react';

function InfoModal({ object, onClose }) {
    if (!object) return null;

    const LucideIcon = Icons[object.icon] || Icons.Info;

    const typeConfig = {
        danger: { label: 'Gefahr', color: '#ff4757', bg: 'rgba(255,71,87,0.1)' },
        success: { label: 'Positiv', color: '#2ed573', bg: 'rgba(46,213,115,0.1)' },
        vehicle: { label: 'Fahrzeug', color: '#ffa502', bg: 'rgba(255,165,2,0.1)' },
        info: { label: 'Info', color: '#00d4ff', bg: 'rgba(0,212,255,0.1)' }
    };

    const config = typeConfig[object.type] || typeConfig.info;

    return (
        <div
            className="fixed inset-0 z-[1000] flex items-end md:items-center justify-center md:p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="panel w-full h-[90vh] md:h-auto md:max-w-lg overflow-hidden flex flex-col rounded-t-2xl md:rounded-xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Custom Photo Header - prioritized WebP as requested */}
                <div className="relative w-full h-64 md:h-80 bg-slate-800 overflow-hidden flex-shrink-0">
                    <img
                        src={`/assets/objects/${object.id}.webp`}
                        alt={object.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            // If no image is found, hide the image container
                            e.target.closest('.relative').style.display = 'none';
                        }}
                    />
                    {/* Header Overlay */}
                    <div className="absolute inset-0 p-6 flex items-end bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent">
                        <div className="flex items-center gap-4">
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-md"
                                style={{ background: `${config.color}20`, border: `2px solid ${config.color}50` }}
                            >
                                <LucideIcon size={28} style={{ color: config.color }} />
                            </div>
                            <div>
                                <span
                                    className="text-xs font-semibold uppercase tracking-wider"
                                    style={{ color: config.color }}
                                >
                                    {config.label}
                                </span>
                                <h2 className="text-2xl font-bold text-white mt-0.5">{object.title}</h2>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-black/50 backdrop-blur-md hover:bg-black/70 flex items-center justify-center transition-colors z-10"
                    >
                        <Icons.X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 space-y-6 overflow-y-auto flex-1">

                    {/* Description */}
                    <p className="text-lg text-white/90 leading-relaxed">
                        {object.description}
                    </p>

                    {/* Extinction Warning */}
                    {object.extinctionYear && (
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                            <Icons.AlertTriangle size={24} className="text-red-400 flex-shrink-0" />
                            <p className="text-sm text-red-300">
                                <span className="font-semibold">Gefährdet:</span> Bei aktuellen Trends droht Aussterben bis <span className="font-bold">{object.extinctionYear}</span>
                            </p>
                        </div>
                    )}

                    {/* Facts */}
                    {object.facts && (
                        <div className="space-y-3">
                            <span className="text-xs font-semibold text-muted uppercase tracking-wider">Fakten</span>
                            <ul className="space-y-2">
                                {object.facts.map((fact, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                                        <span className="text-[var(--color-accent)] font-bold">{i + 1}.</span>
                                        {fact}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                </div>

                {/* Footer */}
                <div className="p-4 border-t border-white/10 flex justify-end">
                    <button onClick={onClose} className="btn">
                        Schließen
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InfoModal;
