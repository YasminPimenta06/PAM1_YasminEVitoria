import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import { validarLogin } from "./Funcao";

export default function Login({ navigation }) {
  const [nome, setNome] = useState("");

  function entrar() {
    const valido = validarLogin(nome);

    if (!valido) {
      Alert.alert(
        "Atenção",
        "Digite seu nome para continuar."
      );

      return;
    }

    navigation.navigate("Home", {
      nome: nome.trim(),
    });
  }

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>♫</Text>

      <Text style={styles.title}>
        MUSIFY
      </Text>

      <Text style={styles.subtitle}>
        Crie playlists do seu jeito.
      </Text>

      <Text style={styles.label}>
        Qual é o seu nome?
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor="#888"
        value={nome}
        onChangeText={setNome}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={entrar}
      >
        <Text style={styles.buttonText}>
          CONTINUAR
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#100B10",
    justifyContent: "center",
    padding: 25,
  },

  logo: {
    color: "#FF5A1F",
    fontSize: 70,
    textAlign: "center",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 4,
  },

  subtitle: {
    color: "#999999",
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 50,
  },

  label: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 10,
  },

  input: {
    backgroundColor: "#211820",
    borderColor: "#49323D",
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    color: "#FFFFFF",
    fontSize: 16,
  },

  button: {
    backgroundColor: "#FF5A1F",
    borderRadius: 12,
    padding: 17,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
