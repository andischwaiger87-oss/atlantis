import { create } from 'zustand';

const useSimulationStore = create((set) => ({
    isSimulationActive: false,
    temperatureAnomaly: 1.2, // Default current anomaly
    oceanPh: 8.1, // Default pre-industrial
    pollutionLevel: 50, // 0-100 abstract scale

    setSimulationActive: (isActive) => set({ isSimulationActive: isActive }),
    setTemperature: (temp) => set({ temperatureAnomaly: temp }),
    setPh: (ph) => set({ oceanPh: ph }),
    setPollution: (level) => set({ pollutionLevel: level }),

    resetSimulation: () => set({
        temperatureAnomaly: 1.2,
        oceanPh: 8.1,
        pollutionLevel: 50
    }),

    // Derived Metrics (Getters)
    getEcosystemStats: () => {
        const state = useSimulationStore.getState();
        const t = state.temperatureAnomaly;
        const ph = state.oceanPh;
        const p = state.pollutionLevel;

        // 1. Oxygen (Solubility drops ~7% per degree + Pollution consumption)
        // Baseline 100. Max Penalty ~50.
        const oxygen = Math.max(0, 100 - (t * 10) - (p * 0.2));

        // 2. Food Supply (Plankton health)
        // Crashes if pH < 7.8 or Temp > 3.0
        let planktonHealth = 100;
        if (ph < 7.9) planktonHealth -= (7.9 - ph) * 200; // Acidification crash
        if (t > 2.0) planktonHealth -= (t - 2.0) * 40; // Heat crash
        if (p > 60) planktonHealth -= (p - 60);
        const foodSupply = Math.max(0, planktonHealth);

        // 3. Calcification (Shell formation)
        // Healthy at 8.1. Zero at 7.6.
        const calcification = Math.max(0, (ph - 7.5) / (8.1 - 7.5) * 100);

        return { oxygen, foodSupply, calcification };
    }
}));

export default useSimulationStore;
