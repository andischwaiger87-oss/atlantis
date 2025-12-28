import React, { useState } from 'react';
import { X, Book, Heart, ExternalLink, Info } from 'lucide-react';

const GLOSSARY = [
    {
        term: 'Albedo-Effekt',
        def: 'Das Rückstrahlvermögen von Oberflächen. Helles Eis hat eine hohe Albedo und kühlt die Erde; dunkles Meerwasser absorbiert Wärme und verstärkt die Erwärmung.'
    },
    {
        term: 'Biodiversität',
        def: 'Die Vielfalt allen Lebens auf der Erde. Der Klimawandel ist eine der Hauptursachen für das aktuelle Massenaussterben von Arten.'
    },
    {
        term: 'CO2-Äquivalente (CO2e)',
        def: 'Maßeinheit zur Vereinheitlichung der Klimawirkung unterschiedlicher Treibhausgase (wie Methan oder Lachgas) basierend auf ihrem Erwärmungspotenzial.'
    },
    {
        term: 'Fossile Brennstoffe',
        def: 'Energieträger wie Kohle, Erdöl und Erdgas, die über Millionen von Jahren entstanden sind. Ihre Verbrennung setzt gespeichertes CO2 frei.'
    },
    {
        term: 'Kipppunkte',
        def: 'Kritische Schwellenwerte im Klimasystem, bei deren Überschreitung irreversible und sich selbst verstärkende Prozesse (z.B. Permafrost-Tau) ausgelöst werden.'
    },
    {
        term: 'Klimawandel',
        def: 'Langfristige Veränderung von Temperatur und Wettermustern, heute primär durch menschliche Aktivitäten (Verbrennung fossiler Stoffe) getrieben.'
    },
    {
        term: 'Klimaneutralität',
        def: 'Zustand, in dem die emittierten Treibhausgase durch deren Aufnahme (z.B. durch Wälder oder Moore) vollständig ausgeglichen werden (Netto-Null).'
    },
    {
        term: 'Meeresströmungen',
        def: 'Gigantische "Förderbänder" im Ozean (wie der Golfstrom), die Wärme weltweit verteilen. Schmelzwasser kann diese Systeme verlangsamen oder stoppen.'
    },
    {
        term: 'Methanhydrat',
        def: 'In Eis eingeschlossenes Methan am Meeresgrund. Bei Erwärmung der Ozeane könnte es schlagartig freiwerden und den Klimawandel massiv beschleunigen.'
    },
    {
        term: 'Ozeanversauerung',
        def: 'Aufnahme von CO2 durch Meere senkt den pH-Wert. Dies gefährdet Lebewesen mit Kalkschalen wie Korallen, Muscheln und Plankton.'
    },
    {
        term: 'Permafrost',
        def: 'Dauerhaft gefrorener Boden in kalten Regionen. Beim Tauen werden riesige Mengen an Methan und CO2 frei, die zuvor Jahrtausende gespeichert waren.'
    },
    {
        term: 'Treibhauseffekt',
        def: 'Natürlicher Prozess, bei dem Gase in der Atmosphäre Wärme speichern. Ohne ihn wäre die Erde -18°C kalt; durch zu viele Gase überhitzt sie.'
    }
].sort((a, b) => a.term.localeCompare(b.term));

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
        <div
            className="fixed inset-0 z-[999999] flex items-center justify-center md:p-4 bg-black/90 md:bg-black/40 backdrop-blur-sm pointer-events-auto"
            onClick={onClose}
            onWheel={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
        >
            <div
                className="relative w-full h-full md:h-auto md:max-w-2xl md:max-h-[85vh] overflow-hidden bg-[#0a0f1a] md:bg-transparent panel-glass md:rounded-3xl flex flex-col pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-cyan-500/20 rounded-xl text-cyan-400">
                            <Book size={18} className="md:w-5 md:h-5" />
                        </div>
                        <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">Wissensbereich</h2>
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
                <div className="flex-1 overflow-y-auto p-6 min-h-0 overscroll-contain custom-scrollbar">
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
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(34, 211, 238, 0.2);
                    border-radius: 10px;
                    border: 2px solid transparent;
                    background-clip: content-box;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(34, 211, 238, 0.4);
                }
            `}</style>
        </div>
    );
};

export default KnowledgeBase;
