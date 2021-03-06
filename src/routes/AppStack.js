import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from '../components/navigation/BottomNavigation';


const Stack = createStackNavigator();

export const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home Screen" component={BottomTabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};