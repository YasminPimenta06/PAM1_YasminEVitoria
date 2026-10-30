
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, ScrollView, Alert, Platform
} from 'react-native';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase';

function aviso(titulo, mensagem) {
  if (Platform.OS === 'web') {
    window.alert(`${titulo}\n${mensagem}`);
  } else {
    Alert.alert(titulo, mensagem);
  }
}

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function cadastrar() {
    if (!nome.trim() || !email.trim() || !senha || !confirmarSenha) {
      aviso('Atenção', 'Preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      aviso('Atenção', 'As senhas não são iguais.');
      return;
    }

    if (senha.length < 6) {
      aviso('Atenção', 'A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    setCarregando(true);

    try {
      const resultado = await createUserWithEmailAndPassword(
        auth, email.trim(), senha
      );

      await setDoc(doc(db, 'usuarios', resultado.user.uid), {
        nome: nome.trim(),
        email: resultado.user.email
      });

      aviso('Sucesso', 'Sua conta foi criada!');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }]
      });

    } catch (error) {
      console.log('Erro no cadastro:', error);

      const mensagens = {
        'auth/email-already-in-use': 'Este e-mail já está cadastrado.',
        'auth/invalid-email': 'Digite um e-mail válido.',
        'auth/weak-password': 'A senha é muito fraca.'
      };

      aviso('Erro', mensagens[error.code] || error.message);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.logo}>🐾</Text>
      <Text style={styles.titulo}>Criar minha conta</Text>
      <Text style={styles.subtitulo}>
        Faça parte da família PetCare!
      </Text>

      <View style={styles.formulario}>
        <Text style={styles.label}>Seu nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="exemplo@email.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Mínimo de 6 caracteres"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <Text style={styles.label}>Confirmar senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a senha novamente"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={cadastrar}
          disabled={carregando}
        >
          <Text style={styles.textoBotao}>
            {carregando ? 'Cadastrando...' : 'Criar conta'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>
            Já possui uma conta? Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF4E6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
  logo: { fontSize: 65, marginBottom: 12 },
  titulo: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#365F52'
  },
  subtitulo: {
    fontSize: 15,
    color: '#71867D',
    marginTop: 8,
    marginBottom: 28
  },
  formulario: { width: '100%', maxWidth: 390 },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#365F52',
    marginBottom: 7
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCEDE3',
    borderRadius: 12,
    padding: 14,
    marginBottom: 17,
    fontSize: 15
  },
  botao: {
    backgroundColor: '#365F52',
    padding: 17,
    borderRadius: 13,
    alignItems: 'center',
    marginTop: 10
  },
  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16
  },
  link: {
    color: '#365F52',
    textAlign: 'center',
    marginTop: 23,
    fontWeight: '600'
  }
});
