import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Button } from 'react-native';



export default function App() {
  return (
    <ScrollView>
      <View style={styles.fundo}>
        <Text style={styles.tituloPrincipal}>Minha receita</Text>

        <TextInput
          placeholder="Pesquisar receitas..."
          placeholderTextColor="#777"
          style={styles.input}
        />

        <Image
          source={{
            uri: 'https://receitadaboa.com.br/wp-content/uploads/2024/12/bolo-de-chocolate.jpg',
          }}
          style={styles.imagem}
          resizeMode="cover"
        />

        <View style={styles.card}>
          <Text style={styles.nomeReceita}>Bolo de chocolate</Text>

          <View style={styles.linhaIngredientes}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/736x/3d/63/0e/3d630e7c96d574c2cf8d8f164b50c493.jpg',
              }}
              style={styles.icone}
              resizeMode="cover"
            />

            <Text style={styles.componentes}>Ingredientes</Text>
          </View>

          <Text style={styles.ingrediente}>• 2 xícaras de farinha</Text>
          <Text style={styles.ingrediente}>• 3 ovos</Text>
          <Text style={styles.ingrediente}>• 1 xícara de açúcar</Text>
          <Text style={styles.ingrediente}>
            • 1 xícara de chocolate em pó
          </Text>
          <Text style={styles.ingrediente}>• 1 colher de fermento</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flexGrow: 1,
    backgroundColor: '#ffeadd',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 40,
  },

  tituloPrincipal: {
    fontSize: 26,
    paddingVertical: 20,
    fontWeight: 'bold',
    color: '#ffffff',
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
    borderRadius: 20,
  },

  card: {
    width: '90%',
    maxWidth: 600,
    backgroundColor: '#ffffff',
    padding: 18,
    marginTop: 12,
    borderRadius: 10,
  },

  nomeReceita: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#222222',
  },

  linhaIngredientes: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  icone: {
    width: 52,
    height: 52,
    borderRadius: 8,
    marginRight: 1,
  },

  componentes: {
    color: '#cf6b6b',
    fontSize: 20,
    fontWeight: 'bold',
  },

  ingrediente: {
    marginLeft: 20,
    marginBottom: 8,
    fontSize: 16,
    color: '#333333',
  },
});
