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
    })
}));

export default useSimulationStore;
