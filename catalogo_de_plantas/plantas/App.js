import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.fundo}>
      <View>
      <Text style = {styles.titulo}>CATÁLOGO DE PLANTAS</Text>
      </View>
      <View>
        <Button onPress={() => {setIsHungry(false);}} title={'Babosa'}>
        </Button>

        <Button onPress={() => {setIsHungry(false);}} title={'Abacatero'}>
        </Button>

        <Button onPress={() => {setIsHungry(false);}} title={'Rosa'}>
        </Button>


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    height: '100%', 
    width: '100%',
    backgroundColor: '#71cc5e',
    textAlign: 'center'
  },
  titulo: {
    textAlign: 'center',
    padding: 15,
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 20
  }
});
