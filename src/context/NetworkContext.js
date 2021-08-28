import React, { createContext, useState, useContext, useEffect } from 'react';
import NetInfo from "@react-native-community/netinfo";
import syncData from '../api/syncData';
import AsyncStorage from '@react-native-community/async-storage';

const NetworkContext = createContext();

const NetworkProvider = ({ children }) => {
    // const [networkStatus, setNetworkStatus] = useState({ internetReachable: false, connectionType:'', });
    const [isOnline, setIsOnline] = useState(false)

    useEffect(() => {
        // Subscribe
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsOnline(state.isConnected)
            console.log("Is connected?", state.isConnected);
            console.log("Is internet reachable?", state.isInternetReachable);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    useEffect(() => {
        if (isOnline)
            syncData()
        // AsyncStorage.removeItem('@pendingMessages');
        // console.log('done')

    }, [isOnline])


    return (
        <NetworkContext.Provider value={{ isOnline, setIsOnline }}>
            {children}
        </NetworkContext.Provider>
    );
};

function useNetwork() {
    const context = useContext(NetworkContext);

    if (!context) {
        throw new Error('useNetwork must be used within an NetworkProvider');
    }

    return context;
}

export { NetworkContext, NetworkProvider, useNetwork };
