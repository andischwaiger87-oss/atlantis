import React from 'react';
import InteractiveObject from './InteractiveObject';

const METER_TO_PX = 8;

function Zone({ zone, onObjectSelect }) {
    const topPx = -zone.maxDepth * METER_TO_PX;
    const heightPx = (zone.maxDepth - zone.minDepth) * METER_TO_PX;

    // Don't show title for horizon zone (it's a thin transition zone)
    const showTitle = zone.id !== 'horizon';

    // Calculate proper position for label - at TOP of zone
    const labelPosition = zone.minDepth < 0 ? 'top' : 'top';

    return (
        <div
            className="absolute w-full"
            style={{
                top: `${topPx}px`,
                height: `${heightPx}px`,
                background: zone.background || '#000'
            }}
        >
            {/* Zone Label - Professional AAA Styling */}
            {showTitle && heightPx > 150 && (
                <div
                    className="absolute pointer-events-none select-none z-[5] pl-6 pt-10"
                    style={{
                        top: 0,
                        left: 0
                    }}
                >
                    <div className="bg-white/5 backdrop-blur-md px-4 py-2 rounded-r-lg border-l-2 border-white/20">
                        <h2 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em]">
                            {zone.title}
                        </h2>
                        {zone.subtitle && (
                            <span className="text-[10px] text-white/20 tracking-widest block mt-0.5 font-medium">
                                {zone.subtitle}
                            </span>
                        )}
                    </div>
                </div>
            )}

            {/* Interactive Objects */}
            {zone.objects && zone.objects.map(obj => (
                <InteractiveObject
                    key={obj.id}
                    object={obj}
                    onClick={onObjectSelect}
                />
            ))}
        </div>
    );
}

export default Zone;
