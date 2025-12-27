import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useClimateStore } from '../store/useClimateStore';
import { ZONES } from '../data/zones';
import Zone from './Zone';
import InfoModal from './InfoModal';
import { RocketHull, SubmarineHull } from './SVGIllustrations';

const METER_TO_PX = 8;
const FRICTION = 0.88;
const ACCEL = 3;
const WHEEL_SENSITIVITY = 0.6;
const MAX_SPEED = 100;

// Flying states use the EXACT SAME SVG logic as the station versions
const FlyingRocket = () => (
    <svg width="80" height="120" viewBox="0 0 80 120" style={{ overflow: 'visible' }}>
        <RocketHull includeFlame={true} />
    </svg>
);

const DivingSubmarine = () => (
    <svg width="120" height="80" viewBox="0 0 120 80" style={{ overflow: 'visible' }}>
        <g transform="translate(10, 0)">
            <SubmarineHull />
        </g>
        {/* Bubbles specific to diving state */}
        <circle cx="15" cy="50" r="2" fill="rgba(255,255,255,0.5)">
            <animate attributeName="cy" values="50;20;50" dur="1s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.5;0" dur="1s" repeatCount="indefinite" />
        </circle>
    </svg>
);

function WorldCanvas() {
    const depth = useClimateStore((state) => state.depth);
    const setDepth = useClimateStore((state) => state.setDepth);
    const [selectedObject, setSelectedObject] = useState(null);

    const velocity = useRef(0);
    const keysPressed = useRef({});
    const requestRef = useRef();
    const lastDepth = useRef(depth);
    const lastTouchY = useRef(null);

    // Create stars across all of space
    const stars = useMemo(() => {
        return Array.from({ length: 400 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 0.5,
            delay: Math.random() * 6,
            duration: Math.random() * 4 + 2,
            brightness: 0.3 + Math.random() * 0.7
        }));
    }, []);

    // Celestial bodies at different altitudes
    const celestialBodies = [
        { id: 'moon', x: 82, y: 18, size: 50, minDepth: 150, gradient: 'radial-gradient(circle at 30% 30%, #f7fafc, #cbd5e0, #718096)' },
        { id: 'sun', x: 12, y: 25, size: 70, minDepth: 400, gradient: 'radial-gradient(circle at 35% 35%, #fef3c7, #fbd38d, #ed8936)', glow: true },
        { id: 'earth', x: 45, y: 35, size: 90, minDepth: 1500, gradient: 'radial-gradient(circle at 35% 35%, #68d391, #4299e1, #2b6cb0, #1a365d)' }
    ];

    // Bubbles for underwater
    const bubbles = useMemo(() => {
        return Array.from({ length: 80 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            size: Math.random() * 7 + 2,
            delay: Math.random() * 20,
            duration: Math.random() * 12 + 8
        }));
    }, []);

    useEffect(() => {
        lastDepth.current = depth;
    }, [depth]);

    useEffect(() => {
        const handleDown = (e) => {
            if (['ArrowUp', 'ArrowDown', 'w', 's'].includes(e.key)) {
                e.preventDefault();
                keysPressed.current[e.key] = true;
            }
        };
        const handleUp = (e) => delete keysPressed.current[e.key];
        const handleWheel = (e) => {
            e.preventDefault();
            velocity.current -= e.deltaY * WHEEL_SENSITIVITY;
        };

        const handleTouchStart = (e) => {
            lastTouchY.current = e.touches[0].clientY;
        };

        const handleTouchMove = (e) => {
            if (lastTouchY.current === null) return;
            const currentY = e.touches[0].clientY;
            const deltaY = currentY - lastTouchY.current;

            // Inverted control for natural touch feel: Drag UP to go DOWN (deeper)
            // Drag UP = deltaY negative. We want velocity negative (deeper).
            // So we add deltaY.
            velocity.current += deltaY * 1.5; // Touch sensitivity multiplier

            lastTouchY.current = currentY;
        };

        const handleTouchEnd = () => {
            lastTouchY.current = null;
        };

        window.addEventListener('keydown', handleDown);
        window.addEventListener('keyup', handleUp);
        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('keydown', handleDown);
            window.removeEventListener('keyup', handleUp);
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    const update = () => {
        let accel = 0;
        if (keysPressed.current['ArrowUp'] || keysPressed.current['w']) accel += ACCEL;
        if (keysPressed.current['ArrowDown'] || keysPressed.current['s']) accel -= ACCEL;

        velocity.current = (velocity.current + accel) * FRICTION;
        velocity.current = Math.max(-MAX_SPEED, Math.min(MAX_SPEED, velocity.current));

        if (Math.abs(velocity.current) > 0.05) {
            const newDepth = lastDepth.current + velocity.current / METER_TO_PX;
            const clampedDepth = Math.max(-11000, Math.min(12000, newDepth));
            setDepth(clampedDepth);
            lastDepth.current = clampedDepth;
        } else {
            velocity.current = 0;
        }

        requestRef.current = requestAnimationFrame(update);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(update);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    const translateY = depth * METER_TO_PX;
    const isUnderwater = depth < -10;

    // Stars start appearing gradually from 20m altitude, fully visible at 200m
    const starOpacity = Math.min(1, Math.max(0, (depth - 20) / 180));

    // Vehicle visibility - appear just above/below horizon
    const showRocket = depth > 3;
    const showSubmarine = depth < -3;

    return (
        <div className="relative w-full h-full bg-[#050a15] overflow-hidden">

            {/* Stars - appear early and gradually */}
            {depth > 15 && (
                <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-700"
                    style={{ opacity: starOpacity }}
                >
                    {stars.map(star => (
                        <div
                            key={star.id}
                            className="absolute rounded-full"
                            style={{
                                left: `${star.x}%`,
                                top: `${star.y}%`,
                                width: `${star.size}px`,
                                height: `${star.size}px`,
                                backgroundColor: '#ffffff',
                                opacity: star.brightness,
                                animation: `twinkle ${star.duration}s ease-in-out infinite`,
                                animationDelay: `${star.delay}s`
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Celestial Bodies - fade in at different altitudes */}
            {celestialBodies.map(body => {
                const bodyOpacity = Math.min(1, Math.max(0, (depth - body.minDepth) / 400));
                return depth > body.minDepth - 100 && (
                    <div
                        key={body.id}
                        className="absolute pointer-events-none transition-opacity duration-1000"
                        style={{
                            left: `${body.x}%`,
                            top: `${body.y}%`,
                            opacity: bodyOpacity,
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        <div
                            className="rounded-full"
                            style={{
                                width: body.size,
                                height: body.size,
                                background: body.gradient,
                                boxShadow: body.glow
                                    ? '0 0 80px 30px rgba(251,211,141,0.35)'
                                    : '0 0 30px 8px rgba(255,255,255,0.08)'
                            }}
                        />
                    </div>
                );
            })}

            {/* Bubbles underwater */}
            {isUnderwater && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {bubbles.map(bubble => (
                        <div
                            key={bubble.id}
                            className="absolute rounded-full"
                            style={{
                                left: `${bubble.x}%`,
                                bottom: `-25px`,
                                width: `${bubble.size}px`,
                                height: `${bubble.size}px`,
                                background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), rgba(255,255,255,0.05))',
                                animation: `rise ${bubble.duration}s linear infinite`,
                                animationDelay: `${bubble.delay}s`
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Light rays underwater - more visible */}
            {isUnderwater && depth > -500 && (
                <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.25 + Math.max(0, (depth + 500) / 1000) }}>
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute top-0 bg-gradient-to-b from-cyan-300/50 to-transparent"
                            style={{
                                left: `${8 + i * 12}%`,
                                width: '5%',
                                height: '65%',
                                transform: `rotate(${-6 + i * 1.5}deg)`,
                                animation: `lightray ${5 + i * 0.4}s ease-in-out infinite`,
                                animationDelay: `${i * 0.25}s`
                            }}
                        />
                    ))}
                </div>
            )}

            {/* World Container - 0m is at screen center */}
            <div
                className="absolute w-full left-0"
                style={{ top: '50%', transform: `translateY(${translateY}px)` }}
            >
                {ZONES.map((zone) => (
                    <Zone
                        key={zone.id}
                        zone={zone}
                        onObjectSelect={setSelectedObject}
                    />
                ))}
            </div>

            {/* Flying Rocket - identical to pad */}
            {showRocket && (
                <div
                    className="fixed top-1/2 pointer-events-none z-50"
                    style={{ left: '10%', transform: 'translate(-50%, -50%) scale(1.1)' }}
                >
                    <FlyingRocket />
                </div>
            )}

            {/* Diving Submarine - identical to dock */}
            {showSubmarine && (
                <div
                    className="fixed top-1/2 pointer-events-none z-50"
                    style={{ left: '26%', transform: 'translate(-50%, -50%) scale(1.0)' }}
                >
                    <DivingSubmarine />
                </div>
            )}

            {selectedObject && (
                <InfoModal object={selectedObject} onClose={() => setSelectedObject(null)} />
            )}

            <style>{`
        @keyframes rise {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          8% { opacity: 0.7; }
          50% { transform: translateY(-50vh) translateX(12px); }
          92% { opacity: 0.1; }
          100% { transform: translateY(-120vh) translateX(-8px); opacity: 0; }
        }
        @keyframes lightray {
          0%, 100% { opacity: 0.2; transform: translateX(0) rotate(-3deg); }
          50% { opacity: 0.45; transform: translateX(15px) rotate(3deg); }
        }
      `}</style>
        </div>
    );
}

export default WorldCanvas;
