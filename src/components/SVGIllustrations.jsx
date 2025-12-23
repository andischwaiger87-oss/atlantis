import React from 'react';

// Custom SVG illustrations for horizon objects
// Shared Rocket Hull to ensure visual identity
export const RocketHull = ({ includeFlame = false }) => (
    <g>
        <defs>
            <linearGradient id="rocketGradShared" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e2e8f0" />
                <stop offset="50%" stopColor="#f7fafc" />
                <stop offset="100%" stopColor="#cbd5e0" />
            </linearGradient>
        </defs>

        {/* Rocket Body */}
        <ellipse cx="35" cy="15" rx="8" ry="12" fill="#e53e3e" />
        <rect x="27" y="15" width="16" height="50" fill="url(#rocketGradShared)" />

        {/* Rocket Window */}
        <circle cx="35" cy="30" r="4" fill="#4299e1" />
        <circle cx="35" cy="30" r="2.5" fill="#90cdf4" />

        {/* Rocket Fins */}
        <polygon points="27,65 20,80 27,75" fill="#e53e3e" />
        <polygon points="43,65 50,80 43,75" fill="#e53e3e" />

        {/* Rocket Base/Engine */}
        <rect x="29" y="65" width="12" height="8" fill="#2d3748" />
        <ellipse cx="35" cy="75" rx="5" ry="3" fill="#ed8936" />

        {/* Optional Flame Effect */}
        {includeFlame && (
            <g>
                <ellipse cx="35" cy="82" rx="6" ry="10" fill="#f6ad55" opacity="0.8">
                    <animate attributeName="ry" values="8;12;8" dur="0.2s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="35" cy="85" rx="4" ry="8" fill="#fbd38d" opacity="0.9">
                    <animate attributeName="ry" values="6;9;6" dur="0.15s" repeatCount="indefinite" />
                </ellipse>
            </g>
        )}
    </g>
);

export const RocketLaunchPad = ({ size = 80 }) => (
    <svg width={size} height={size * 1.5} viewBox="0 0 80 120" style={{ overflow: 'visible' }}>
        {/* Launch Platform */}
        <rect x="10" y="100" width="60" height="15" fill="#4a5568" rx="2" />
        <rect x="5" y="105" width="70" height="10" fill="#2d3748" rx="2" />

        {/* Support Tower */}
        <rect x="55" y="40" width="8" height="65" fill="#718096" />
        <rect x="53" y="35" width="12" height="10" fill="#a0aec0" />
        <rect x="50" y="60" width="18" height="3" fill="#cbd5e0" />
        <rect x="50" y="75" width="18" height="3" fill="#cbd5e0" />

        <RocketHull includeFlame={false} />
    </svg>
);

// Shared Submarine Hull
export const SubmarineHull = () => (
    <g>
        <defs>
            <linearGradient id="subGradShared" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4299e1" />
                <stop offset="100%" stopColor="#2b6cb0" />
            </linearGradient>
        </defs>

        {/* Submarine Body */}
        <ellipse cx="45" cy="40" rx="35" ry="12" fill="url(#subGradShared)" />

        {/* Submarine Details */}
        <ellipse cx="20" cy="40" rx="8" ry="8" fill="#1a365d" />
        <circle cx="20" cy="40" r="5" fill="#4299e1" />

        {/* Conning Tower */}
        <rect x="40" y="25" width="15" height="12" rx="3" fill="#2c5282" />
        <rect x="45" y="20" width="5" height="8" fill="#4a5568" />

        {/* Propeller */}
        <ellipse cx="80" cy="40" rx="3" ry="6" fill="#1a365d">
            <animateTransform attributeName="transform" type="rotate" from="0 80 40" to="360 80 40" dur="1s" repeatCount="indefinite" />
        </ellipse>
    </g>
);

export const SubmarineDock = ({ size = 80 }) => (
    <svg width={size * 1.5} height={size} viewBox="0 0 120 80" style={{ overflow: 'visible' }}>
        {/* Dock Platform */}
        <rect x="0" y="50" width="120" height="12" fill="#4a5568" />
        <rect x="5" y="45" width="110" height="8" fill="#718096" />

        {/* Dock Pillars */}
        <rect x="10" y="55" width="6" height="25" fill="#2d3748" />
        <rect x="104" y="55" width="6" height="25" fill="#2d3748" />

        {/* Crane */}
        <rect x="95" y="20" width="4" height="30" fill="#f6ad55" />
        <rect x="80" y="18" width="20" height="4" fill="#f6ad55" />

        <g transform="translate(10, 0)">
            <SubmarineHull />
        </g>
    </svg>
);

