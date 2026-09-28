import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {

  function iniciarInvestigacao() {
    navigation.navigate('Caso');
  }

  return (
    <View style={styles.container}>

      <Text style={styles.icone}>🕵️</Text>

      <Text style={styles.titulo}>MYSTERY</Text>

      <Text style={styles.subtitulo}>
        O mistério começa aqui.
      </Text>

      <Text style={styles.descricao}>
        Existem segredos escondidos,
        pistas esperando para serem
        encontradas e uma verdade
        esperando para ser descoberta.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={iniciarInvestigacao}
      >
        <Text style={styles.textoBotao}>
          INVESTIGAR
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoSecundario}
      >
        <Text style={styles.textoBotaoSecundario}>
          COMO JOGAR
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  icone: {
    fontSize: 60,
    marginBottom: 10,
  },

  titulo: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 20,
    marginBottom: 20,
  },

  descricao: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },

  botao: {
    width: '80%',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },

  textoBotao: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  botaoSecundario: {
    width: '80%',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoBotaoSecundario: {
    fontSize: 16,
    fontWeight: 'bold',
  },

});