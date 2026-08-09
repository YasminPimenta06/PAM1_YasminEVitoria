import { View,ScrollView,Text,ImageBackground,TouchableOpacity,StyleSheet} from 'react-native';

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.fundo}>

      <Text style={styles.tituloPagina}>
        CINEPOP
      </Text>

      <View style={styles.banner}>

        <ImageBackground
          source={{
            uri: 'https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg'
          }}
          style={styles.imagemBanner}
          imageStyle={styles.bordaImagem}
          resizeMode="cover"
        >

          <View style={styles.escurecer}>

            <View style={styles.conteudoBanner}>

              <Text style={styles.tituloFilme}>
                HOMEM-ARANHA
              </Text>

              <Text style={styles.subtituloFilme}>
                Um Novo Dia
              </Text>

              <Text style={styles.informacoes}>
                Cinema • 12 anos • 2h24 • Ação, Fantasia
              </Text>

              <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate('Detalhes')}
              >
                <Text style={styles.textoBotao}>
                  Ingressos
                </Text>
              </TouchableOpacity>

            </View>

          </View>

        </ImageBackground>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  fundo: {
    flex: 1,
    backgroundColor: '#450000',
  },

  tituloPagina: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 3,
    marginVertical: 20,
  },

  banner: {
    width: '94%',
    alignSelf: 'center',
    height: 540,
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 30,
  },

  imagemBanner: {
    flex: 1,
    width: '100%',
  },

  bordaImagem: {
    borderRadius: 18,
  },

  escurecer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.32)',
    justifyContent: 'flex-end',
  },

  conteudoBanner: {
    padding: 35,
    width: '70%',
  },

  tituloFilme: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: 'bold',
  },

  subtituloFilme: {
    color: '#E50914',
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 18,
  },

  informacoes: {
    color: '#FFFFFF',
    fontSize: 15,
    marginBottom: 25,
  },

  botao: {
    backgroundColor: '#B60303',
    width: 170,
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

});