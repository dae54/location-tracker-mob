import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/Authentication/SignInScreen';

const Stack = createStackNavigator();

export const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="sign_in" component={SignInScreen} />
        </Stack.Navigator>
    );
};