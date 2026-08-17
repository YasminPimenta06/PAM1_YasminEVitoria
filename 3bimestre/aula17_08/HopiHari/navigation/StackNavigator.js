import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-navigation/native-stack';

import Login from '../screens/Home';
import Login from '../screens/List';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <NavigationContainer>
            <StackNavigator>

                <Stack.Screen
                name ="Home"
                component={Home}
                />

                <Stack.Screen
                name="List"
                component={List}
                />
            </StackNavigator>

        </NavigationContainer>
    );
}
