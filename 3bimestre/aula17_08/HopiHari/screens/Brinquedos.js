import {
  View,
  ScrollView,
  Text,
  Image,
  FlatList,
  StyleSheet
} from 'react-native';


export default function Brinquedos() {

  const brinquedos = [

    {
      id: '1',
      nome: 'Montezum',
      categoria: 'RADICAL',
      descricao: 'Uma das atrações mais famosas do parque.',
      foto: 'https://blog.hopihari.com.br/wp-content/uploads/2019/11/montezum-2.jpg'
    },

    {
      id: '2',
      nome: 'Katapul',
      categoria: 'RADICAL',
      descricao: 'Velocidade e adrenalina em uma experiência intensa.',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAuXWOcdyuBCS2kPlnqdXwsfAcy_N7oiig8Ljo9SCISwiCIfgbM2QfH49&s=10'
    },

    {
      id: '3',
      nome: 'Evolution',
      categoria: 'RADICAL',
      descricao: 'Uma atração para quem procura muita emoção.',
      foto: 'https://blog.hopihari.ig.com.br/wp-content/uploads/2024/11/evolution.jpg'
    },

    {
      id: '4',
      nome: 'Rio Bravo',
      categoria: 'AVENTURA',
      descricao: 'Uma aventura pelas águas para curtir o parque.',
      foto: 'https://blog.hopihari.com.br/wp-content/uploads/2021/09/rb.png'
    }

  ];


  return (

    <View style={styles.container}>

      <FlatList

        data={brinquedos}

        keyExtractor={(item) => item.id}

        showsVerticalScrollIndicator={false}


        ListHeaderComponent={

          <View>

            <View style={styles.cabecalho}>

              <Text style={styles.pequenoTitulo}>
                EXPERIÊNCIA HOPI HARI
              </Text>

              <Text style={styles.titulo}>
                Explore as atrações
              </Text>

              <Text style={styles.subtitulo}>
                Descubra algumas das atrações mais incríveis do parque.
              </Text>

            </View>


            <ScrollView

              horizontal

              showsHorizontalScrollIndicator={false}

              contentContainerStyle={styles.conteudoCategorias}

            >

              <View style={styles.categoriaAtiva}>

                <Text style={styles.textoCategoriaAtiva}>
                  TODAS
                </Text>

              </View>


              <View style={styles.categoriaBotao}>

                <Text style={styles.textoCategoria}>
                  RADICAIS
                </Text>

              </View>


              <View style={styles.categoriaBotao}>

                <Text style={styles.textoCategoria}>
                  AVENTURA
                </Text>

              </View>


              <View style={styles.categoriaBotao}>

                <Text style={styles.textoCategoria}>
                  FAMÍLIA
                </Text>

              </View>


              <View style={styles.categoriaBotao}>

                <Text style={styles.textoCategoria}>
                  INFANTIL
                </Text>

              </View>

            </ScrollView>

          </View>

        }


        renderItem={({ item }) => (

          <View style={styles.card}>

            <Image
              source={{ uri: item.foto }}
              style={styles.imagem}
              resizeMode="cover"
            />


            <View style={styles.conteudoCard}>

              <Text style={styles.tipo}>
                {item.categoria}
              </Text>

              <Text style={styles.nome}>
                {item.nome}
              </Text>

              <Text style={styles.descricao}>
                {item.descricao}
              </Text>

            </View>

          </View>

        )}

      />

    </View>

  );

}



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F4F1EA',

  },


  cabecalho: {

    paddingHorizontal: 24,

    paddingTop: 30,

    paddingBottom: 20,

  },


  pequenoTitulo: {

    fontSize: 11,

    color: '#D99A00',

    fontWeight: 'bold',

    letterSpacing: 2.5,

    marginBottom: 8,

  },


  titulo: {

    fontSize: 34,

    fontWeight: 'bold',

    color: '#171717',

  },


  subtitulo: {

    fontSize: 15,

    color: '#666666',

    lineHeight: 22,

    marginTop: 8,

  },


  conteudoCategorias: {

    paddingHorizontal: 24,

    paddingBottom: 25,

    gap: 10,

  },


  categoriaAtiva: {

    backgroundColor: '#171717',

    paddingHorizontal: 22,

    paddingVertical: 11,

    borderRadius: 30,

  },


  categoriaBotao: {

    backgroundColor: '#FFFFFF',

    paddingHorizontal: 22,

    paddingVertical: 11,

    borderRadius: 30,

    borderWidth: 1,

    borderColor: '#E0DDD5',

  },


  textoCategoriaAtiva: {

    color: '#FFFFFF',

    fontSize: 11,

    fontWeight: 'bold',

    letterSpacing: 1,

  },


  textoCategoria: {

    color: '#555555',

    fontSize: 11,

    fontWeight: 'bold',

    letterSpacing: 1,

  },


  card: {

    backgroundColor: '#FFFFFF',

    marginHorizontal: 20,

    marginBottom: 24,

    borderRadius: 22,

    overflow: 'hidden',

    elevation: 4,

    shadowColor: '#000',

    shadowOffset: {

      width: 0,

      height: 4,

    },

    shadowOpacity: 0.10,

    shadowRadius: 10,

  },


  imagem: {

    width: '100%',

    height: 240,

  },


  conteudoCard: {

    padding: 20,

  },


  tipo: {

    fontSize: 11,

    color: '#D99A00',

    fontWeight: 'bold',

    letterSpacing: 2,

    marginBottom: 6,

  },


  nome: {

    fontSize: 25,

    fontWeight: 'bold',

    color: '#171717',

    marginBottom: 7,

  },


  descricao: {

    fontSize: 15,

    lineHeight: 22,

    color: '#707070',

  },

});