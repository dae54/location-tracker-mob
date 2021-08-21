import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Reports from "../../../screens/Reports";

const Stack = createStackNavigator();

const ReportScreenStackNavigator = () => {
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
            <Stack.Screen options={{ headerShown: false }} name="stock" component={Reports} />
            {/* <Stack.Screen name="register_product" options={{ headerTitle: 'Register Product', headerTitleStyle: { color: 'black' } }} component={RegisterProduct} /> */}
        </Stack.Navigator>
    );
}

export { ReportScreenStackNavigator };