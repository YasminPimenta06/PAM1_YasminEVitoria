import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, ImageBackground, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.tela}>
      <View style={styles.topo}>
       <Image
          source={{
            uri: 'https://s2-ge.glbimg.com/RGU5LEYpvpcPRro8r9wxAEvmltU=/0x0:2048x2048/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/q/Q/e3U1thRemgE9lEG0J4gQ/logo-fifa.jpg',
          }}
          style = {styles.logo}
          resizeMode="cover"
        />
        
       
      </View>

     <View style={styles.divisor} />  

     <View style = {{flexDirection: 'row'}}>
  <Text style={styles.nome}>Neymar Jr.</Text>
  <Text style={styles.posicao}>Atacante da Seleção Brasileira </Text>
</View>
      <ImageBackground
  source={{
    uri: 'https://i.pinimg.com/236x/f7/fa/3b/f7fa3b7d126cb49db27fe2c4cdd393ed.jpg'
  }}
  style={styles.cardPrincipal}
  imageStyle={styles.fundoFigurinha}
>
        <Image
          source={{
            uri: 'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2026/05/14/gettyimages-1732559742-1jeir7si3k1mb.jpg',
          }}
          style={styles.imagem}
          resizeMode="cover"
        />
        
        

        <View style={styles.linhaInfo}>
         
          <View style={styles.caixaInfo}>
            <Text style={styles.numero}>10</Text>
            <Text style={styles.rotulo}>Camisa</Text>
          </View>

          <View style={styles.caixaInfo}>
            <Text style={styles.numero}>31</Text>
            <Text style={styles.rotulo}>Idade</Text>
          </View>

          <View style={styles.caixaInfo}>
            <Text style={styles.numero}>1,75m</Text>
            <Text style={styles.rotulo}>Altura</Text>
          </View>
        </View>
      </ImageBackground>


      
      
      
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tela: {
    width: 600,
    backgroundColor: '#000000',
    
  },
  logo: {
    width: 200,
    height: 200, 
    alignSelf: 'center'
  },
  topo: {
    marginTop: 1,
    marginBottom: 5,
  },
  divisor: {
    borderBottomColor: '#ccc', // Cor da linha
    borderBottomWidth: 1,      // Espessura da linha
    marginVertical: 5,        // Espaço acima e abaixo da linha
  },
  cardPrincipal: {
    backgroundColor: '#000000',
    borderRadius: 25,
    width:300,
    height: 350,
    alignItems: 'center',
    marginLeft: 40
  },
  imagem: {
    width: 200,
    height: 290,
    borderColor: '#0db904',
    marginTop: 20
  },
  nome: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20
  },
  posicao: {
    color: '#ffffff',
    fontSize: 15,
    marginTop: 15,
    marginLeft: 20

  },
  linhaInfo: {
    flexDirection: 'row',
    marginTop: 50,
    marginLeft:10
  },
  caixaInfo: {
    backgroundColor: '#1f2937',
    padding: 15,
    borderRadius: 15,
    margin: 5,
    
    width: 100,
  },
  numero: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  rotulo: {
    color: '#9ca3af',
    fontSize: 13,
    marginTop: 5,
  },
});
