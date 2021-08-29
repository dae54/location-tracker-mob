import AsyncStorage from '@react-native-community/async-storage';
import React, { createContext, useState, useContext } from 'react';

const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
    const [mapRadius, setMapRadius] = useState();

    async function loadStorageSettings() {
        try {
            const _mapRadiusStr = await AsyncStorage.getItem('@mapRadius');
            if (_mapRadiusStr) {
                setMapRadius(JSON.parse(_mapRadiusStr));
            } else {
                // INITIAL DEFAULT MAP RADIUS
                setMapRadius(1000)
                AsyncStorage.setItem('@mapRadius', JSON.stringify(1000))
            }
        } catch (error) {
        } finally {
        }
    }

    async function saveSettings({ key, value }) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
        } finally {
            loadStorageSettings()
        }
    }

    return (
        <SettingsContext.Provider value={{ mapRadius, loadStorageSettings, saveSettings }}>
            {children}
        </SettingsContext.Provider>
    );
};

function useSettings() {
    const context = useContext(SettingsContext);

    if (!context) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }

    return context;
}

export { SettingsContext, SettingsProvider, useSettings };
