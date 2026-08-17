import React from 'react-native';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

const brinquedos = [
  {
    id: '1',
    nome: 'Montezum',
    imagem: require('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rs4ezgj8P8Xv9aDPVn0ZlOnGFsZ55se6p4UT9VOHzXOfk-9nnFF27oA&s=10'),
  },

  {
    id: '2',
    nome: 'HADIKALI',
    imagem: require('https://i0.statig.com.br/bancodeimagens/34/1z/zv/341zzvh7llitxuk7fa07fr215.jpg'),
  },

  {
    id: '3',
    nome: 'Rio Bravo',
    imagem: require('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6TNfxPydDMV_nX6sGf0NXxgYL9OSkHSSsOq8cE7wT4BtReS9czYh8iV8&s=10'),
  },

  {
    id: '4',
    nome: 'Katapul',
    imagem: require('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLN9MsRj7P9YW2AR4lAfbrckgbpfAywYL5fChna290I7kVCquPb-QKXSA&s=10'),
  },
];

export default function Brinquedos({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        🎢 Brinquedos
      </Text>

      <Text style={styles.subtitulo}>
        Conheça algumas atrações do Hopi Hari
      </Text>

      <FlatList
        data={brinquedos}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}

        renderItem={({ item }) => (
          <View style={styles.card}>

            <Image
              source={item.imagem}
              style={styles.imagem}
            />

            <Text style={styles.nome}>
              {item.nome}
            </Text>

          </View>
        )}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.botaoTexto}>
          ← VOLTAR PARA HOME
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4E8FF',
    padding: 20,
    paddingTop: 55,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5B0FA8',
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    marginBottom: 20,
    overflow: 'hidden',

    elevation: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  imagem: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    backgroundColor: '#DDDDDD',
  },

  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5B0FA8',
    padding: 15,
    textAlign: 'center',
  },

  botao: {
    backgroundColor: '#5B0FA8',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});