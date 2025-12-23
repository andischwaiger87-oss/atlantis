import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { useClimateStore } from '../store/useClimateStore';
import * as SVGs from './SVGIllustrations';

// Map object IDs to custom SVG components
const SVG_COMPONENTS = {
    'rocket': SVGs.RocketLaunchPad,
    'submarine-dock': SVGs.SubmarineDock,
    'oil-rig': SVGs.OilRig,
    'wind-farm': SVGs.WindTurbine,
    'ship': SVGs.CargoShip,
    'turtle': SVGs.SeaTurtle,
    'whale': SVGs.Whale,
    'jellyfish': SVGs.Jellyfish,
    'anglerfish': SVGs.Anglerfish,
};

// Empty launch pad (rocket has flown away) - only shows platform & tower
const EmptyLaunchPad = ({ size = 80 }) => (
    <svg width={size} height={size * 1.5} viewBox="0 0 80 120">
        <rect x="10" y="100" width="60" height="15" fill="#4a5568" rx="2" />
        <rect x="5" y="105" width="70" height="10" fill="#2d3748" rx="2" />
        <rect x="55" y="40" width="8" height="65" fill="#718096" />
        <rect x="53" y="35" width="12" height="10" fill="#a0aec0" />
        <rect x="50" y="60" width="18" height="3" fill="#cbd5e0" />
        <rect x="50" y="75" width="18" height="3" fill="#cbd5e0" />
        {/* Launch smoke */}
        <ellipse cx="35" cy="90" rx="18" ry="10" fill="#a0aec0" opacity="0.35">
            <animate attributeName="opacity" values="0.35;0.1;0.35" dur="2s" repeatCount="indefinite" />
            <animate attributeName="rx" values="18;28;18" dur="2s" repeatCount="indefinite" />
        </ellipse>
    </svg>
);

// Empty dock (submarine has dived)
const EmptyDock = ({ size = 80 }) => (
    <svg width={size * 1.2} height={size} viewBox="0 0 96 80">
        <rect x="0" y="50" width="96" height="12" fill="#4a5568" />
        <rect x="5" y="45" width="86" height="8" fill="#718096" />
        <rect x="10" y="55" width="6" height="25" fill="#2d3748" />
        <rect x="80" y="55" width="6" height="25" fill="#2d3748" />
        <rect x="75" y="20" width="4" height="30" fill="#f6ad55" />
        <rect x="60" y="18" width="20" height="4" fill="#f6ad55" />
        {/* Water ripples */}
        <ellipse cx="45" cy="58" rx="25" ry="5" fill="#4299e1" opacity="0.2">
            <animate attributeName="rx" values="20;35;20" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.25;0.08;0.25" dur="2s" repeatCount="indefinite" />
        </ellipse>
    </svg>
);

function InteractiveObject({ object, onClick }) {
    const [imageError, setImageError] = useState(false);
    const year = useClimateStore((state) => state.year);
    const depth = useClimateStore((state) => state.depth);
    const isExtinct = object.extinctionYear && year >= object.extinctionYear;

    const LucideIcon = Icons[object.icon] || Icons.Circle;

    // Asset paths - Use PNG for world icons as requested
    const assetPath = `/assets/objects/${object.id}.png`;
    const fallbackPath = `/assets/objects/${object.id}.webp`;

    // Vehicle state: show empty station when departed
    const rocketFlying = depth > 2;
    const subDiving = depth < -2;

    let CustomSVG = SVG_COMPONENTS[object.id];

    if (object.id === 'rocket' && rocketFlying) {
        CustomSVG = EmptyLaunchPad;
    } else if (object.id === 'submarine-dock' && subDiving) {
        CustomSVG = EmptyDock;
    }

    // Type colors with stronger glow
    const colors = {
        danger: { bg: 'rgba(255, 71, 87, 0.2)', border: '#ff4757', glow: 'rgba(255,71,87,0.5)' },
        success: { bg: 'rgba(46, 213, 115, 0.2)', border: '#2ed573', glow: 'rgba(46,213,115,0.5)' },
        vehicle: { bg: 'rgba(255, 165, 2, 0.2)', border: '#ffa502', glow: 'rgba(255,165,2,0.5)' },
        info: { bg: 'rgba(0, 212, 255, 0.2)', border: '#00d4ff', glow: 'rgba(0,212,255,0.5)' }
    };
    const c = colors[object.type] || colors.info;

    // Float animation
    const shouldFloat = !object.static && !isExtinct;
    const animDelay = (object.id.charCodeAt(0) % 5) * 0.5;
    const floatDuration = 4 + (object.id.charCodeAt(0) % 3);

    return (
        <div
            onClick={() => !isExtinct && onClick(object)}
            className={`
                absolute transform -translate-x-1/2 -translate-y-1/2
                transition-all duration-300 cursor-pointer group
                ${isExtinct ? 'opacity-20 grayscale pointer-events-none' : 'hover:scale-110'}
            `}
            style={{
                left: object.x,
                top: object.y,
                animation: shouldFloat ? `float ${floatDuration}s ease-in-out infinite` : 'none',
                animationDelay: shouldFloat ? `${animDelay}s` : '0s',
                zIndex: 10
            }}
        >
            {/* Hover glow pulse */}
            <div
                className="absolute inset-[-25px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: `radial-gradient(circle, ${c.glow} 0%, transparent 70%)`,
                    animation: 'pulse 2s ease-in-out infinite'
                }}
            />

            {/* PNG Asset with Fallback to SVG or Icon */}
            {!imageError ? (
                <div className="relative transition-transform duration-300 group-hover:scale-110 drop-shadow-2xl">
                    <img
                        src={assetPath}
                        alt={object.title}
                        style={{ width: object.size || 150, height: object.size || 150, objectFit: 'contain' }}
                        onError={() => setImageError(true)}
                    />
                </div>
            ) : CustomSVG ? (
                <div className="relative transition-transform duration-300 group-hover:scale-110 drop-shadow-2xl">
                    <CustomSVG size={object.size || 130} />
                </div>
            ) : (
                <div
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-md transition-all duration-300 group-hover:scale-115"
                    style={{
                        background: c.bg,
                        border: `2px solid ${c.border}`,
                        boxShadow: `0 0 35px ${c.glow}, 0 6px 20px rgba(0,0,0,0.4)`
                    }}
                >
                    <LucideIcon size={32} style={{ color: c.border }} className="drop-shadow-md" />
                </div>
            )}

            {/* Tooltip - ABOVE object with safe z-index */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-[9999]">
                <div className="bg-slate-900/95 border border-white/10 backdrop-blur-md px-4 py-2 rounded-xl whitespace-nowrap text-center shadow-2xl">
                    <span className="text-sm font-bold block text-white">{object.title}</span>
                    <span className="text-[10px] text-gray-400">Klicken für Details</span>
                </div>
            </div>
        </div>
    );
}

export default InteractiveObject;
