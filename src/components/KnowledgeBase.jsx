import React, { useState } from 'react';
import { X, Book, Heart, ExternalLink, Info } from 'lucide-react';

const GLOSSARY = [
    {
        term: 'Klimawandel',
        def: 'Langfristige Veränderung von Temperatur und Wettermustern, heute primär durch menschliche Aktivitäten (Verbrennung fossiler Stoffe) getrieben.'
    },
    {
        term: 'Treibhauseffekt',
        def: 'Prozess, bei dem Gase in der Atmosphäre Wärme speichern. Ohne ihn wäre die Erde -18°C kalt; durch zu viele Gase überhitzt sie.'
    },
    {
        term: 'Kipppunkte',
        def: 'Schwellenwerte im Klimasystem, bei deren Überschreitung irreversible Prozesse (z.B. Schmelzen des Grönlandeises) ausgelöst werden.'
    },
    {
        term: 'Ozeanversauerung',
        def: 'Aufnahme von CO2 durch Meere senkt den pH-Wert. Dies gefährdet Lebewesen mit Kalkschalen wie Korallen und Plankton.'
    },
    {
        term: 'Klimaneutralität',
        def: 'Gleichgewicht zwischen Emissionen und deren Aufnahme aus der Atmosphäre (Netto-Null).'
    },
    {
        term: 'Biodiversität',
        def: 'Die Vielfalt allen Lebens auf der Erde. Der Klimawandel ist eine der Hauptursachen für das aktuelle Massenaussterben.'
    }
];

const DONATIONS = [
    {
        org: 'WWF Deutschland',
        desc: 'Globaler Natur- und Artenschutz sowie Klimaschutzprojekte.',
        link: 'https://www.wwf.de'
    },
    {
        org: 'Greenpeace',
        desc: 'Unabhängige Kampagnen für Klimagerechtigkeit und den Erhalt der Meere.',
        link: 'https://www.greenpeace.de'
    },
    {
        org: 'Sea Shepherd',
        desc: 'Direkter Schutz der marinen Tierwelt und Kampf gegen illegale Fischerei.',
        link: 'https://www.sea-shepherd.de'
    },
    {
        org: 'Atmosfair',
        desc: 'Vermeidung und Kompensation von CO2 durch hochwertige Klimaschutzprojekte.',
        link: 'https://www.atmosfair.de'
    }
];

const KnowledgeBase = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('glossary');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden panel-glass rounded-3xl flex flex-col pointer-events-auto">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-cyan-500/20 rounded-xl text-cyan-400">
                            <Book size={20} />
                        </div>
                        <h2 className="text-xl font-bold text-white tracking-tight">Wissensbereich</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-white"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex px-6 items-center gap-4 bg-white/5 border-b border-white/5">
                    <button
                        onClick={() => setActiveTab('glossary')}
                        className={`py-4 text-sm font-medium transition-all relative ${activeTab === 'glossary' ? 'text-cyan-400' : 'text-white/40 hover:text-white/60'}`}
                    >
                        Klima-Glossar
                        {activeTab === 'glossary' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />}
                    </button>
                    <button
                        onClick={() => setActiveTab('donations')}
                        className={`py-4 text-sm font-medium transition-all relative ${activeTab === 'donations' ? 'text-cyan-400' : 'text-white/40 hover:text-white/60'}`}
                    >
                        Spenden & Helfen
                        {activeTab === 'donations' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />}
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                    {activeTab === 'glossary' ? (
                        <div className="grid gap-4">
                            {GLOSSARY.map((item, idx) => (
                                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Info size={14} className="text-cyan-400/80" />
                                        <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors uppercase tracking-wider text-xs">
                                            {item.term}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-white/60 leading-relaxed">
                                        {item.def}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid gap-4">
                            <div className="mb-2 p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                                <p className="text-sm text-cyan-100 leading-relaxed italic">
                                    "Alle hier gelisteten Organisationen sind international anerkannt und setzen sich transparent für den Klima- und Artenschutz ein."
                                </p>
                            </div>
                            {DONATIONS.map((org, idx) => (
                                <a
                                    key={idx}
                                    href={org.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/20 transition-all flex items-center justify-between group"
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Heart size={14} className="text-pink-400 समूह-hover:scale-110 transition-transform" />
                                            <h3 className="font-bold text-white">{org.org}</h3>
                                        </div>
                                        <p className="text-xs text-white/50">{org.desc}</p>
                                    </div>
                                    <div className="ml-4 p-2 rounded-xl bg-white/5 group-hover:bg-cyan-500/20 text-white/30 group-hover:text-cyan-400 transition-all">
                                        <ExternalLink size={18} />
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/10 bg-white/5">
                    <p className="text-[10px] text-white/30 text-center uppercase tracking-widest leading-relaxed">
                        Transparente Information für eine nachhaltige Zukunft. <br />
                        Helfe mit, unsere Ozeane und das globale Klima zu schützen.
                    </p>
                </div>
            </div>

            <style p={true}>{`
                .panel-glass {
                    background: rgba(13, 19, 31, 0.85);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default KnowledgeBase;
