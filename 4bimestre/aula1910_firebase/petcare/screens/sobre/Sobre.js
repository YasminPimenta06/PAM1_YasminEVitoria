
import React from 'react';

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator
} from 'react-native';

import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold
} from '@expo-google-fonts/nunito';

import {
  Montserrat_800ExtraBold
} from '@expo-google-fonts/montserrat';

const CORES = {
  preto: '#090909',
  creme: '#FBF4EA',
  verde: '#104D42',
  coral: '#FF7558',
  amarelo: '#F1BD55',
  menta: '#A7D9C5',
  cinza: '#6F7974',
  borda: '#E8DCCF'
};

export default function Sobre({ navigation }) {
  const { width, height } = useWindowDimensions();
  const desktop = width >= 850;

  const [fontesCarregadas, erroFonte] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Montserrat_800ExtraBold
  });

  if (!fontesCarregadas && !erroFonte) {
    return (
      <View style={styles.carregando}>
        <ActivityIndicator
          size="large"
          color={CORES.verde}
        />
      </View>
    );
  }

  const tamanhoTitulo = desktop
    ? Math.min(60, Math.max(35, width * 0.039))
    : Math.min(43, Math.max(30, width * 0.085));

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.conteudo,
        { minHeight: height }
      ]}
    >
      <View style={[
        styles.layout,
        desktop && styles.layoutDesktop
      ]}>
        <View style={[
          styles.painel,
          desktop && styles.painelDesktop
        ]}>
          <Text style={styles.marca}>
            Pet<Text style={styles.marcaCor}>Care.</Text>
          </Text>

          <TouchableOpacity
            style={styles.voltar}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.voltarTexto}>
              ← Voltar
            </Text>
          </TouchableOpacity>

          <View style={styles.impacto}>
            <Text style={[
              styles.impactoTexto,
              { fontSize: tamanhoTitulo }
            ]}>
              AMOR{'\n'}
              <Text style={styles.coral}>QUE CUIDA.</Text>
              {'\n'}CUIDADO{'\n'}
              <Text style={styles.amarelo}>QUE</Text>
              {'\n'}
              <Text style={styles.menta}>TRANSFORMA.</Text>
            </Text>
          </View>
        </View>

        <View style={[
          styles.areaDireita,
          desktop && styles.areaDireitaDesktop
        ]}>
          <View style={styles.interno}>
            <Text style={styles.titulo}>
              Sobre o PetCare.
            </Text>

            <Text style={styles.paragrafo}>
              O PetCare é um aplicativo desenvolvido para
              facilitar a organização das informações dos
              animais de estimação em um só lugar.
            </Text>

            <View style={styles.divisoria} />

            <Text style={styles.secaoTitulo}>
              NOSSO PROPÓSITO
            </Text>

            <Text style={styles.paragrafo}>
              Tornar o cuidado com os pets mais simples,
              acessível e organizado, ajudando seus tutores
              a acompanhar informações importantes sobre
              cada animal.
            </Text>

            <View style={styles.divisoria} />

            <Text style={styles.secaoTitulo}>
              O QUE VOCÊ PODE FAZER
            </Text>

            <View style={styles.recurso}>
              <Text style={styles.numero}>01</Text>
              <View style={styles.recursoInfo}>
                <Text style={styles.recursoTitulo}>
                  CADASTRAR
                </Text>
                <Text style={styles.recursoTexto}>
                  Registrar informações como nome, espécie,
                  raça, idade e peso.
                </Text>
              </View>
            </View>

            <View style={styles.recurso}>
              <Text style={styles.numero}>02</Text>
              <View style={styles.recursoInfo}>
                <Text style={styles.recursoTitulo}>
                  ACOMPANHAR
                </Text>
                <Text style={styles.recursoTexto}>
                  Consultar os pets cadastrados e verificar
                  a situação informada das vacinas.
                </Text>
              </View>
            </View>

            <View style={styles.recurso}>
              <Text style={styles.numero}>03</Text>
              <View style={styles.recursoInfo}>
                <Text style={styles.recursoTitulo}>
                  ATUALIZAR
                </Text>
                <Text style={styles.recursoTexto}>
                  Editar as informações dos animais sempre
                  que necessário.
                </Text>
              </View>
            </View>

            <View style={styles.divisoria} />

            <Text style={styles.secaoTitulo}>
              TECNOLOGIAS
            </Text>

            <Text style={styles.paragrafo}>
              Desenvolvido com React Native, Expo e Firebase,
              utilizando autenticação de usuários e banco
              de dados para armazenar os cadastros.
            </Text>

            <View style={styles.fraseFinal}>
              <Text style={styles.fraseFinalTexto}>
                MAIS QUE UM CADASTRO.
                {'\n'}
                <Text style={styles.fraseCor}>
                  UM JEITO DE CUIDAR.
                </Text>
              </Text>
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
    backgroundColor: CORES.creme
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
  painel: {
    backgroundColor: CORES.preto,
    padding: 30,
    minHeight: 420
  },
  painelDesktop: {
    width: '45%',
    minHeight: '100%',
    padding: 45
  },
  marca: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat_800ExtraBold',
    fontSize: 32
  },
  marcaCor: {
    color: CORES.coral
  },
  voltar: {
    alignSelf: 'flex-start',
    marginTop: 22,
    paddingVertical: 8
  },
  voltarTexto: {
    color: CORES.menta,
    fontFamily: 'Nunito_700Bold',
    fontSize: 16
  },
  impacto: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 40
  },
  impactoTexto: {
    fontFamily: 'Montserrat_800ExtraBold',
    color: '#FFFFFF',
    textAlign: 'left',
    letterSpacing: -1.5
  },
  coral: {
    color: CORES.coral
  },
  amarelo: {
    color: CORES.amarelo
  },
  menta: {
    color: CORES.menta
  },
  areaDireita: {
    backgroundColor: CORES.creme,
    paddingHorizontal: 26,
    paddingVertical: 42,
    justifyContent: 'center'
  },
  areaDireitaDesktop: {
    width: '55%',
    paddingHorizontal: 65
  },
  interno: {
    width: '100%',
    maxWidth: 570,
    alignSelf: 'center'
  },
  titulo: {
    color: CORES.verde,
    fontFamily: 'Montserrat_800ExtraBold',
    fontSize: 30,
    marginBottom: 25
  },
  paragrafo: {
    color: '#37443F',
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
    lineHeight: 26
  },
  divisoria: {
    height: 1,
    backgroundColor: CORES.borda,
    marginVertical: 28
  },
  secaoTitulo: {
    color: CORES.preto,
    fontFamily: 'Montserrat_800ExtraBold',
    fontSize: 17,
    marginBottom: 16
  },
  recurso: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 15
  },
  numero: {
    color: CORES.coral,
    fontFamily: 'Montserrat_800ExtraBold',
    fontSize: 26,
    width: 60
  },
  recursoInfo: {
    flex: 1
  },
  recursoTitulo: {
    color: CORES.verde,
    fontFamily: 'Montserrat_800ExtraBold',
    fontSize: 15,
    marginBottom: 7
  },
  recursoTexto: {
    color: CORES.cinza,
    fontFamily: 'Nunito_400Regular',
    fontSize: 15,
    lineHeight: 23
  },
  fraseFinal: {
    backgroundColor: CORES.preto,
    padding: 25,
    marginTop: 10,
    borderRadius: 14
  },
  fraseFinalTexto: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat_800ExtraBold',
    fontSize: 19,
    lineHeight: 30
  },
  fraseCor: {
    color: CORES.amarelo
  },
  carregando: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CORES.creme
  }
});
