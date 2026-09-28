import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Brinquedos from '../screens/Brinquedos';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={Home}
        />

        <Stack.Screen
        name="Brinquedos"
        component={Brinquedos}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}