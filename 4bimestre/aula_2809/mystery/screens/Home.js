import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function Home({ navigation }) {

  function iniciarInvestigacao() {
    navigation.navigate('Caso');
  }

  function comoJogar() {
    alert(
      'Investigue os suspeitos, analise as evidências e descubra quem é o culpado!'
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.icone}>🕵️</Text>

      <Text style={styles.titulo}>
        MYSTERY
      </Text>

      <Text style={styles.subtitulo}>
        O mistério começa aqui.
      </Text>

      <Text style={styles.descricao}>
        Existem segredos escondidos, pistas esperando
        para serem encontradas e uma verdade esperando
        para ser descoberta.
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
        onPress={comoJogar}
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
    backgroundColor: '#101014',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },

  icone: {
    fontSize: 70,
    marginBottom: 10,
  },

  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 8,
  },

  subtitulo: {
    fontSize: 18,
    color: '#C7A95B',
    marginTop: 10,
  },

  descricao: {
    color: '#B8B8B8',
    textAlign: 'center',
    lineHeight: 23,
    marginTop: 25,
    marginBottom: 40,
  },

  botao: {
    backgroundColor: '#C7A95B',
    width: '100%',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },

  textoBotao: {
    color: '#101014',
    fontWeight: 'bold',
    fontSize: 16,
  },

  botaoSecundario: {
    borderWidth: 1,
    borderColor: '#C7A95B',
    width: '100%',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },

  textoBotaoSecundario: {
    color: '#C7A95B',
    fontWeight: 'bold',
  },

});