import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';


export default function Home({ navigation }) {

  return (

    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <ImageBackground

        source={{
          uri: 'https://www.guarulhoshoje.com.br/wp-content/uploads/2020/09/hopihari910x608.jpg'
        }}

        style={styles.banner}

        resizeMode="cover"

      >

        <View style={styles.overlay}>

          <View style={styles.topo}>

            <Text style={styles.logo}>
              HOPI HARI
            </Text>

            <Text style={styles.menu}>
              PARQUE
            </Text>

          </View>


          <View style={styles.conteudoBanner}>

            <Text style={styles.pequenoTitulo}>
              EXPERIÊNCIA HOPI HARI
            </Text>

            <Text style={styles.titulo}>
              Diversão que
              {'\n'}
              você não esquece.
            </Text>

            <Text style={styles.descricao}>
              Descubra atrações, aventuras e experiências
              para viver um dia inesquecível.
            </Text>


            <TouchableOpacity

              style={styles.botao}

              onPress={() => navigation.navigate('Brinquedos')}

            >

              <Text style={styles.textoBotao}>
                EXPLORAR ATRAÇÕES
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </ImageBackground>



      <View style={styles.secao}>

        <Text style={styles.subtitulo}>
          Viva o parque
        </Text>

        <Text style={styles.textoSecao}>
          Uma experiência cheia de aventura, velocidade
          e momentos inesquecíveis.
        </Text>


        <View style={styles.linhaCards}>


          <View style={styles.card}>

            <Text style={styles.numero}>
              01
            </Text>

            <Text style={styles.tituloCard}>
              Aventura
            </Text>

            <Text style={styles.textoCard}>
              Atrações para quem gosta de emoção.
            </Text>

          </View>


          <View style={styles.card}>

            <Text style={styles.numero}>
              02
            </Text>

            <Text style={styles.tituloCard}>
              Experiência
            </Text>

            <Text style={styles.textoCard}>
              Momentos únicos para aproveitar no parque.
            </Text>

          </View>


        </View>


        <TouchableOpacity

          style={styles.botaoSecundario}

          onPress={() => navigation.navigate('Brinquedos')}

        >

          <Text style={styles.textoBotaoSecundario}>
            VER TODOS OS BRINQUEDOS
          </Text>

        </TouchableOpacity>

      </View>

    </ScrollView>

  );

}



const styles = StyleSheet.create({


  container: {

    flex: 1,

    backgroundColor: '#F4F1EA',

  },


  banner: {

    width: '100%',

    height: 650,

  },


  overlay: {

    flex: 1,

    backgroundColor: 'rgba(0, 0, 0, 0.52)',

    paddingHorizontal: 24,

    paddingTop: 55,

    paddingBottom: 50,

    justifyContent: 'space-between',

  },


  topo: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },


  logo: {

    color: '#FFFFFF',

    fontSize: 23,

    fontWeight: 'bold',

    letterSpacing: 4,

  },


  menu: {

    color: '#FFFFFF',

    fontSize: 12,

    letterSpacing: 2,

    borderWidth: 1,

    borderColor: 'rgba(255,255,255,0.7)',

    borderRadius: 30,

    paddingHorizontal: 16,

    paddingVertical: 8,

  },


  conteudoBanner: {

    width: '100%',

    maxWidth: 500,

  },


  pequenoTitulo: {

    fontSize: 12,

    color: '#FFCC00',

    fontWeight: 'bold',

    letterSpacing: 2.5,

    marginBottom: 15,

  },


  titulo: {

    fontSize: 46,

    lineHeight: 52,

    fontWeight: 'bold',

    color: '#FFFFFF',

    marginBottom: 20,

  },


  descricao: {

    fontSize: 17,

    lineHeight: 25,

    color: '#EEEEEE',

    maxWidth: 360,

    marginBottom: 32,

  },


  botao: {

    backgroundColor: '#FFCC00',

    alignSelf: 'flex-start',

    paddingHorizontal: 28,

    paddingVertical: 16,

    borderRadius: 30,

  },


  textoBotao: {

    color: '#111111',

    fontSize: 13,

    fontWeight: 'bold',

    letterSpacing: 1.4,

  },


  secao: {

    paddingHorizontal: 24,

    paddingTop: 40,

    paddingBottom: 50,

  },


  subtitulo: {

    fontSize: 32,

    fontWeight: 'bold',

    color: '#171717',

    marginBottom: 10,

  },


  textoSecao: {

    fontSize: 16,

    lineHeight: 24,

    color: '#666666',

    marginBottom: 28,

  },


  linhaCards: {

    flexDirection: 'row',

    gap: 14,

    marginBottom: 30,

  },


  card: {

    flex: 1,

    minHeight: 180,

    backgroundColor: '#FFFFFF',

    borderRadius: 24,

    padding: 20,

    justifyContent: 'space-between',

    elevation: 3,

    shadowColor: '#000',

    shadowOffset: {

      width: 0,

      height: 4,

    },

    shadowOpacity: 0.08,

    shadowRadius: 10,

  },


  numero: {

    fontSize: 13,

    fontWeight: 'bold',

    color: '#F0A500',

  },


  tituloCard: {

    fontSize: 21,

    fontWeight: 'bold',

    color: '#222222',

    marginTop: 22,

  },


  textoCard: {

    fontSize: 14,

    lineHeight: 20,

    color: '#777777',

    marginTop: 8,

  },


  botaoSecundario: {

    backgroundColor: '#151515',

    width: '100%',

    paddingVertical: 17,

    borderRadius: 16,

    alignItems: 'center',

  },


  textoBotaoSecundario: {

    color: '#FFFFFF',

    fontSize: 13,

    fontWeight: 'bold',

    letterSpacing: 1.3,

  },


});