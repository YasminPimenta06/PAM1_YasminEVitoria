import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Image} from 'react-native';

export default function App() {
  return (
     <ScrollView style={styles.tela} contentContainerStyle={styles.conteudo}>
      <View style={styles.fundo}>
      <Image source={{
         uri: 'https://s3-alpha.figma.com/hub/file/2729744958/2a5758d6-4edb-4047-87bb-e6b94dbbbab0-cover.png'
      }}
      style={styles.logo}
/>

  <View>
  <Text style ={styles.textTitulo}>LOGIN</Text>
  <TextInput
  style={styles.inputEmail}
  placeholder="Digite seu e-mail..."
  placeholderTextColor="#6d6d6d"
/>

  <TextInput
  style={styles.inputEmail}
  placeholder="Ex: 123abc"
  secureTextEntry
  placeholderTextColor="#6d6d6d"
/>
 </View>
      <View style = {styles.card}>
        <ScrollView>
        <Text style={styles.cardTitulo}>SOBRE NÓS</Text>
        <Text style={styles.cardTexto}>
          <Text>
          A tecnologia transforma nossa vida diariamente{"\n"}
          O conhecimento abre portas para oportunidades{"\n"}
          Aprender matemática desenvolve raciocínio lógico sempre{"\n"}
          A criatividade impulsiona projetos inovadores incríveis{"\n"}
          Os desafios fortalecem habilidades importantes futuras{"\n"}
          O esforço constante gera grandes resultados{"\n"}
          </Text>
        </Text>
        </ScrollView>
      </View>

      <View style = {styles.card2}>
        <ScrollView>
        <Text style={styles.cardTitulo}>MISSÃO, VISÃO E VALORES</Text>
        <Text style={styles.cardTexto}>
          <Text>
          A tecnologia transforma nossa vida diariamente{"\n"}
          O conhecimento abre portas para oportunidades{"\n"}
          Aprender matemática desenvolve raciocínio lógico sempre{"\n"}
          A criatividade impulsiona projetos inovadores incríveis{"\n"}
          Os desafios fortalecem habilidades importantes futuras{"\n"}
          O esforço constante gera grandes resultados{"\n"}
          </Text>
        </Text>
        </ScrollView>
      </View>     

      <View> 
        <Text style = {{fontSize: 30, 
          borderColor: '#ffff', 
          marginTop: 40, 
          marginBottom: 30, 
          textAlign: 'center', 
          color: '#ffff', 
          fontFamily: 'sans-serif-light', 
          fontWeight: 'bold'}}>
           FOLHA DE S.PAULO 
        </Text> 
        <View style = {{flexDirection: 'row'}}> 
         <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/1/14/Folha_de_S.Paulo_em_18_de_dezembro_de_2025.jpg/250px-Folha_de_S.Paulo_em_18_de_dezembro_de_2025.jpg',
          }}
          style={styles.noticias}>
         </Image>

          <Image
          source={{
            uri: 'https://f.i.uol.com.br/fotografia/2019/08/19/15661903995d5a2b3f6d3fe_1566190399_9x16_sm.jpg',
          }}
          style={styles.noticias}>
         </Image>
       </View>
      </View>


</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({ 
  tela: {
  width: 400, 
  backgroundColor: 'black', 
}, 
conteudo: { 
  padding: 20, 
  alignItems: 'center', 
},

 textTitulo: { 
  color: '#d7dece', 
  fontSize: 25, 
  marginLeft: 33, 
  marginBottom: 10,
  fontFamily: 'sans-serif-light',
  fontWeight: 'bold' 
},
 card: { 
  width: 300, 
  height: 200, 
  backgroundColor: '#3f7311', 
  padding: 18, 
  borderRadius: 18, 
  marginBottom: 18,
  marginTop: 20, 
  borderWidth: 1, 
  borderColor: '#fafafa', 
  alignContent: 'center',
  alignSelf: 'center'
},
 cardTitulo: { 
  color: '#FFFFFF', 
  fontSize: 20, 
  fontFamily: 'sans-serif-light', 
  fontWeight: 'bold', 
  marginBottom: 30, 
  marginLeft: 5, 
  marginTop: 10,

},
card2: {
  backgroundColor: '#ab8e01',
  color: '#0000',
  width: 300, 
  height: 200, 
  padding: 18, 
  borderRadius: 18, 
  marginBottom: 18,
  marginTop: 20, 
  borderWidth: 1, 
  borderColor: '#fafafa', 
  alignContent: 'center',
  alignSelf: 'center'
},
 cardTexto: {
   color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 22, 
},
   // Fundo azul 
  fundo: {
   backgroundColor:'#062870',   
    borderRadius: 20, 
    width: 400, 
},

  // Logo do Google
    logo: { 
      width: 100, 
      height: 120, 
      resizeMode: 'contain', 
      alignSelf: 'center', 
      marginBottom: 20, 
},
  // Caixas de texto de email e senha
    inputEmail: { 
      width: '70%', 
      height: 50, 
      borderLeftWidth: 20, 
      marginLeft: 30, 
      margin: 20, 
      paddingInlineStart: 10, 
      backgroundColor: '#ffffff',
      borderWidth: 2,
      borderColor: '#05014e',
},
noticias: {
  margin: 20,
  width: '40%',
  height: 280,
  resizeMode: 'cover',
  borderRadius: 20
}

}); 