import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../../screens/Home";
// import SaleScreen from "../../../screens/Home/Sale";
// import SaleItem from "../../../screens/Home/Sale/SaleItem";

const Stack = createStackNavigator();

export default function HomeScreenStackNavigator() {
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
      <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="sale" component={SaleScreen} /> */}
      {/* <Stack.Screen name="SaleItem" options={{ headerShown: false }} component={SaleItem} /> */}
    </Stack.Navigator>
  );
}
