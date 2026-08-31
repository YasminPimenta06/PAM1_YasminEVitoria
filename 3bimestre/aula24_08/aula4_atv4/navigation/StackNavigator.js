import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login/Login";
import Home from "../screens/Home/Home";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
      />

      <Stack.Screen
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
}
