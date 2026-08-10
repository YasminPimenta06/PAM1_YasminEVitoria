import { View,ScrollView,Text,ImageBackground,TouchableOpacity,StyleSheet} from 'react-native';

export default function Ingresso({ navigation }) {
  return (
    <ScrollView style = {styles.fundo}>
<View>
      <Text style = {styles.tituloPagina}>
        CINEPOP
      </Text>
</View>

<View style = {styles.card}>
<Text style ={styles.tituloHorario}>
    HORÁRIOS 
</Text>

<View style={styles.diasSemana}>
  <Text style={styles.texto}>HOJE</Text>
</View>

<View style={styles.diasSemana}>
  <Text style={styles.texto}>AMANHÃ</Text>
</View>


</View>
    </ScrollView>

  );
}
const styles = StyleSheet.create({

  fundo: {
    flex: 1,
    backgroundColor: '#630000',
  },
  tituloPagina: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 3,
    marginVertical: 20,
  },
   card: {
    backgroundColor: '#000000',
    width: '80%',
    height: 800,
    alignSelf: 'center' ,
    marginBottom: 40,
    marginTop: 30,
    borderRadius: 15,
    
   },
    tituloHorario: {
    color: '#f1f1f1',
    fontSize: 32,
    fontWeight: 'bold',
    justifyContent: 'flex-end',
    padding: 30
    },
    diasSemana: {
  backgroundColor: '#FFFFFF',
  marginLeft: 20,
  width: 200,
  height: 50,
  borderRadius: 15,
  justifyContent: 'center',
  alignItems: 'center',
},

texto: {
  color: '#000000',
  fontSize: 22,
  fontWeight: 'bold',
  justifyContent: 'flex-end',
},
  });