export const OilRig = ({ size = 80 }) => (
    <svg width={size} height={size * 1.2} viewBox="0 0 80 96">
        {/* Platform Base */}
        <rect x="5" y="60" width="70" height="8" fill="#4a5568" />
        <polygon points="10,68 0,85 80,85 70,68" fill="#2d3748" />

        {/* Support Legs */}
        <rect x="13" y="68" width="4" height="28" fill="#718096" />
        <rect x="63" y="68" width="4" height="28" fill="#718096" />
        <rect x="38" y="68" width="4" height="28" fill="#718096" />

        {/* Main Structure */}
        <rect x="20" y="35" width="40" height="25" fill="#e53e3e" />
        <rect x="25" y="40" width="10" height="8" fill="#1a202c" />
        <rect x="45" y="40" width="10" height="8" fill="#1a202c" />

        {/* Derrick Tower */}
        <polygon points="40,5 30,35 50,35" fill="#f6ad55" />

        {/* Flame Stack */}
        <rect x="65" y="30" width="4" height="30" fill="#4a5568" />
        <ellipse cx="67" cy="25" rx="4" ry="8" fill="#f6ad55">
            <animate attributeName="ry" values="6;10;6" dur="0.5s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="67" cy="22" rx="2" ry="5" fill="#fbd38d">
            <animate attributeName="ry" values="4;7;4" dur="0.3s" repeatCount="indefinite" />
        </ellipse>

        {/* Helicopter Pad */}
        <circle cx="25" cy="55" r="8" fill="#2d3748" />
        <text x="25" y="58" textAnchor="middle" fill="#48bb78" fontSize="8">H</text>
    </svg>
);

export const WindTurbine = ({ size = 80 }) => (
    <svg width={size} height={size * 1.3} viewBox="0 0 80 104">
        {/* Foundation */}
        <ellipse cx="40" cy="100" rx="15" ry="4" fill="#4a5568" />

        {/* Tower */}
        <polygon points="35,95 38,30 42,30 45,95" fill="#e2e8f0" />

        {/* Nacelle (generator housing) */}
        <rect x="32" y="25" width="16" height="8" rx="2" fill="#cbd5e0" />

        {/* Hub center */}
        <circle cx="40" cy="28" r="5" fill="#a0aec0" />

        {/* Blade 1 - pointing up */}
        <rect x="38" y="0" width="4" height="28" rx="2" fill="#f7fafc">
            <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 40 28"
                to="360 40 28"
                dur="4s"
                repeatCount="indefinite"
            />
        </rect>

        {/* Blade 2 - 120 degrees */}
        <rect x="38" y="0" width="4" height="28" rx="2" fill="#f7fafc" transform="rotate(120 40 28)">
            <animateTransform
                attributeName="transform"
                type="rotate"
                from="120 40 28"
                to="480 40 28"
                dur="4s"
                repeatCount="indefinite"
            />
        </rect>

        {/* Blade 3 - 240 degrees */}
        <rect x="38" y="0" width="4" height="28" rx="2" fill="#f7fafc" transform="rotate(240 40 28)">
            <animateTransform
                attributeName="transform"
                type="rotate"
                from="240 40 28"
                to="600 40 28"
                dur="4s"
                repeatCount="indefinite"
            />
        </rect>
    </svg>
);

