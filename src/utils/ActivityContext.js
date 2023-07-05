import React, { createContext, useState } from 'react';

export const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
    const [activityId, setActivityId] = useState('');

    const setActivity = (id) => {
        setActivityId(id);
    };

    return (
        <ActivityContext.Provider value={{ activityId, setActivity }}>
            {children}
        </ActivityContext.Provider>
    );
};