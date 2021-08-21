import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DiscoverScreen from "../../../screens/Discover";

const Stack = createStackNavigator();

const DiscoverScreenStackNavigator = () => {
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
            <Stack.Screen options={{ headerShown: false }} name="stock" component={DiscoverScreen} />
            {/* <Stack.Screen name="product_profile" options={{ headerTitle: 'Product Profile', headerTitleStyle: { color: 'black' }, headerShown: false }} component={ProductScreen} /> */}
            {/* <Stack.Screen name="register_product" options={{ headerTitle: 'Register Product', headerTitleStyle: { color: 'black' } }} component={RegisterProduct} /> */}
        </Stack.Navigator>
    );
}

export { DiscoverScreenStackNavigator };