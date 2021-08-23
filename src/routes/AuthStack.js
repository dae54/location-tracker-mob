import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/Authentication/SignInScreen';
import CreateAccountScreen from '../screens/Authentication/CreateAccount';

const Stack = createStackNavigator();

export const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="sign_in" options={{ headerShown: false }} component={SignInScreen} />
            <Stack.Screen name="create_account" options={{ headerShown: false }} component={CreateAccountScreen} />
        </Stack.Navigator>
    );
};