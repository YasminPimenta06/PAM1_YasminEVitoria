import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Caso from './screens/Caso';
import Suspeitos from './screens/Suspeitos';
import Evidencias from './screens/Evidencias';
import Depoimentos from './screens/Depoimentos';
import Acusacao from './screens/Acusacao';
import Resultado from './screens/Resultado';


const Stack = createNativeStackNavigator();


export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Home"
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
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />


        <Stack.Screen
          name="Caso"
          component={Caso}
          options={{
            title: 'Caso #001',
          }}
        />


        <Stack.Screen
          name="Suspeitos"
          component={Suspeitos}
          options={{
            title: 'Suspeitos',
          }}
        />


        <Stack.Screen
          name="Evidencias"
          component={Evidencias}
          options={{
            title: 'Evidências',
          }}
        />


        <Stack.Screen
          name="Depoimentos"
          component={Depoimentos}
          options={{
            title: 'Depoimentos',
          }}
        />


        <Stack.Screen
          name="Acusacao"
          component={Acusacao}
          options={{
            title: 'Acusação',
          }}
        />


        <Stack.Screen
          name="Resultado"
          component={Resultado}
          options={{
            title: 'Resultado',
            headerBackVisible: false,
          }}
        />


      </Stack.Navigator>

    </NavigationContainer>

  );
}