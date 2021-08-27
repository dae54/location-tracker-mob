import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from "@react-navigation/stack";

import AllQuestions from '../../../screens/Assistance/AllQuestions'
import MyQuestions from '../../../screens/Assistance/MyQuestions'
import QuestionProfile from '../../../screens/Assistance/MyQuestions/QuestionProfile'
import { useAuth } from '../../../context/AuthContext';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default function AssistanceScreenStackNavigator() {
    const screenOptions = {
        headerStyle: {
            backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
        // headerShown: false,
    }
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen options={{ headerShown: false }} name="assist" component={TopNavigator} />
            <Stack.Screen options={{ headerShown: false }} name="question_profile" component={QuestionProfile} />
        </Stack.Navigator>
    );
}


function TopNavigator() {
    const { authData } = useAuth()
    if (authData.role === 1) {
        return (
            <Tab.Navigator>
                <Tab.Screen name="My Questions" component={MyQuestions} />
                <Tab.Screen name="All Questions" component={AllQuestions} />
            </Tab.Navigator>
        )
    } else {
        return (
            <Tab.Navigator>
                <Tab.Screen name="All Questions" component={AllQuestions} />
                <Tab.Screen name="Answered By Me" component={MyQuestions} />
            </Tab.Navigator>
        )
    }
}