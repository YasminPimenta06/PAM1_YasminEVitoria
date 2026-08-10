import {View, ScrollView, Text,Image,TouchableOpacity, StyleSheet} from 'react-native';

export default function Ingresso({ navigation }) {
  return (
    <ScrollView style={styles.fundo}>

      <Text style={styles.tituloPagina}>
        CINEPOP
      </Text>

      <View style={styles.card}>

        <Text style={styles.tituloHorario}>
          HORÁRIOS
        </Text>

        <View style={styles.linhaDias}>

          <TouchableOpacity style={styles.diaSelecionado}>
            <Text style={styles.textoDiaSelecionado}>
              HOJE
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.diasSemana}>
            <Text style={styles.textoDia}>
              AMANHÃ
            </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.conteudo}>

          <Image
            source={{
              uri: 'https://ingresso-a.akamaihd.net/b2b/production/uploads/articles-content/382e8ee5-9dea-4fff-86ea-0f59d9027a85.jpg'
            }}
            style={styles.poster}
          />

          <View style={styles.sessoes}>

            <Text style={styles.sala}>SALA 1 DUB</Text>

            <View style={styles.linhaHorarios}>
              <TouchableOpacity style={styles.horario}>
                <Text style={styles.textoHorario}>14:00</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.horario}>
                <Text style={styles.textoHorario}>16:30</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.horario}>
                <Text style={styles.textoHorario}>19:00</Text>
              </TouchableOpacity>
            </View>


            <Text style={styles.sala}>SALA 2 VIP</Text>

            <View style={styles.linhaHorarios}>
              <TouchableOpacity style={styles.horario}>
                <Text style={styles.textoHorario}>15:00</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.horario}>
                <Text style={styles.textoHorario}>18:00</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.horario}>
                <Text style={styles.textoHorario}>21:00</Text>
              </TouchableOpacity>
            </View>


            <Text style={styles.sala}>SALA 3D</Text>

            <View style={styles.linhaHorarios}>
              <TouchableOpacity style={styles.horario}>
                <Text style={styles.textoHorario}>17:00</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.horario}>
                <Text style={styles.textoHorario}>20:00</Text>
              </TouchableOpacity>
            </View>


            <Text style={styles.sala}>SALA 4XD</Text>

            <View style={styles.linhaHorarios}>
              <TouchableOpacity style={styles.horario}>
                <Text style={styles.textoHorario}>13:00</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.horario}>
                <Text style={styles.textoHorario}>19:40</Text>
              </TouchableOpacity>
            </View>

          </View>

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
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 3,
    marginVertical: 20,
  },

  card: {
    backgroundColor: '#111111',
    width: '88%',
    alignSelf: 'center',
    padding: 25,
    borderRadius: 18,
    marginTop: 15,
    marginBottom: 40,

    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },

  tituloHorario: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  linhaDias: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },

  diasSemana: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
  },

  diaSelecionado: {
    backgroundColor: '#B60303',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
  },

  textoDia: {
    color: '#111111',
    fontSize: 16,
    fontWeight: 'bold',
  },

  textoDiaSelecionado: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  conteudo: {
    flexDirection: 'row',
    marginTop: 30,
  },

  poster: {
    width: 440,
    height: 600,
    borderRadius: 12,
    marginRight: 25,
  },

  sessoes: {
    flex: 1,
  },

  sala: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
  },

  linhaHorarios: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },

  horario: {
    backgroundColor: '#630000',
    padding: 12,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },

  textoHorario: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

});