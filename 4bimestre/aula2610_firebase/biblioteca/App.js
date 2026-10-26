import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import Home from './screens/Home';
import Cadastro from './screens/Cadastro';
import Editar from './screens/Editar';



const Stack = createNativeStackNavigator();


export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#101014',
          },

          headerTintColor: '#FFFFFF',

          headerTitleStyle: {
            fontWeight: 'bold',
          },

          contentStyle: {
            backgroundColor: '#101014',
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />


        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />


        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Editar"
          component={Editar}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );
}