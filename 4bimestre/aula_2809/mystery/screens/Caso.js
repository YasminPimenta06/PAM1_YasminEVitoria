import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function Caso({ navigation }) {

  function abrirSuspeitos() {
    navigation.navigate('Suspeitos');
  }

  function abrirEvidencias() {
    navigation.navigate('Evidencias');
  }

  function abrirDepoimentos() {
    navigation.navigate('Depoimentos');
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
    >

      <Text style={styles.status}>
        ● CASO EM ABERTO
      </Text>

      <Text style={styles.numero}>
        CASO #001
      </Text>

      <Text style={styles.titulo}>
        O COLAR DESAPARECIDO
      </Text>

      <View style={styles.linha} />

      <Text style={styles.icone}>
        💎
      </Text>

      <Text style={styles.texto}>
        Durante uma festa na Mansão Oliveira, um valioso
        colar de diamantes desapareceu misteriosamente.
      </Text>

      <Text style={styles.texto}>
        O roubo aconteceu entre 22:00 e 23:00. Quatro
        pessoas estavam na mansão durante o período
        do crime.
      </Text>

      <View style={styles.alerta}>

        <Text style={styles.alertaTitulo}>
          ⚠ SUA MISSÃO
        </Text>

        <Text style={styles.alertaTexto}>
          Analise os suspeitos, examine as evidências
          e compare os depoimentos. Quando estiver
          preparado, faça sua acusação.
        </Text>

      </View>

      <Text style={styles.investigar}>
        🔎 O QUE DESEJA INVESTIGAR?
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={abrirSuspeitos}
      >
        <Text style={styles.emojiBotao}>👥</Text>

        <View>
          <Text style={styles.tituloBotao}>
            SUSPEITOS
          </Text>

          <Text style={styles.descricaoBotao}>
            Conheça as pessoas envolvidas
          </Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botao}
        onPress={abrirEvidencias}
      >
        <Text style={styles.emojiBotao}>🔍</Text>

        <View>
          <Text style={styles.tituloBotao}>
            EVIDÊNCIAS
          </Text>

          <Text style={styles.descricaoBotao}>
            Examine as pistas encontradas
          </Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botao}
        onPress={abrirDepoimentos}
      >
        <Text style={styles.emojiBotao}>💬</Text>

        <View>
          <Text style={styles.tituloBotao}>
            DEPOIMENTOS
          </Text>

          <Text style={styles.descricaoBotao}>
            Compare as versões dos suspeitos
          </Text>
        </View>
      </TouchableOpacity>

    </ScrollView>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#101014',
  },

  conteudo: {
    padding: 25,
    paddingBottom: 50,
  },

  status: {
    color: '#B84A4A',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginTop: 15,
  },

  numero: {
    color: '#C7A95B',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 3,
    marginTop: 25,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 8,
  },

  linha: {
    height: 1,
    backgroundColor: '#333333',
    marginVertical: 25,
  },

  icone: {
    fontSize: 55,
    textAlign: 'center',
    marginBottom: 25,
  },

  texto: {
    color: '#CCCCCC',
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 18,
  },

  alerta: {
    backgroundColor: '#19191F',
    borderLeftWidth: 3,
    borderLeftColor: '#C7A95B',
    padding: 18,
    marginTop: 10,
    marginBottom: 35,
  },

  alertaTitulo: {
    color: '#C7A95B',
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 10,
  },

  alertaTexto: {
    color: '#BBBBBB',
    lineHeight: 21,
  },

  investigar: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 20,
  },

  botao: {
    backgroundColor: '#19191F',
    borderWidth: 1,
    borderColor: '#303038',
    borderRadius: 10,
    padding: 18,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  emojiBotao: {
    fontSize: 30,
    marginRight: 18,
  },

  tituloBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  descricaoBotao: {
    color: '#888888',
    fontSize: 13,
    marginTop: 5,
  },

});