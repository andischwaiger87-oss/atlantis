import React, { useState } from 'react';
import * as Icons from 'lucide-react';

function Avatar({ velocity, isSpace }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    // Dynamically pick icon
    // Space = Rocket, Sea = Submarine (using 'Ship' or custom generic shape if prefered)
    // Using 'Navigation' icon for Submarine to look more techy/directional if Ship is too boat-like
    const LucideIcon = isSpace ? Icons.Rocket : Icons.Navigation;

    // Physics Tilt
    const tilt = Math.max(-20, Math.min(20, velocity * 0.3));

    // Dynamic Scale - 'Breathing' when idle, elongated when moving
    const isMoving = Math.abs(velocity) > 1;
    const activityScale = isMoving ? 1 + Math.abs(velocity) * 0.002 : 1;

    return (
        <div
            className="relative w-full h-full flex items-center justify-center transition-transform duration-300 ease-out cursor-pointer"
            style={{
                transform: `rotate(${isSpace ? -90 + tilt : (isSpace ? 0 : 90) + tilt}deg) scale(${activityScale})`
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsActive(!isActive)}
        >

            {/* Scanner Range Ring (Visible on Hover or Active) */}
            <div className={`
                absolute inset-[-40px] border border-accent/20 rounded-full
                transition-all duration-500
                ${isHovered || isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}
            `}>
                <div className="absolute inset-0 animate-[spin_4s_linear_infinite] border-t border-accent/60 rounded-full" />
            </div>

            {/* Main Hull Body */}
            <div className={`
                relative p-8 rounded-[2rem] border-2 bg-[#0a1a2f] backdrop-blur-xl transition-all duration-300
                ${isHovered ? 'border-accent shadow-[0_0_40px_rgba(0,255,255,0.4)]' : 'border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.5)]'}
                ${!isMoving ? 'animate-breathing' : ''}
                flex items-center justify-center z-20 overflow-hidden
            `}>

                {/* Tech Detail: Grid Background inside hull */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_var(--color-accent)_1px,_transparent_1px)] bg-[length:4px_4px]" />

                <LucideIcon
                    size={64}
                    strokeWidth={1.5}
                    className={`
                    relative z-10 transition-colors duration-300
                    ${isHovered ? 'text-white' : 'text-accent'}
                    ${isSpace && 'transform -rotate-90'} /* Fix rocket orientation */
                    ${!isSpace && 'transform -rotate-90'} /* Fix nav arrow orientation */
                  `}
                />

                {/* Status Light */}
                <div className={`
                    absolute top-4 right-4 w-2 h-2 rounded-full
                    ${isMoving ? 'bg-green-400 animate-pulse' : 'bg-yellow-400'}
                `} />
            </div>

            {/* Thruster Plume */}
            <div className={`
                absolute -z-10 transition-all duration-200
                ${isSpace ? 'left-[-30px] top-1/2 -translate-y-1/2' : 'bottom-[-30px] left-1/2 -translate-x-1/2'}
                ${isMoving ? 'opacity-100 scale-100' : 'opacity-30 scale-50'}
            `}>
                <div className={`
                    ${isSpace ? 'w-32 h-6 bg-gradient-to-r' : 'w-6 h-32 bg-gradient-to-t'}
                    from-accent to-transparent blur-lg rounded-full opacity-80
                 `} />
            </div>

            {/* Interaction Tooltip */}
            {isHovered && (
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 glass-panel px-3 py-1 bg-black/90 border-accent/50 whitespace-nowrap z-30 pointer-events-none transform -rotate-90 md:rotate-0">
                    <span className="text-[10px] font-bold font-mono text-accent uppercase tracking-widest">
                        {isActive ? 'SYSTEM: ONLINE' : 'KLICK FUR STATUS'}
                    </span>
                </div>
            )}
        </div>
    );
}

export default Avatar;