export const CargoShip = ({ size = 100 }) => (
    <svg width={size} height={size * 0.6} viewBox="0 0 100 60">
        {/* Hull */}
        <path d="M5,35 L15,50 L85,50 L95,35 L90,35 L90,30 L10,30 L10,35 Z" fill="#2d3748" />
        <path d="M10,30 L90,30 L90,25 L10,25 Z" fill="#e53e3e" />

        {/* Deck */}
        <rect x="15" y="20" width="70" height="8" fill="#4a5568" />

        {/* Bridge */}
        <rect x="60" y="8" width="20" height="15" fill="#f7fafc" />
        <rect x="62" y="10" width="6" height="4" fill="#4299e1" />
        <rect x="72" y="10" width="6" height="4" fill="#4299e1" />
        <rect x="68" y="5" width="4" height="5" fill="#718096" />

        {/* Containers */}
        <rect x="20" y="15" width="8" height="8" fill="#48bb78" />
        <rect x="30" y="15" width="8" height="8" fill="#4299e1" />
        <rect x="40" y="15" width="8" height="8" fill="#ed8936" />
        <rect x="20" y="8" width="8" height="8" fill="#9f7aea" />
        <rect x="30" y="8" width="8" height="8" fill="#f6ad55" />

        {/* Crane */}
        <rect x="50" y="5" width="2" height="18" fill="#f6ad55" />
        <rect x="45" y="3" width="12" height="3" fill="#f6ad55" />

        {/* Smoke */}
        <circle cx="75" cy="3" r="3" fill="#a0aec0" opacity="0.5">
            <animate attributeName="cy" values="3;-5;3" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
    </svg>
);

// Animal/Creature SVGs
export const SeaTurtle = ({ size = 60 }) => (
    <svg width={size} height={size * 0.7} viewBox="0 0 60 42">
        {/* Shell */}
        <ellipse cx="30" cy="21" rx="18" ry="14" fill="url(#shellPat1)" />

        {/* Shell Pattern */}
        <path d="M20,12 Q30,8 40,12" stroke="#276749" strokeWidth="1.5" fill="none" />
        <path d="M18,21 Q30,15 42,21" stroke="#276749" strokeWidth="1.5" fill="none" />
        <path d="M20,30 Q30,34 40,30" stroke="#276749" strokeWidth="1.5" fill="none" />

        {/* Head */}
        <ellipse cx="50" cy="21" rx="6" ry="4" fill="#68d391" />
        <circle cx="53" cy="19" r="1.5" fill="#1a202c" />

        {/* Flippers */}
        <ellipse cx="18" cy="12" rx="8" ry="4" fill="#68d391" transform="rotate(-30 18 12)">
            <animateTransform attributeName="transform" type="rotate" values="-30 18 12;-20 18 12;-30 18 12" dur="1s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="18" cy="30" rx="8" ry="4" fill="#68d391" transform="rotate(30 18 30)">
            <animateTransform attributeName="transform" type="rotate" values="30 18 30;20 18 30;30 18 30" dur="1s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="42" cy="12" rx="6" ry="3" fill="#68d391" transform="rotate(20 42 12)" />
        <ellipse cx="42" cy="30" rx="6" ry="3" fill="#68d391" transform="rotate(-20 42 30)" />

        {/* Tail */}
        <polygon points="12,21 8,19 8,23" fill="#68d391" />

        <defs>
            <linearGradient id="shellPat1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#68d391" />
                <stop offset="50%" stopColor="#48bb78" />
                <stop offset="100%" stopColor="#276749" />
            </linearGradient>
        </defs>
    </svg>
);

export const Whale = ({ size = 100 }) => (
    <svg width={size} height={size * 0.5} viewBox="0 0 100 50">
        {/* Body */}
        <path d="M10,25 Q25,10 50,15 Q75,10 90,25 Q75,40 50,35 Q25,40 10,25" fill="url(#whaleFill1)" />

        {/* Belly */}
        <path d="M20,28 Q50,40 80,28" stroke="#a0aec0" strokeWidth="8" fill="none" opacity="0.5" />

        {/* Eye */}
        <circle cx="25" cy="22" r="3" fill="#1a202c" />
        <circle cx="24" cy="21" r="1" fill="#fff" />

        {/* Tail */}
        <path d="M90,25 Q95,20 100,15 Q92,25 100,35 Q95,30 90,25" fill="#4a5568">
            <animateTransform attributeName="transform" type="rotate" values="0 90 25;5 90 25;0 90 25;-5 90 25;0 90 25" dur="2s" repeatCount="indefinite" />
        </path>

        {/* Fin */}
        <path d="M45,15 Q50,5 55,15" fill="#2d3748" />

        {/* Spout */}
        <path d="M20,15 Q18,5 22,0 M20,15 Q22,5 18,0" stroke="#90cdf4" strokeWidth="2" fill="none" opacity="0.7">
            <animate attributeName="opacity" values="0;0.7;0" dur="4s" repeatCount="indefinite" />
        </path>

        <defs>
            <linearGradient id="whaleFill1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#718096" />
                <stop offset="100%" stopColor="#4a5568" />
            </linearGradient>
        </defs>
    </svg>
);

