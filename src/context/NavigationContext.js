import React, { createContext, useState, useContext } from 'react';

const TabBarVisibilityContext = createContext();

const TabBarVisibilityProvider = ({ children }) => {
    const [tabBarVisible, setTabBarVisible] = useState(true);

    const setVisible = async () => {
        setTabBarVisible(true);
    };
    const setHidden = async () => {
        setTabBarVisible(false);
    };

    return (
        <TabBarVisibilityContext.Provider value={{ tabBarVisible, setVisible, setHidden }}>
            {children}
        </TabBarVisibilityContext.Provider>
    );
};

function useTabBarVisibility() {
    const context = useContext(TabBarVisibilityContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

export { TabBarVisibilityContext, TabBarVisibilityProvider, useTabBarVisibility };
