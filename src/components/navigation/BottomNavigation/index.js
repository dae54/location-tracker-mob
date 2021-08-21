import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { HomeScreenStackNavigator } from '../StackNavigation/HomeScreenStack';
import { DiscoverScreenStackNavigator } from '../StackNavigation/DiscoverScreenStack';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator >
            <Tab.Screen
                name="Home Page"
                component={HomeScreenStackNavigator}
                options={
                    {
                        tabBarHideOnKeyboard: true,
                        headerShown: false,
                        tabBarIcon: ({ size, color }) => {
                            return (
                                <MaterialCommunityIcons
                                    name="home"
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                    }
                }
            />
            <Tab.Screen
                name="Discover"
                component={DiscoverScreenStackNavigator}
                options={
                    {
                        tabBarHideOnKeyboard: true,
                        headerShown: false,
                        tabBarIcon: ({ size, color }) => {
                            return (
                                <MaterialCommunityIcons
                                    name="dns"
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                    }
                }
            />
        </Tab.Navigator>
    );
}