export const Jellyfish = ({ size = 50 }) => (
    <svg width={size} height={size * 1.4} viewBox="0 0 50 70">
        {/* Bell */}
        <ellipse cx="25" cy="18" rx="18" ry="15" fill="url(#jellyFill1)" opacity="0.8" />
        <ellipse cx="25" cy="20" rx="14" ry="10" fill="#fff" opacity="0.3" />

        {/* Tentacles */}
        <path d="M12,30 Q10,45 15,60" stroke="#e9d8fd" strokeWidth="2" fill="none" opacity="0.7">
            <animate attributeName="d" values="M12,30 Q10,45 15,60;M12,30 Q14,45 10,60;M12,30 Q10,45 15,60" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M20,32 Q18,50 22,65" stroke="#e9d8fd" strokeWidth="2" fill="none" opacity="0.6">
            <animate attributeName="d" values="M20,32 Q18,50 22,65;M20,32 Q22,50 18,65;M20,32 Q18,50 22,65" dur="2.5s" repeatCount="indefinite" />
        </path>
        <path d="M25,33 Q25,50 25,68" stroke="#d6bcfa" strokeWidth="3" fill="none" opacity="0.8">
            <animate attributeName="d" values="M25,33 Q23,50 27,68;M25,33 Q27,50 23,68;M25,33 Q23,50 27,68" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M30,32 Q32,50 28,65" stroke="#e9d8fd" strokeWidth="2" fill="none" opacity="0.6">
            <animate attributeName="d" values="M30,32 Q32,50 28,65;M30,32 Q28,50 32,65;M30,32 Q32,50 28,65" dur="2.5s" repeatCount="indefinite" />
        </path>
        <path d="M38,30 Q40,45 35,60" stroke="#e9d8fd" strokeWidth="2" fill="none" opacity="0.7">
            <animate attributeName="d" values="M38,30 Q40,45 35,60;M38,30 Q36,45 40,60;M38,30 Q40,45 35,60" dur="2s" repeatCount="indefinite" />
        </path>

        <defs>
            <radialGradient id="jellyFill1" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#faf5ff" />
                <stop offset="50%" stopColor="#e9d8fd" />
                <stop offset="100%" stopColor="#b794f4" />
            </radialGradient>
        </defs>
    </svg>
);

export const Anglerfish = ({ size = 60 }) => (
    <svg width={size} height={size * 0.7} viewBox="0 0 60 42">
        {/* Body */}
        <ellipse cx="30" cy="25" rx="20" ry="15" fill="#1a202c" />

        {/* Mouth */}
        <path d="M10,20 Q5,25 10,30 L20,25 Z" fill="#2d3748" />
        <path d="M8,22 L18,25 M8,28 L18,25" stroke="#fff" strokeWidth="1" />

        {/* Teeth */}
        <path d="M10,22 L12,25 L10,25 M14,21 L16,24 L14,25 M18,22 L19,24" stroke="#fff" strokeWidth="1.5" fill="none" />
        <path d="M10,28 L12,25 M14,29 L15,26" stroke="#fff" strokeWidth="1.5" fill="none" />

        {/* Eye */}
        <circle cx="25" cy="20" r="5" fill="#fbd38d" />
        <circle cx="24" cy="19" r="2" fill="#1a202c" />

        {/* Lure */}
        <path d="M15,12 Q20,5 25,8" stroke="#4a5568" strokeWidth="1.5" fill="none" />
        <circle cx="25" cy="8" r="4" fill="#faf089">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="25" cy="8" r="2" fill="#fff">
            <animate attributeName="r" values="2;3;2" dur="1s" repeatCount="indefinite" />
        </circle>

        {/* Fins */}
        <path d="M45,15 Q55,10 50,20" fill="#2d3748" />
        <path d="M45,35 Q55,40 50,30" fill="#2d3748" />
        <path d="M30,38 Q35,45 40,38" fill="#2d3748" />

        {/* Tail */}
        <path d="M48,25 Q60,20 55,25 Q60,30 48,25" fill="#2d3748">
            <animateTransform attributeName="transform" type="rotate" values="0 48 25;5 48 25;0 48 25;-5 48 25;0 48 25" dur="0.5s" repeatCount="indefinite" />
        </path>
    </svg>
);
