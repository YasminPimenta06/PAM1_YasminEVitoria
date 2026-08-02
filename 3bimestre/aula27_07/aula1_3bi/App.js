import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Button,
  Alert,
} from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.scroll}>
      <StatusBar style="dark" />

      <View style={styles.fundo}>

        <Text style={styles.tituloPrincipal}> QUIZUR </Text>

        <Text style={styles.subtitulo}>
          Teste seus conhecimentos sobre filmes!
        </Text>

        <TextInput
          placeholder="Pesquisar quizzes..."
          placeholderTextColor="#777"
          style={styles.pesquisa}
        />

      

        <Text style={styles.tituloQuiz}>Enrolados</Text>

        <Image
          source={{
            uri: 'https://conteudo.imguol.com.br/c/entretenimento/93/2023/08/08/rapunzel-tem-uma-historia-do-seculo-x-como-inspiracao-1691530753314_v2_4x3.jpg',
          }}
          style={styles.imagem}
          resizeMode="cover"
        />

        <View style={styles.card}>
          <Text style={styles.numeroPergunta}>PERGUNTA 1</Text>

          <Text style={styles.pergunta}>
            Qual o nome dessa princesa?
          </Text>

          <TextInput
            placeholder="Digite sua resposta..."
            placeholderTextColor="#999"
            style={styles.inputResposta}
          />

          <View style={styles.botao}>
            <Button
              title="Enviar resposta"
              onPress={() => Alert.alert('Resposta enviada!')}
              color="#7b4b94"
            />
          </View>

          <View style={styles.divisor} />

          <Text style={styles.numeroPergunta}>PERGUNTA 2</Text>

          <Text style={styles.pergunta}>
            Qual o nome do camaleão?
          </Text>

          <TextInput
            placeholder="Digite sua resposta..."
            placeholderTextColor="#999"
            style={styles.inputResposta}
          />

          <View style={styles.botao}>
            <Button
              title="Enviar resposta"
              onPress={() => Alert.alert('Resposta enviada!')}
              color="#7b4b94"
            />
          </View>
        </View>

        {/* QUIZ FROZEN */}

        <Text style={styles.tituloQuiz}>Frozen</Text>

        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9dOxc8y-WIESkulR2bwY6cuU4pDCJDpagfKjjzNzTO6d5QMalccJUruM&s=10',
          }}
          style={styles.imagem}
          resizeMode="cover"
        />

        <View style={styles.card}>
          <Text style={styles.numeroPerguntaAzul}>PERGUNTA 1</Text>

          <Text style={styles.pergunta}>
            Qual o poder da princesa Elsa?
          </Text>

          <TextInput
            placeholder="Será que você sabe?"
            placeholderTextColor="#999"
            style={styles.inputResposta}
          />

          <View style={styles.botao}>
            <Button
              title="Enviar resposta"
              onPress={() => Alert.alert('Resposta enviada!')}
              color="#2876bd"
            />
          </View>

          <View style={styles.divisor} />

          <Text style={styles.numeroPerguntaAzul}>PERGUNTA 2</Text>

          <Text style={styles.pergunta}>
            Qual o nome da princesa que teve o coração congelado?
          </Text>

          <TextInput
            placeholder="Será que você sabe?"
            placeholderTextColor="#999"
            style={styles.inputResposta}
          />

          <View style={styles.botao}>
            <Button
              title="Enviar resposta"
              onPress={() => Alert.alert('Resposta enviada!')}
              color="#2876bd"
            />
          </View>
        </View>

        <Text style={styles.rodape}>
          Quantas você conseguiu acertar?
        </Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#f3e5f5',
  },

  fundo: {
    flex: 1,
    backgroundColor: '#f3e5f5',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 50,
  },

  tituloPrincipal: {
    fontSize: 30,
    paddingTop: 30,
    fontWeight: 'bold',
    color: '#5d3972',
    letterSpacing: 2,
  },

  subtitulo: {
    fontSize: 15,
    color: '#666',
    marginTop: 5,
    marginBottom: 22,
  },

  pesquisa: {
    width: '90%',
    maxWidth: 600,
    height: 48,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#d8c4dd',
    borderRadius: 15,
    backgroundColor: '#ffffff',
    marginBottom: 25,
  },

  tituloQuiz: {
    width: '90%',
    maxWidth: 600,
    fontSize: 23,
    fontWeight: 'bold',
    color: '#403743',
    marginTop: 15,
    marginBottom: 10,
  },

  imagem: {
    width: '90%',
    maxWidth: 600,
    height: 230,
    borderRadius: 15,
  },

  card: {
    width: '90%',
    maxWidth: 600,
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 12,
    marginBottom: 25,
    borderRadius: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 4,
  },

  numeroPergunta: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#7b4b94',
    marginBottom: 7,
  },

  numeroPerguntaAzul: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2876bd',
    marginBottom: 7,
  },

  pergunta: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 14,
    color: '#292929',
  },

  inputResposta: {
    width: '100%',
    height: 45,
    paddingHorizontal: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: 10,
    backgroundColor: '#fafafa',
    marginBottom: 12,
  },

  botao: {
    borderRadius: 10,
    overflow: 'hidden',
  },

  divisor: {
    height: 1,
    backgroundColor: '#eeeeee',
    marginVertical: 22,
  },

  rodape: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#5d3972',
    marginTop: 5,
  },
});
