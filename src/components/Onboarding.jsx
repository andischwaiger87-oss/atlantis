import React, { useState } from 'react';
import { MousePointer2, Info, Settings2, ChevronRight, X } from 'lucide-react';

const Onboarding = ({ onComplete }) => {
    const [step, setStep] = useState(0);

    const steps = [
        {
            title: "Vertikale Erkundung",
            description: "Nutze das Mausrad oder die Pfeiltasten, um zwischen Weltraum und Tiefsee zu navigieren. Die linke Leiste zeigt dir deine aktuelle Zone an.",
            icon: <MousePointer2 className="text-cyan-400" size={40} />,
            color: "text-cyan-400"
        },
        {
            title: "Wissenschaftliche Daten",
            description: "Klicke auf Tiere, Satelliten oder Stationen, um detaillierte Informationen und wissenschaftliche Fakten aus Museums-Quellen zu erhalten.",
            icon: <Info className="text-blue-400" size={40} />,
            color: "text-blue-400"
        },
        {
            title: "Klima-Simulation",
            description: "Aktiviere die Simulation im rechten Panel, um Umweltfaktoren zu verändern und die Auswirkungen auf das gesamte Ökosystem in Echtzeit zu beobachten.",
            icon: <Settings2 className="text-orange-400" size={40} />,
            color: "text-orange-400"
        }
    ];

    const next = () => {
        if (step < steps.length - 1) {
            setStep(step + 1);
        } else {
            onComplete();
        }
    };

    return (
        <div className="fixed inset-0 z-[151000] flex items-center justify-center md:p-4 bg-[var(--color-bg)]/80 backdrop-blur-xl animate-in fade-in duration-500">
            <div className="relative w-full h-full md:h-auto md:max-w-md overflow-hidden panel-glass md:rounded-3xl flex flex-col items-center text-center p-8 md:p-10 shadow-2xl">
                {/* Background Glow */}
                <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-[80px] opacity-20 transition-colors duration-500"
                    style={{ backgroundColor: step === 0 ? '#22d3ee' : step === 1 ? '#60a5fa' : '#fb923c' }} />

                <button
                    onClick={onComplete}
                    className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="mb-8 p-6 bg-white/5 rounded-3xl">
                    {steps[step].icon}
                </div>

                <h2 className="text-2xl font-bold text-white mb-4">
                    {steps[step].title}
                </h2>

                <p className="text-gray-400 leading-relaxed mb-10">
                    {steps[step].description}
                </p>

                {/* Progress Indicators */}
                <div className="flex gap-2 mb-8">
                    {steps.map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-white' : 'bg-white/10'}`}
                        />
                    ))}
                </div>

                <button
                    onClick={next}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-white text-black font-bold rounded-2xl hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                    {step === steps.length - 1 ? 'Simulation Starten' : 'Weiter'}
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    );
};

export default Onboarding;
