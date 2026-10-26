import { Text, View, TextInput, Button, Image, TouchableOpacity, Alert,} from 'react-native'; 

import { useState } from 'react'; 

import { createUserWithEmailAndPassword } from 'firebase/auth'; 
import { doc, setDoc } from 'firebase/firestore'; 

import { auth, db } from '../firebase/firebase';

import estilos from './estilo'; 

export default function Cadastro({ navigation }) {
     const [nome, setNome] = useState(''); 
     const [email, setEmail] = useState(''); 
     const [senha, setSenha] = useState(''); 
     const [confirmarSenha, setConfirmarSenha] = useState(''); 
     
     async function cadastrar() {

  if (!nome.trim() || !email.trim() || !senha || !confirmarSenha) {
    window.alert('Preencha todos os campos.');
    return;
  }

  if (senha !== confirmarSenha) {
    window.alert('As senhas não são iguais.');
    return;
  }

  try {
    console.log('Iniciando cadastro...');

    const usuarioCriado = await createUserWithEmailAndPassword(
      auth,
      email.trim(),
      senha
    );

    const uid = usuarioCriado.user.uid;

    console.log('Usuário criado no Authentication:', uid);

    try {
      await setDoc(
        doc(db, 'usuarios', uid),
        {
          nome: nome.trim(),
          email: email.trim(),
        }
      );

      console.log('Dados salvos no Firestore!');

    } catch (erroFirestore) {
      console.error(
        'ERRO NO FIRESTORE:',
        erroFirestore.code,
        erroFirestore.message
      );

      window.alert(
        'A conta foi criada, mas não foi possível salvar os dados no Firestore: ' +
        erroFirestore.code
      );

      return;
    }

    window.alert('Cadastro realizado com sucesso!');

    navigation.replace('Home');

  } catch (error) {

    console.error(
      'ERRO NO CADASTRO:',
      error.code,
      error.message
    );

    window.alert(
      'Erro ao cadastrar: ' + (error.code || error.message)
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
    
    <Text style={estilos.titulo}> 
        Criar uma conta 
        </Text> 
    
    <Text style={estilos.texto}> 
        Nome 
    </Text> 
    <TextInput 
    placeholder="Digite seu nome" 
    style={estilos.input} 
    value={nome} 
    onChangeText={setNome} 
    /> 
    
    <Text style={estilos.texto}> 
        E-mail 
    </Text> 
    <TextInput 
    placeholder="fulano@hotmail.com" 
    keyboardType="email-address" 
    autoCapitalize="none"
    style={estilos.input} 
    value={email} 
    onChangeText={setEmail} 
    /> 
    
    <Text style={estilos.texto}> 
        Senha 
    </Text> 
    <TextInput 
    placeholder="Digite sua senha" 
    secureTextEntry={true} 
    style={estilos.input} 
    value={senha} 
    onChangeText={setSenha} 
    /> 
    
    <Text style={estilos.texto}> 
        Confirmar senha 
    </Text> 
    <TextInput 
    placeholder="Digite a senha novamente" 
    secureTextEntry={true} 
    style={estilos.input} 
    value={confirmarSenha} 
    onChangeText={setConfirmarSenha} 
    /> 
    
    <View style={estilos.botao}> 
        <Button 
        title="Cadastrar" 
        onPress={cadastrar} 
        /> 
        </View> 

        <TouchableOpacity 
        onPress={() => navigation.navigate('Login')}
        > 
        <Text style={estilos.login}> 
            Já possui uma conta? Entrar 
        </Text>
        </TouchableOpacity> 
        </View> 
        ); 
    }