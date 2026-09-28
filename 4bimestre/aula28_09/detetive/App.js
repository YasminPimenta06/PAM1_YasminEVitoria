import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import CasoScreen from './screens/CasoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="Caso" 
          component={CasoScreen} 
          options={{ title: 'Caso #001' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}