import React from 'react';
import { useClimateStore } from '../store/useClimateStore';

// Player vehicle that launches FROM the station
function PlayerVehicle() {
    const depth = useClimateStore((state) => state.depth);

    const isRocket = depth > 100; // Above horizon, rocket is flying
    const isSubmarine = depth < -100; // Below horizon, submarine is diving

    // At horizon (-100 to 100), vehicles are docked - don't show player vehicle
    if (!isRocket && !isSubmarine) return null;

    // Position: Rocket launches from left (10% where station is)
    // Submarine dives from left (28% where dock is)
    const leftPos = isRocket ? '10%' : '28%';

    return (
        <div
            className="fixed top-1/2 -translate-y-1/2 z-40 pointer-events-none transition-all duration-300"
            style={{ left: leftPos }}
        >
            {isRocket ? (
                // Rocket flying upward
                <svg width="50" height="80" viewBox="0 0 50 80" className="drop-shadow-2xl -translate-x-1/2">
                    {/* Rocket Body */}
                    <ellipse cx="25" cy="12" rx="10" ry="12" fill="#e53e3e" />
                    <rect x="15" y="12" width="20" height="40" fill="url(#rocketBody2)" />

                    {/* Window */}
                    <circle cx="25" cy="25" r="5" fill="#4299e1" />
                    <circle cx="25" cy="25" r="3" fill="#90cdf4" />

                    {/* Fins */}
                    <polygon points="15,52 5,65 15,60" fill="#e53e3e" />
                    <polygon points="35,52 45,65 35,60" fill="#e53e3e" />

                    {/* Engine */}
                    <rect x="19" y="52" width="12" height="6" fill="#2d3748" />

                    {/* Flame */}
                    <ellipse cx="25" cy="66" rx="8" ry="12" fill="#f6ad55" opacity="0.9">
                        <animate attributeName="ry" values="10;15;10" dur="0.15s" repeatCount="indefinite" />
                    </ellipse>
                    <ellipse cx="25" cy="70" rx="5" ry="8" fill="#fbd38d">
                        <animate attributeName="ry" values="6;10;6" dur="0.1s" repeatCount="indefinite" />
                    </ellipse>

                    <defs>
                        <linearGradient id="rocketBody2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#e2e8f0" />
                            <stop offset="50%" stopColor="#f7fafc" />
                            <stop offset="100%" stopColor="#cbd5e0" />
                        </linearGradient>
                    </defs>
                </svg>
            ) : isSubmarine ? (
                // Submarine diving down
                <svg width="90" height="45" viewBox="0 0 90 45" className="drop-shadow-2xl -translate-x-1/2">
                    {/* Hull */}
                    <ellipse cx="45" cy="22" rx="38" ry="14" fill="url(#subHull2)" />

                    {/* Window */}
                    <circle cx="20" cy="22" r="7" fill="#1a365d" />
                    <circle cx="20" cy="22" r="4" fill="#4299e1" />

                    {/* Conning Tower */}
                    <rect x="40" y="6" width="16" height="11" rx="3" fill="#2c5282" />
                    <rect x="46" y="1" width="4" height="7" fill="#4a5568" />

                    {/* Propeller */}
                    <g>
                        <animateTransform attributeName="transform" type="rotate" from="0 85 22" to="360 85 22" dur="0.3s" repeatCount="indefinite" />
                        <ellipse cx="85" cy="22" rx="3" ry="7" fill="#1a365d" />
                    </g>

                    {/* Bubbles */}
                    <circle cx="12" cy="32" r="2" fill="rgba(255,255,255,0.4)">
                        <animate attributeName="cy" values="32;42;32" dur="1s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.4;0;0.4" dur="1s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="22" cy="35" r="1.5" fill="rgba(255,255,255,0.3)">
                        <animate attributeName="cy" values="35;45;35" dur="0.8s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.3;0;0.3" dur="0.8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="6" cy="28" r="1" fill="rgba(255,255,255,0.3)">
                        <animate attributeName="cy" values="28;40;28" dur="1.2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.3;0;0.3" dur="1.2s" repeatCount="indefinite" />
                    </circle>

                    <defs>
                        <linearGradient id="subHull2" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#4299e1" />
                            <stop offset="100%" stopColor="#2b6cb0" />
                        </linearGradient>
                    </defs>
                </svg>
            ) : null}
        </div>
    );
}

export default PlayerVehicle;
