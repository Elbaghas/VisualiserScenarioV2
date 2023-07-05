import React, { createContext, useState } from 'react';

export const ScenarionCreateContext = createContext();

export const SceanarioCreateProvider = ({ children }) => {
    const [scenarioId, setScenarioId] = useState('');

    const setScenario = (id) => {
        setScenarioId(id);
    }

    return (
        <ScenarionCreateContext.Provider value={{
            scenarioId, setScenario
        }}>
            {children}
        </ScenarionCreateContext.Provider >
    );
};


