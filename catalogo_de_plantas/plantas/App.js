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
            source={{ uri: 'https://s2-receitas.glbimg.com/Y3zOC3HOR0RL5TXNxzg6lanqxaA=/0x0:7072x3978/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2025/j/G/rYF3RXTdiBsAr3n5wylw/babosa-para-que-serve-entenda-os-beneficios-da-planta-para-o-cabelo-e-hidratacao-da-pele.jpg' }}
            style={styles.imagem}
          />

          <Text style={styles.nome}>BABOSA</Text>
          <Text style={styles.texto}>
            A babosa é uma planta medicinal muito conhecida. Suas folhas possuem um gel usado em cuidados com a pele e cabelos.
          </Text>

          <Button onPress={() => {setIsHungry(false);}} title={'Babosa'} />
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia27075/abacateiro-cpt.jpeg' }}
            style={styles.imagem}
          />

          <Text style={styles.nome}>ABACATEIRO</Text>
          <Text style={styles.texto}>
            O abacateiro é a árvore que produz o abacate. Ele gosta de clima quente e seu fruto é rico em vitaminas e gorduras boas.
          </Text>

          <Button onPress={() => {setIsHungry(false);}} title={'Abacatero'} />
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://s2-casavogue.glbimg.com/ccceMlQvOOZgj3lb-gFbDJE_7Co=/0x0:1920x1280/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2023/C/a/QDryJPQQqEE9XzAe7xWA/rosa-como-plantar-e-cuidar-3.jpg' }}
            style={styles.imagem}
          />

          <Text style={styles.nome}>ROSA</Text>
          <Text style={styles.texto}>
            A rosa é uma das flores mais conhecidas do mundo. Ela é muito usada em jardins, buquês e decorações.
          </Text>

          <Button onPress={() => {setIsHungry(false);}} title={'Rosa'} />
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
    color: '#1b5e20',
  },

  subtitulo: {
    textAlign: 'center',
    fontSize: 16,
    color: '#3e7d42',
    marginTop: 8,
    marginBottom: 25,
  },

  card: {
    width: '50%',
    backgroundColor: '#110f0f',
    borderRadius: 22,
    padding: 18,
    marginBottom: 25,
    alignItems: 'center'
  },

  imagem: {
    width: '100%',
    height: 190,
    borderRadius: 18,
    marginBottom: 15,
  },

  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 8,
  },

  texto: {
    fontSize: 15,
    color: '#818080',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 15,
  },
});