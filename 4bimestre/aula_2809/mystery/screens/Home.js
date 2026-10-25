
import React from 'react';

import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  useWindowDimensions,
  Platform,
  Alert,
} from 'react-native';

import {
  useFonts,
  CinzelDecorative_400Regular,
  CinzelDecorative_700Bold,
} from '@expo-google-fonts/cinzel-decorative';

import {
  CormorantGaramond_400Regular,
  CormorantGaramond_400Regular_Italic,
  CormorantGaramond_600SemiBold,
} from '@expo-google-fonts/cormorant-garamond';

export default function Home({ navigation }) {

  const { width } = useWindowDimensions();
  const telaPequena = width < 400;

  const [fontsLoaded] = useFonts({
    CinzelDecorative_400Regular,
    CinzelDecorative_700Bold,
    CormorantGaramond_400Regular,
    CormorantGaramond_400Regular_Italic,
    CormorantGaramond_600SemiBold,
  });

  function iniciarInvestigacao() {
    navigation.navigate('Caso');
  }

  function comoJogar() {
    const mensagem =
      'Investigue os suspeitos, analise as evidências, compare os depoimentos e descubra quem roubou o colar!';

    if (Platform.OS === 'web') {
      window.alert(mensagem);
    } else {
      Alert.alert('Como jogar', mensagem);
    }
  }

  if (!fontsLoaded) {
    return (
      <View style={styles.carregamento}>
        <ActivityIndicator color="#B99A64" size="large" />
      </View>
    );
  }

  return (
    <ScrollView
  style={styles.pagina}
  contentContainerStyle={styles.conteudo}
  showsVerticalScrollIndicator={true}
  persistentScrollbar={true}
  nestedScrollEnabled={true}
>

      {/* ORNAMENTO SUPERIOR */}

      <View style={styles.ornamento}>
        <Text style={styles.ornamentoTexto}>
          ✦
        </Text>
      </View>

      {/* LOGO */}

      <View style={styles.cabecalho}>

        <Text
          style={[
            styles.logo,
            telaPequena && styles.logoPequena
          ]}
          adjustsFontSizeToFit
          numberOfLines={1}
        >
          MYSTERY
        </Text>

        <Text style={styles.frase}>
          Algumas verdades não devem ser reveladas.
        </Text>

      </View>

      {/* FOTO PRINCIPAL */}

      <View style={styles.areaFoto}>

        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1400'
          }}
          style={styles.foto}
          imageStyle={styles.imagem}
          resizeMode="cover"
        >

          <View style={styles.sombraFoto} />

          <View style={styles.conteudoFoto}>

            <Text style={styles.nomeLocal}>
              Mansão Oliveira
            </Text>

            <Text style={styles.fraseFoto}>
              Naquela noite, todos tinham algo a esconder.
            </Text>

          </View>

        </ImageBackground>

        <View style={styles.selo}>
          <Text style={styles.seloSimbolo}>✦</Text>
        </View>

      </View>

      {/* TEXTO DE SUSPENSE */}

      <View style={styles.chamada}>

        <Text style={styles.chamadaTitulo}>
          Um colar desapareceu.
        </Text>

        <Text style={styles.chamadaDescricao}>
          Entre segredos e mentiras,
          a verdade espera para ser descoberta.
        </Text>

      </View>

      {/* BOTÃO PRINCIPAL */}

      <TouchableOpacity
        style={styles.botao}
        onPress={iniciarInvestigacao}
        activeOpacity={0.75}
        accessibilityRole="button"
      >

        <Text style={styles.botaoTexto}>
          INICIAR INVESTIGAÇÃO
        </Text>

        <Text style={styles.botaoSeta}>
          ↗
        </Text>

      </TouchableOpacity>

      {/* INSTRUÇÕES */}

      <TouchableOpacity
        onPress={comoJogar}
        style={styles.comoJogar}
      >
        <Text style={styles.comoJogarTexto}>
          Como jogar?
        </Text>
      </TouchableOpacity>

      {/* DETALHE INFERIOR */}

      <Text style={styles.ornamentoInferior}>
        ❦
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  pagina: {
    flex: 1,
    backgroundColor: '#080708',
  },

  conteudo: {
    width: '100%',
    maxWidth: 900,
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 55,
  },

  carregamento: {
    flex: 1,
    backgroundColor: '#080708',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ornamento: {
    alignItems: 'center',
    marginBottom: 18,
  },

  ornamentoTexto: {
    color: '#B99A64',
    fontSize: 24,
  },

  cabecalho: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 35,
  },

  logo: {
    fontFamily: 'CinzelDecorative_700Bold',
    fontSize: 58,
    color: '#EDE8E4',
    textAlign: 'center',
    textShadowColor: '#8A7777',
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 12,
  },

  logoPequena: {
    fontSize: 40,
  },

  frase: {
    fontFamily: 'CormorantGaramond_400Regular_Italic',
    color: '#B7A8A2',
    fontSize: 21,
    textAlign: 'center',
    marginTop: 12,
    paddingHorizontal: 15,
  },

  areaFoto: {
    width: '100%',
    position: 'relative',
    marginBottom: 38,
  },

  foto: {
    width: '100%',
    height: 310,
    justifyContent: 'flex-end',
    backgroundColor: '#211B20',
  },

  imagem: {
    opacity: 0.82,
  },

  sombraFoto: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(13, 8, 12, 0.28)',
  },

  conteudoFoto: {
    paddingHorizontal: 28,
    paddingBottom: 28,
  },

  nomeLocal: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    color: '#FFFFFF',
    fontSize: 37,
    textShadowColor: '#000000',
    textShadowRadius: 8,
  },

  fraseFoto: {
    fontFamily: 'CormorantGaramond_400Regular_Italic',
    color: '#E6DAD0',
    fontSize: 19,
    marginTop: 4,
  },

  selo: {
    position: 'absolute',
    bottom: -19,
    right: 28,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#681E2B',
    borderWidth: 2,
    borderColor: '#9B694C',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  seloSimbolo: {
    color: '#D7B981',
    fontSize: 25,
  },

  chamada: {
    alignItems: 'center',
    paddingHorizontal: 25,
    marginBottom: 30,
  },

  chamadaTitulo: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    color: '#EAE3DD',
    fontSize: 32,
    textAlign: 'center',
  },

  chamadaDescricao: {
    fontFamily: 'CormorantGaramond_400Regular',
    color: '#B9AFA9',
    fontSize: 20,
    lineHeight: 26,
    textAlign: 'center',
    marginTop: 8,
    maxWidth: 420,
  },

  botao: {
    borderWidth: 1,
    borderColor: '#B99A64',
    backgroundColor: '#171113',
    paddingVertical: 15,
    paddingHorizontal: 22,
    minWidth: 235,
    maxWidth: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    borderRadius: 3,
  },

  botaoTexto: {
    fontFamily: 'CinzelDecorative_400Regular',
    color: '#E8D4B3',
    fontSize: 12,
    textAlign: 'center',
  },

  botaoSeta: {
    color: '#D6B77D',
    fontSize: 21,
  },

  comoJogar: {
    marginTop: 22,
    padding: 8,
  },

  comoJogarTexto: {
    fontFamily: 'CormorantGaramond_400Regular_Italic',
    color: '#A99A90',
    fontSize: 20,
  },

  ornamentoInferior: {
    color: '#7A5B47',
    fontSize: 27,
    marginTop: 24,
  },

});
