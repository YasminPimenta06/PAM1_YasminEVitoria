import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';


export default function Home({ navigation }) {


  function iniciarInvestigacao() {
    navigation.navigate('Caso');
  }


  function comoJogar() {
    alert(
      'Investigue os suspeitos, analise as evidências, compare os depoimentos e descubra quem roubou o colar!'
    );
  }


  return (

    <View style={styles.container}>


      <Text style={styles.etiqueta}>
        ARQUIVOS CONFIDENCIAIS
      </Text>


      <View style={styles.logoContainer}>

        <Image
          source={{
            uri: 'https://png.pngtree.com/png-vector/20210525/ourmid/pngtree-letter-m-logo-png-vector-png-image_3320105.jpg'
          }}
          style={styles.logo}
          resizeMode="cover"
        />

      </View>


      <Text style={styles.titulo}>
        MYSTERY
      </Text>


      <Text style={styles.subtitulo}>
        O mistério começa aqui.
      </Text>


      <View style={styles.linha} />



      <Text style={styles.descricao}>
        Um objeto valioso desapareceu durante uma festa
        na Mansão Oliveira.
      </Text>


      <Text style={styles.descricaoSecundaria}>
        Analise as pistas, investigue os suspeitos e descubra
        quem está escondendo a verdade.
      </Text>


      <TouchableOpacity
        style={styles.botaoPrincipal}
        onPress={iniciarInvestigacao}
      >

        <Text style={styles.botaoPrincipalTexto}>
          INVESTIGAR
        </Text>

      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botaoSecundario}
        onPress={comoJogar}
      >

        <Text style={styles.botaoSecundarioTexto}>
          COMO JOGAR
        </Text>

      </TouchableOpacity>


      <Text style={styles.rodape}>
        CASO #001 • O COLAR DESAPARECIDO
      </Text>


    </View>

  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#101014',
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  etiqueta: {
    color: '#C7A95B',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 3,
    marginBottom: 20,
  },

  logoContainer: {
    width: 115,
    height: 115,
    borderRadius: 58,
    borderWidth: 2,
    borderColor: '#C7A95B',
    padding: 4,
    marginBottom: 18,
    overflow: 'hidden',
  },

  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 55,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: 'bold',
    letterSpacing: 7,
  },

  subtitulo: {
    color: '#C7A95B',
    fontSize: 14,
    letterSpacing: 2,
    marginTop: 8,
  },

  linha: {
    width: 50,
    height: 2,
    backgroundColor: '#C7A95B',
    marginVertical: 25,
  },

  descricao: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
    maxWidth: 330,
  },

  descricaoSecundaria: {
    color: '#888888',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    maxWidth: 330,
    marginTop: 10,
    marginBottom: 28,
  },

  botaoPrincipal: {
    width: '100%',
    backgroundColor: '#C7A95B',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },

  botaoPrincipalTexto: {
    color: '#101014',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  botaoSecundario: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#44444C',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },

  botaoSecundarioTexto: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  rodape: {
    color: '#55555D',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop: 25,
  },

});