
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert, Platform
} from 'react-native';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

function aviso(titulo, mensagem) {
  if (Platform.OS === 'web') {
    window.alert(`${titulo}\n${mensagem}`);
  } else {
    Alert.alert(titulo, mensagem);
  }
}

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function fazerLogin() {
    if (!email.trim() || !senha) {
      aviso('Atenção', 'Digite seu e-mail e senha.');
      return;
    }

    setCarregando(true);

    try {
      await signInWithEmailAndPassword(auth, email.trim(), senha);

      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }]
      });

    } catch (error) {
      console.log('Erro no login:', error.code);
      aviso('Erro', 'E-mail ou senha incorretos.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🐾</Text>
      <Text style={styles.titulo}>PetCare</Text>
      <Text style={styles.subtitulo}>
        Seu pet, nosso cuidado!
      </Text>

      <View style={styles.formulario}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={fazerLogin}
          disabled={carregando}
        >
          <Text style={styles.textoBotao}>
            {carregando ? 'Entrando...' : 'Entrar'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.link}>
            Não possui uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF4E6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25
  },
  logo: { fontSize: 75 },
  titulo: {
    fontSize: 39,
    fontWeight: 'bold',
    color: '#365F52',
    marginTop: 8
  },
  subtitulo: {
    fontSize: 16,
    color: '#71867D',
    marginBottom: 38
  },
  formulario: { width: '100%', maxWidth: 390 },
  label: {
    color: '#365F52',
    fontWeight: '600',
    marginBottom: 8
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DCEDE3',
    marginBottom: 20,
    fontSize: 15
  },
  botao: {
    backgroundColor: '#365F52',
    padding: 17,
    borderRadius: 13,
    alignItems: 'center',
    marginTop: 8
  },
  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 17
  },
  link: {
    color: '#365F52',
    textAlign: 'center',
    marginTop: 25,
    fontWeight: '600'
  }
});
