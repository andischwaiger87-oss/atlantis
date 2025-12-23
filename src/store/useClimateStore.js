import { create } from 'zustand';

export const useClimateStore = create((set, get) => ({
    year: 2025,
    minYear: 1950,
    maxYear: 2100,

    // Navigation State
    depth: 0, // 0 = Sea Level (Horizon). Positive = Space, Negative = Underwater
    setDepth: (depth) => set({ depth }),

    // Simulation Configuration (User inputs)
    config: {
        co2EmissionRate: 1.0, // Multiplier
        renewableAdoption: 0.5, // 0 to 1
        protectionPolicy: 0.2, // 0 to 1
    },

    updateConfig: (key, value) => set((state) => ({
        config: { ...state.config, [key]: value }
    })),

    setYear: (year) => set({ year }),

    // Derived Simulation State (simplified logic for now)
    getSimulationState: () => {
        const { year, config } = get();
        const yearsElapsed = year - 2020;

        // Base Calculations
        const tempAnomaly = Math.max(0, yearsElapsed * 0.05 * config.co2EmissionRate);
        const seaLevelRise = Math.max(0, yearsElapsed * 3); // cm
        const pollution = Math.max(0, 100 + yearsElapsed * 2 - (yearsElapsed * 5 * config.protectionPolicy)); // arbitrary unit

        return {
            tempAnomaly,
            seaLevelRise,
            pollution,
            oceanAcidity: 8.1 - (yearsElapsed * 0.002),
        };
    }
}));
