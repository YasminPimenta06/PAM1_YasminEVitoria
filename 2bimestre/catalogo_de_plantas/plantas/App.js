import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.fundo}>
      <StatusBar style="light" />

      <View style={styles.container}>
        <Text style={styles.titulo}>CATÁLOGO DE PLANTAS</Text>
        <Text style={styles.subtitulo}>Conheça algumas plantas e seus benefícios</Text>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://blog.plantei.com.br/wp-content/uploads/2021/07/costela-de-adao.jpg' }}
            style={styles.imagem}
          />

          <Text style={styles.nome}>COSTELA DE ADAO</Text>
          <Text style={styles.texto}>
            A babosa é uma planta medicinal muito conhecida. Suas folhas possuem um gel usado em cuidados com a pele e cabelos.
          </Text>

          <Button onPress={() => {setIsHungry(false);}} title={'VER PLANTAS ORNAMENTAIS'} />
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://blog.plantei.com.br/wp-content/uploads/2024/09/samamabaia-americana-lojaplantei.jpg' }}
            style={styles.imagem}
          />

          <Text style={styles.nome}>SAMAMBAIA</Text>
          <Text style={styles.texto}>
            O abacateiro é a árvore que produz o abacate. Ele gosta de clima quente e seu fruto é rico em vitaminas e gorduras boas.
          </Text>

          <Button onPress={() => {setIsHungry(false);}} title={'VER MAIS'} />
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://cdnm.westwing.com.br/glossary/uploads/br/2023/11/03213041/Moderna-e-exotica-a-planta-colar-de-perola-e-uma-otima-opcao-para-usar-na-sua-decoracao.-Fonte.-Pexels.jpg' }}
            style={styles.imagem}
          />

          <Text style={styles.nome}>COLAR DE PEROLA</Text>
          <Text style={styles.texto}>
            A rosa é uma das flores mais conhecidas do mundo. Ela é muito usada em jardins, buquês e decorações.
          </Text>

          <Button onPress={() => {setIsHungry(false);}} title={'VER SUCULENTAS'} style={{color: '#966161'}}/>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#a9d3a5',
  },

  container: {
    padding: 20,
    alignItems: 'center',
  },

  titulo: {
    textAlign: 'center',
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 27,
    color: '#080f08',
  },

  subtitulo: {
    textAlign: 'center',
    fontSize: 16,
    color: '#168f1e',
    marginTop: 8,
    fontFamily: 'Roboto',
    marginBottom: 25,
  },

  card: {
    width: '80%',
    backgroundColor: '#110f0f',
        padding: 18,
    
    
  },

  imagem: {
    width: '100%',
    height: 350,
    marginBottom: 15,
  },

  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },

  texto: {
    fontSize: 15,
    color: '#818080',  
    marginBottom: 15,
    fontFamily: 'Roboto'
  },
  botao: {
    Color: '#df3f3f'
  }
});