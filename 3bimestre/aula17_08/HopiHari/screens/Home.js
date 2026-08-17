import React from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.emoji}>🎢</Text>

      <Text style={styles.titulo}>HOPI HARI</Text>

      <Text style={styles.subtitulo}>
        O país mais divertido do mundo!
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>
          Bem-vindo ao Hopi Hari!
        </Text>

        <Text style={styles.cardTexto}>
          Prepare-se para muita diversão, aventura e adrenalina!
          Conheça os principais brinquedos do parque.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Brinquedos')}
      >
        <Text style={styles.botaoTexto}>
          🎢 VER BRINQUEDOS
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5B0FA8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  emoji: {
    fontSize: 70,
    marginBottom: 15,
  },

  titulo: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 30,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
    width: '100%',
    marginBottom: 30,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },

  cardTitulo: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#5B0FA8',
    textAlign: 'center',
    marginBottom: 12,
  },

  cardTexto: {
    fontSize: 16,
    color: '#444444',
    textAlign: 'center',
    lineHeight: 24,
  },

  botao: {
    backgroundColor: '#FFD700',
    paddingVertical: 17,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 4,
  },

  botaoTexto: {
    color: '#5B0FA8',
    fontSize: 16,
    fontWeight: 'bold',
  },
});