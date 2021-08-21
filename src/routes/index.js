import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { useAuth } from '../context/AuthContext';
import Loading from '../components/utilities/Loading';

export default function Router() {
    const { authData, loading } = useAuth();

    if (loading) {
        return <Loading />;
    }
    return (
        <NavigationContainer>
            {authData ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};