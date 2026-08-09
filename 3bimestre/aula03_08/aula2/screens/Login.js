import {View, ScrollView, Text, Image, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';


export default function Login({ navigation }) {
  return (
    <ImageBackground
      source={{
        uri: 'https://img.magnific.com/fotos-gratis/variedade-de-elementos-de-cinema-em-fundo-vermelho-com-espaco-de-copia_23-2148457848.jpg?semt=ais_hybrid&w=740&q=80'
      }}
      style={styles.imagem}
      resizeMode="cover"
    >

      <Text style={styles.tituloPagina}>
        CINEPOP
      </Text>

      <View style={styles.card}>

        <Text style={styles.titulo2}>
          Entre ou crie sua conta
        </Text>

        <Text style={styles.texto}>
          Digite o e-mail
        </Text>

        <TextInput
          placeholder="fulano@hotmail.com"
          style={styles.input}
        />

        <Text style={styles.texto}>
          Senha
        </Text>

        <TextInput
          placeholder="abc@123"
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.textoBotao}>
            Entrar
          </Text>
        </TouchableOpacity>

      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  imagem: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tituloPagina: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 3,
    marginBottom: 25,
  },

  card: {
    backgroundColor: 'rgba(158, 3, 3, 0.92)',
    width: '90%',
    maxWidth: 400,
    padding: 30,
    borderRadius: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },

  titulo2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 25,
  },

  texto: {
    fontSize: 17,
    color: '#FFFFFF',
    marginTop: 12,
    marginBottom: 6,
  },

  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 10,
  },

  botao: {
    width: '100%',
    backgroundColor: '#010101',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 25,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

});