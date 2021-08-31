import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import HomeScreenStackNavigator from '../StackNavigation/HomeScreenStack';
import DiscoverScreenStackNavigator from '../StackNavigation/DiscoverScreenStack';
import { useTabBarVisibility } from '../../../context/NavigationContext';
import Settings from '../../../screens/Settings';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    const { tabBarVisible } = useTabBarVisibility()

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
                name="Assistance"
                component={DiscoverScreenStackNavigator}
                options={
                    {
                        tabBarHideOnKeyboard: true,
                        headerShown: false,
                        tabBarStyle: {
                            display: tabBarVisible ? 'flex' : 'none'
                        },
                        unmountOnBlur: true,
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
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={
                    {
                        tabBarHideOnKeyboard: true,
                        headerShown: false,
                        tabBarStyle: {
                            display: tabBarVisible ? 'flex' : 'none'
                        },
                        unmountOnBlur: true,
                        tabBarIcon: ({ size, color }) => {
                            return (
                                <Ionicons
                                    name="setting"
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
