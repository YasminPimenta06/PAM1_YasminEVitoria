
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator
} from 'react-native';

import { signInWithEmailAndPassword } from 'firebase/auth';

import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold
} from '@expo-google-fonts/nunito';

import {
  Montserrat_800ExtraBold
} from '@expo-google-fonts/montserrat';

import { auth } from '../../firebase/firebase';

export default function Login({ navigation }) {
  const { width, height } = useWindowDimensions();
  const desktop = width >= 800;

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  const [fontesCarregadas, erroFonte] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Montserrat_800ExtraBold
  });

  async function entrar() {
    setErro('');

    if (!email.trim() || !senha) {
      setErro('Preencha seu e-mail e senha.');
      return;
    }

    setCarregando(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        senha
      );

      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }]
      });

    } catch (error) {
      console.log('Erro no login:', error.code);
      setErro('Confira seu e-mail e senha.');
    } finally {
      setCarregando(false);
    }
  }

  if (!fontesCarregadas && !erroFonte) {
    return (
      <View style={styles.carregamento}>
        <ActivityIndicator color="#104D42" size="large" />
        <Text>Carregando PetCare...</Text>
      </View>
    );
  }

  const fonteImpacto = fontesCarregadas
    ? 'Montserrat_800ExtraBold'
    : undefined;

  const tamanhoTitulo = desktop
    ? Math.min(76, Math.max(43, width * 0.043))
    : Math.min(55, Math.max(33, width * 0.09));

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.conteudo,
        { minHeight: height }
      ]}
      keyboardShouldPersistTaps="handled"
    >
      <View style={[
        styles.layout,
        desktop && styles.layoutDesktop
      ]}>

        {/* LADO ESQUERDO: TÍTULO */}
        <View style={[
          styles.ladoEsquerdo,
          desktop && styles.ladoEsquerdoDesktop
        ]}>
          <Text style={styles.marca}>
            Pet<Text style={styles.marcaCor}>Care.</Text>
          </Text>

          <View style={styles.areaImpacto}>
            <Text style={[
              styles.linhaImpacto,
              { fontSize: tamanhoTitulo, fontFamily: fonteImpacto }
            ]}>
              ELES
            </Text>

            <Text style={[
              styles.linhaImpacto,
              { fontSize: tamanhoTitulo, fontFamily: fonteImpacto }
            ]}>
              MERECEM
            </Text>

            <Text style={[
              styles.linhaImpacto,
              styles.laranja,
              { fontSize: tamanhoTitulo, fontFamily: fonteImpacto }
            ]}>
              TODO O
            </Text>

            <Text style={[
              styles.linhaImpacto,
              styles.amarelo,
              { fontSize: tamanhoTitulo, fontFamily: fonteImpacto }
            ]}>
              AMOR DO
            </Text>

            <Text style={[
              styles.linhaImpacto,
              styles.menta,
              { fontSize: tamanhoTitulo, fontFamily: fonteImpacto }
            ]}>
              MUNDO.
            </Text>
          </View>
        </View>

        {/* LADO DIREITO: FORMULÁRIO */}
        <View style={[
          styles.ladoDireito,
          desktop && styles.ladoDireitoDesktop
        ]}>
          <View style={styles.formulario}>
            <Text style={styles.tituloFormulario}>
              Bem-vindo de volta.
            </Text>

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

            <View style={styles.campoSenha}>
              <TextInput
                style={styles.inputSenha}
                placeholder="Sua senha"
                placeholderTextColor="#8E978F"
                secureTextEntry={!mostrarSenha}
                value={senha}
                onChangeText={setSenha}
              />

              <TouchableOpacity
                onPress={() => setMostrarSenha(!mostrarSenha)}
              >
                <Text style={styles.mostrar}>
                  {mostrarSenha ? 'Ocultar' : 'Mostrar'}
                </Text>
              </TouchableOpacity>
            </View>

            {!!erro && (
              <Text style={styles.erro}>{erro}</Text>
            )}

            <TouchableOpacity
              style={[
                styles.botao,
                carregando && { opacity: 0.6 }
              ]}
              onPress={entrar}
              disabled={carregando}
            >
              <Text style={styles.botaoTexto}>
                {carregando ? 'Entrando...' : 'Entrar'}
              </Text>
            </TouchableOpacity>

            <View style={styles.rodape}>
              <Text style={styles.rodapeTexto}>
                Ainda não tem uma conta?{' '}
              </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate('Cadastro')}
              >
                <Text style={styles.link}>
                  Cadastre-se
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF4EA'
  },

  conteudo: {
    flexGrow: 1
  },

  layout: {
    flex: 1,
    width: '100%'
  },

  layoutDesktop: {
    flexDirection: 'row'
  },

  ladoEsquerdo: {
    backgroundColor: '#090909',
    paddingHorizontal: 30,
    paddingVertical: 32,
    minHeight: 480
  },

  ladoEsquerdoDesktop: {
    width: '50%',
    minHeight: '100%',
    paddingHorizontal: 45,
    paddingVertical: 38
  },

  marca: {
    color: '#FFFFFF',
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 38
  },

  marcaCor: {
    color: '#FF7558'
  },

  areaImpacto: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 35
  },

  linhaImpacto: {
    color: '#FFFFFF',
    fontWeight: '800',
    textAlign: 'left',
    letterSpacing: -2,
    lineHeight: undefined
  },

  laranja: {
    color: '#FF7558'
  },

  amarelo: {
    color: '#F1BD55'
  },

  menta: {
    color: '#A7D9C5'
  },

  ladoDireito: {
    backgroundColor: '#FBF4EA',
    paddingHorizontal: 28,
    paddingVertical: 50,
    justifyContent: 'center'
  },

  ladoDireitoDesktop: {
    width: '50%',
    paddingHorizontal: 65
  },

  formulario: {
    width: '100%',
    maxWidth: 520,
    alignSelf: 'center'
  },

  tituloFormulario: {
    color: '#104D42',
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 38,
    marginBottom: 42
  },

  label: {
    color: '#183A35',
    fontFamily: 'Nunito_700Bold',
    fontSize: 15,
    marginBottom: 9
  },

  input: {
    backgroundColor: '#FFFDF8',
    borderWidth: 1,
    borderColor: '#E8DCCF',
    borderRadius: 16,
    padding: 18,
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
    color: '#183A35',
    marginBottom: 24
  },

  campoSenha: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFDF8',
    borderWidth: 1,
    borderColor: '#E8DCCF',
    borderRadius: 16,
    paddingRight: 17,
    marginBottom: 30
  },

  inputSenha: {
    flex: 1,
    minWidth: 0,
    padding: 18,
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
    color: '#183A35'
  },

  mostrar: {
    color: '#104D42',
    fontFamily: 'Nunito_700Bold',
    fontSize: 13
  },

  erro: {
    color: '#BC493E',
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 15
  },

  botao: {
    backgroundColor: '#104D42',
    padding: 19,
    borderRadius: 32,
    alignItems: 'center'
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontFamily: 'Nunito_700Bold',
    fontSize: 17
  },

  rodape: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 32
  },

  rodapeTexto: {
    color: '#6F7974',
    fontFamily: 'Nunito_400Regular',
    fontSize: 14
  },

  link: {
    color: '#D56B49',
    fontFamily: 'Nunito_700Bold',
    fontSize: 14
  },

  carregamento: {
    flex: 1,
    backgroundColor: '#FBF4EA',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
