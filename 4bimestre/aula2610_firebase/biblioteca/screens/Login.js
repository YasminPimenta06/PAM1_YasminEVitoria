import {
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import estilos from './estilo';


export default function Login({ navigation }) { 
    
    const [email, setEmail] = useState(''); 
    const [senha, setSenha] = useState(''); 
    
    
 async function fazerLogin() {
  console.log('BOTÃO ENTRAR CLICADO!');

  if (!email.trim() || !senha) {
    window.alert('Digite o e-mail e a senha.');
    return;
  }

  try {
    console.log('Tentando entrar no Firebase...');

    const usuario = await signInWithEmailAndPassword(
      auth,
      email.trim(),
      senha
    );

    console.log('LOGIN REALIZADO!', usuario.user.email);

    window.alert('Login realizado com sucesso!');

    navigation.replace('Home');

  } catch (error) {
    console.log('ERRO NO LOGIN:', error.code, error.message);

    window.alert(
      'Erro ao entrar: ' + (error.code || error.message)
    );
  }
}
return ( 
  <View style={estilos.container}> 
  
  <Image 
    source={{ 
     uri: 'https://reactnative.dev/docs/assets/p_cat1.png', 
    }} 
    style={estilos.imagem} 
    /> 
    
    <Text style={estilos.texto}> 
        Digite o e-mail 
    </Text> 
    
    <TextInput 
     placeholder="fulano@hotmail.com" 
     style={estilos.input} 
     value={email} 
     onChangeText={setEmail} 
     keyboardType="email-address" 
     autoCapitalize="none" 
    /> 
    
    <Text style={estilos.texto}> 
        Senha
    </Text>
    
    <TextInput 
     placeholder="abc@123" 
     secureTextEntry={true} 
     style={estilos.input} 
     value={senha} 
     onChangeText={setSenha} 
    /> 
    
    <View style={estilos.botao}> 
        <Button 
        title="Entrar" 
        onPress={fazerLogin} 
        /> 
        </View> 

        <TouchableOpacity 
         onPress={() => navigation.navigate('Home')} 
        > 
        <Text style={estilos.cadastro}> 
            Não possui uma conta? Cadastre-se 
        </Text> 
       </TouchableOpacity> 

        </View> 
      );
    }