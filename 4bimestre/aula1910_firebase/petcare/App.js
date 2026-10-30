import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/login/Login';
import Cadastro from './screens/cadastro/Cadastro';
import Home from './screens/home/Home';
import CadastrarPet from './screens/cadastrarPet/CadastrarPet';
import MeusPets from './screens/meusPets/MeusPets';
import EditarPet from './screens/editarPet/EditarPet';
import Sobre from './screens/sobre/Sobre';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CadastrarPet" component={CadastrarPet} />
        <Stack.Screen name="MeusPets" component={MeusPets} />
        <Stack.Screen name="EditarPet" component={EditarPet} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}