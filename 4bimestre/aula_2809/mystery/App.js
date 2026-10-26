import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import Home from './screens/Home';
import Caso from './screens/Caso';
import Suspeitos from './screens/Suspeitos';
import Evidencias from './screens/Evidencias';
import Depoimentos from './screens/Depoimentos';
import Acusacao from './screens/Acusacao';
import Resultado from './screens/Resultado';
import Cadastro from './screens/Cadastro';
import Editar from './screens/Editar';



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