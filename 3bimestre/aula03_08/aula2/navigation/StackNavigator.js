import {NavigationContainer } from '@react-navigation/native';
import {CreateNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Home from '../screens/Home';

const stack = CreateNativeStackNavigator();

export default function StackNavigator() {
    return (
        <NavigationContainer>
            <StackNavigator>

                <Stack.Screen
                name = "Login"
                component = {Login}
            />
               
                <Stack.Screen
                name = "Home"
                component = {Home}
            />

            </StackNavigator>
        </NavigationContainer>
    );
}