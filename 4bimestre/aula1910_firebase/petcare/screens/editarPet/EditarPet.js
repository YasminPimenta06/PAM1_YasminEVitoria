
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tela() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🐾 Editar Pet</Text>
      <Text>Bem-vindo ao PetCare!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF4E6'
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#365F52',
    marginBottom: 15
  }
});
