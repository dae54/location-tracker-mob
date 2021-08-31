import React, { createContext, useState, useContext, useEffect } from 'react';
import { RequestLocationPermission } from '../components/Permissions/'
import Geolocation from 'react-native-geolocation-service';

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState({ lat: '', lng: '' })
    const [hasLocationPermission, setHasLocationPermission] = useState(false)

    async function initializeLocationService() {
        await RequestLocationPermission()
            .then(status => {
                setHasLocationPermission(status)
                console.log('status', status)
                if (status) {
                    // syncUserLocation()
                }
            })

    }
    useEffect(() => {
        initializeLocationService()
    }, [])

    async function syncUserLocation() {
        try {
            // if (hasLocationPermission) {
            Geolocation.getCurrentPosition(
                (position) => {
                    console.log(position);
                    setLocation({ lat: position.coords.latitude, lng: position.coords.longitude })
                },
                (error) => {
                    // See error code charts below.
                    console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
            // }
        } catch (error) {

        }
    };

    return (
        <LocationContext.Provider value={{ location, hasLocationPermission, syncUserLocation, setHasLocationPermission }}>
            {children}
        </LocationContext.Provider>
    );
};

function useLocation() {
    const context = useContext(LocationContext);

    if (!context) {
        throw new Error('useLocation must be used within an LocationProvider');
    }

    return context;
}

export { LocationContext, LocationProvider, useLocation };