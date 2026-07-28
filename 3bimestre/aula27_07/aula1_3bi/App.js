import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Button } from 'react-native';



export default function App() {
  return (
    <ScrollView >
      <View style={styles.fundo}>
        <Text style={styles.tituloPrincipal}>QUIZUR</Text>

        <TextInput
          placeholder="Pesquisar quizes..."
          placeholderTextColor="#777"
          style={styles.input}
        />

        <Image
          source={{
            uri: 'https://conteudo.imguol.com.br/c/entretenimento/93/2023/08/08/rapunzel-tem-uma-historia-do-seculo-x-como-inspiracao-1691530753314_v2_4x3.jpg',
          }}
          style={styles.imagem}
          resizeMode="cover"
        />

        <View style={styles.card}>
          <Text style={styles.pergunta}>Qual o nome dessa princesa?</Text>

           <TextInput
          placeholder="Insira"
          placeholderTextColor="#777"
          style={styles.input}
        />
        <Button 
        title="Enviar" 
        onPress={() => Alert.alert('Button pressed')} 
        color="#5d3972"
        
      />

      <Text style={styles.pergunta}>Qual o nome do camaleão?</Text>

           <TextInput
          placeholder="Insira"
          placeholderTextColor="#777"
          style={styles.input}
        />
        <Button 
        title="Enviar" 
        onPress={() => Alert.alert('Button pressed')} 
        color="#5d3972"
      />
  

      



        </View>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9dOxc8y-WIESkulR2bwY6cuU4pDCJDpagfKjjzNzTO6d5QMalccJUruM&s=10',
          }}
          style={styles.imagem}
          resizeMode="cover"
        />
         <View style={styles.card}>
          <Text style={styles.pergunta}>Qual o poder da princesa Elsa?</Text>

           <TextInput
          placeholder="Será que você sabe?"
          placeholderTextColor="#777"
          style={styles.input}
        />
        <Button 
        title="Enviar" 
        onPress={() => Alert.alert('Button pressed')} 
        color="#125baa"
        
      />

      <Text style={styles.pergunta}>Qual o nome da princesa que teve o coração congelado?</Text>

           <TextInput
          placeholder="Será que você sabe?"
          placeholderTextColor="#777"
          style={styles.input}
        />
        <Button 
        title="Enviar" 
        onPress={() => Alert.alert('Button pressed')} 
        color="#125baa"
      
        
      />
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#f1ddf3',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 40,
  },

  tituloPrincipal: {
    fontSize: 26,
    paddingVertical: 20,
    fontWeight: 'bold',
    color: '#292929',
  },

  input: {
    width: '90%',
    maxWidth: 600,
    height: 45,
    marginBottom: 20,
    paddingHorizontal: 12,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#d4c9c9',
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },

  imagem: {
    width: '90%',
    maxWidth: 600,
    height: 220,
    borderRadius: 5,
    marginTop: 20
  },

  card: {
    width: '90%',
    maxWidth: 600,
    backgroundColor: 'rgb(255, 251, 251)',
    padding: 18,
    marginTop: 12,
    borderRadius: 10,
  },

  pergunta: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#222222',
  },

  ingrediente: {
    marginLeft: 20,
    marginBottom: 8,
    fontSize: 16,
    color: '#333333',
  },
  
});
