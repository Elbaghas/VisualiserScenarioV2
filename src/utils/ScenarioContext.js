import React, { createContext, useState } from 'react';

export const ScenarioContext = createContext();

export const ScenarioProvider = ({ children }) => {
    const [scenarioName, setScenarioName] = useState('');

    const setScenario = (name) => {
        setScenarioName(name);
    };

    return (
        <ScenarioContext.Provider value={{ scenarioName, setScenario }}>
            {children}
        </ScenarioContext.Provider>
    );
};