
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  ScrollView, StyleSheet, useWindowDimensions,
  ActivityIndicator
} from 'react-native';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase';

import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold
} from '@expo-google-fonts/nunito';

import { Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat';

export default function Cadastro({ navigation }) {
  const { width, height } = useWindowDimensions();
  const desktop = width >= 800;

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  const [fontesCarregadas, erroFonte] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Montserrat_800ExtraBold
  });

  async function cadastrar() {
    setErro('');

    if (!nome.trim() || !email.trim() || !senha) {
      setErro('Preencha todos os campos.');
      return;
    }

    if (senha.length < 6) {
      setErro('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    setCarregando(true);

    try {
      const resultado = await createUserWithEmailAndPassword(
        auth, email.trim(), senha
      );

      await setDoc(doc(db, 'usuarios', resultado.user.uid), {
        nome: nome.trim(),
        email: email.trim()
      });

      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }]
      });
    } catch (error) {
      console.log('Erro no cadastro:', error.code);
      setErro(
        error.code === 'auth/email-already-in-use'
          ? 'Este e-mail já está cadastrado.'
          : 'Não foi possível criar sua conta.'
      );
    } finally {
      setCarregando(false);
    }
  }

  if (!fontesCarregadas && !erroFonte) {
    return (
      <View style={styles.carregando}>
        <ActivityIndicator color="#104D42" />
      </View>
    );
  }

  const tamanho = desktop
    ? Math.min(70, Math.max(38, width * 0.043))
    : Math.min(48, Math.max(32, width * 0.09));

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.conteudo, { minHeight: height }]}
      keyboardShouldPersistTaps="handled"
    >
      <View style={[styles.layout, desktop && styles.layoutDesktop]}>
        <View style={[styles.painel, desktop && styles.painelDesktop]}>
          <Text style={styles.marca}>
            Pet<Text style={styles.marcaCor}>Care.</Text>
          </Text>

          <View style={styles.impacto}>
            <Text style={[styles.impactoTexto, { fontSize: tamanho }]}>
              MAIS{'\n'}
              <Text style={styles.coral}>CUIDADO.</Text>
              {'\n'}MAIS{'\n'}
              <Text style={styles.amarelo}>AMOR.</Text>
              {'\n'}
              <Text style={styles.menta}>SEMPRE.</Text>
            </Text>
          </View>
        </View>

        <View style={[styles.direita, desktop && styles.direitaDesktop]}>
          <View style={styles.formulario}>
            <Text style={styles.titulo}>Crie sua conta.</Text>

            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Seu nome"
              placeholderTextColor="#8E978F"
              value={nome}
              onChangeText={setNome}
            />

            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="Seu e-mail"
              placeholderTextColor="#8E978F"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Mínimo de 6 caracteres"
              placeholderTextColor="#8E978F"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />

            {!!erro && <Text style={styles.erro}>{erro}</Text>}

            <TouchableOpacity
              style={[styles.botao, carregando && { opacity: 0.6 }]}
              onPress={cadastrar}
              disabled={carregando}
            >
              <Text style={styles.botaoTexto}>
                {carregando ? 'Cadastrando...' : 'Criar conta'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.voltar}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.voltarTexto}>
                Já tenho uma conta. Entrar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FBF4EA' },
  conteudo: { flexGrow: 1 },
  layout: { flex: 1, width: '100%' },
  layoutDesktop: { flexDirection: 'row' },
  painel: {
    backgroundColor: '#090909',
    padding: 30,
    minHeight: 440
  },
  painelDesktop: {
    width: '50%',
    minHeight: '100%',
    padding: 45
  },
  marca: {
    fontFamily: 'Montserrat_800ExtraBold',
    fontSize: 32,
    color: '#FFFFFF'
  },
  marcaCor: { color: '#FF7558' },
  impacto: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 35
  },
  impactoTexto: {
    fontFamily: 'Montserrat_800ExtraBold',
    color: '#FFFFFF',
    letterSpacing: -2,
    textAlign: 'left'
  },
  coral: { color: '#FF7558' },
  amarelo: { color: '#F1BD55' },
  menta: { color: '#A7D9C5' },
  direita: {
    backgroundColor: '#FBF4EA',
    padding: 28,
    justifyContent: 'center'
  },
  direitaDesktop: {
    width: '50%',
    paddingHorizontal: 65
  },
  formulario: {
    width: '100%',
    maxWidth: 520,
    alignSelf: 'center'
  },
  titulo: {
    fontFamily: 'Montserrat_800ExtraBold',
    color: '#104D42',
    fontSize: 32,
    marginBottom: 30
  },
  label: {
    fontFamily: 'Nunito_700Bold',
    color: '#183A35',
    marginBottom: 8
  },
  input: {
    backgroundColor: '#FFFDF8',
    borderWidth: 1,
    borderColor: '#E8DCCF',
    borderRadius: 14,
    padding: 17,
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
    marginBottom: 18,
    color: '#183A35'
  },
  erro: {
    color: '#BC493E',
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 15
  },
  botao: {
    backgroundColor: '#104D42',
    padding: 18,
    borderRadius: 28,
    alignItems: 'center',
    marginTop: 8
  },
  botaoTexto: {
    fontFamily: 'Nunito_700Bold',
    color: '#FFFFFF',
    fontSize: 17
  },
  voltar: { alignItems: 'center', marginTop: 25 },
  voltarTexto: {
    fontFamily: 'Nunito_700Bold',
    color: '#D56B49',
    fontSize: 14
  },
  carregando: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBF4EA'
  }
});
