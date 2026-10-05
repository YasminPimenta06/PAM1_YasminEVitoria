import React from 'react';

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

  function fazerAcusacao() {
    navigation.navigate('Acusacao');
  }


  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
      showsVerticalScrollIndicator={false}
    >

      {/* CABEÇALHO */}

      <View style={styles.topo}>

        <View style={styles.status}>
          <View style={styles.bolinha} />

          <Text style={styles.statusTexto}>
            CASO EM ABERTO
          </Text>
        </View>

        <Text style={styles.numeroCaso}>
          #001
        </Text>

      </View>


      {/* APRESENTAÇÃO DO CASO */}

      <Text style={styles.categoria}>
        ARQUIVO DE INVESTIGAÇÃO
      </Text>

      <Text style={styles.titulo}>
        O Colar{'\n'}Desaparecido
      </Text>

      <Text style={styles.descricao}>
        Durante uma festa na Mansão Oliveira, um valioso
        colar de diamantes desapareceu sem deixar pistas claras.
      </Text>


      {/* INFORMAÇÕES RÁPIDAS */}

      <View style={styles.resumo}>

        <View style={styles.resumoItem}>
          <Text style={styles.resumoIcone}>🕙</Text>

          <View>
            <Text style={styles.resumoRotulo}>
              HORÁRIO
            </Text>

            <Text style={styles.resumoValor}>
              22h — 23h
            </Text>
          </View>
        </View>


        <View style={styles.separadorVertical} />


        <View style={styles.resumoItem}>
          <Text style={styles.resumoIcone}>📍</Text>

          <View>
            <Text style={styles.resumoRotulo}>
              LOCAL
            </Text>

            <Text style={styles.resumoValor}>
              Mansão Oliveira
            </Text>
          </View>
        </View>

      </View>


      {/* MISSÃO */}

      <View style={styles.missao}>

        <Text style={styles.missaoNumero}>
          01
        </Text>

        <View style={styles.missaoConteudo}>

          <Text style={styles.missaoTitulo}>
            SUA MISSÃO
          </Text>

          <Text style={styles.missaoTexto}>
            Descubra quem roubou o colar analisando pessoas,
            pistas e versões do ocorrido.
          </Text>

        </View>

      </View>


      {/* INVESTIGAÇÃO */}

      <View style={styles.secaoCabecalho}>

        <Text style={styles.secaoTitulo}>
          Investigação
        </Text>

        <Text style={styles.secaoSubtitulo}>
          Escolha por onde começar
        </Text>

      </View>


      <TouchableOpacity
        style={styles.card}
        onPress={abrirSuspeitos}
        activeOpacity={0.7}
      >

        <View style={styles.cardIcone}>
          <Text style={styles.emoji}>👥</Text>
        </View>

        <View style={styles.cardConteudo}>

          <Text style={styles.cardNumero}>
            01
          </Text>

          <Text style={styles.cardTitulo}>
            Suspeitos
          </Text>

          <Text style={styles.cardDescricao}>
            Conheça as quatro pessoas presentes na mansão.
          </Text>

        </View>

        <Text style={styles.seta}>
          →
        </Text>

      </TouchableOpacity>


      <TouchableOpacity
        style={styles.card}
        onPress={abrirEvidencias}
        activeOpacity={0.7}
      >

        <View style={styles.cardIcone}>
          <Text style={styles.emoji}>🔍</Text>
        </View>

        <View style={styles.cardConteudo}>

          <Text style={styles.cardNumero}>
            02
          </Text>

          <Text style={styles.cardTitulo}>
            Evidências
          </Text>

          <Text style={styles.cardDescricao}>
            Examine as pistas encontradas na cena.
          </Text>

        </View>

        <Text style={styles.seta}>
          →
        </Text>

      </TouchableOpacity>


      <TouchableOpacity
        style={styles.card}
        onPress={abrirDepoimentos}
        activeOpacity={0.7}
      >

        <View style={styles.cardIcone}>
          <Text style={styles.emoji}>💬</Text>
        </View>

        <View style={styles.cardConteudo}>

          <Text style={styles.cardNumero}>
            03
          </Text>

          <Text style={styles.cardTitulo}>
            Depoimentos
          </Text>

          <Text style={styles.cardDescricao}>
            Compare as versões dadas pelos envolvidos.
          </Text>

        </View>

        <Text style={styles.seta}>
          →
        </Text>

      </TouchableOpacity>


      {/* ACUSAÇÃO */}

      <View style={styles.areaFinal}>

        <Text style={styles.finalPequeno}>
          CONCLUIU SUA INVESTIGAÇÃO?
        </Text>

        <Text style={styles.finalTitulo}>
          Quem roubou o colar?
        </Text>

        <Text style={styles.finalDescricao}>
          Quando estiver confiante em sua conclusão,
          faça sua acusação.
        </Text>


        <TouchableOpacity
          style={styles.botaoAcusacao}
          onPress={fazerAcusacao}
          activeOpacity={0.8}
        >

          <Text style={styles.botaoAcusacaoTexto}>
            FAZER ACUSAÇÃO
          </Text>

          <Text style={styles.botaoSeta}>
            →
          </Text>

        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#101014',
  },

  conteudo: {
    paddingHorizontal: 22,
    paddingTop: 15,
    paddingBottom: 45,
  },


  // TOPO

  topo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 35,
  },

  status: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  bolinha: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#C7A95B',
    marginRight: 8,
  },

  statusTexto: {
    color: '#999999',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },

  numeroCaso: {
    color: '#55555D',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
  },


  // CASO

  categoria: {
    color: '#C7A95B',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2.5,
    marginBottom: 10,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: 'bold',
    lineHeight: 43,
    letterSpacing: -1,
  },

  descricao: {
    color: '#929299',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 15,
    maxWidth: 350,
  },


  // RESUMO

  resumo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#17171C',
    borderRadius: 12,
    marginTop: 28,
    paddingVertical: 18,
    paddingHorizontal: 16,
  },

  resumoItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  resumoIcone: {
    fontSize: 19,
    marginRight: 10,
  },

  resumoRotulo: {
    color: '#66666E',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  resumoValor: {
    color: '#E5E5E5',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 3,
  },

  separadorVertical: {
    width: 1,
    height: 35,
    backgroundColor: '#2A2A31',
    marginHorizontal: 12,
  },


  // MISSÃO

  missao: {
    flexDirection: 'row',
    marginTop: 25,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#24242A',
  },

  missaoNumero: {
    color: '#C7A95B',
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 18,
    marginTop: 2,
  },

  missaoConteudo: {
    flex: 1,
  },

  missaoTitulo: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },

  missaoTexto: {
    color: '#85858C',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 7,
  },


  // SEÇÃO

  secaoCabecalho: {
    marginTop: 32,
    marginBottom: 18,
  },

  secaoTitulo: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  secaoSubtitulo: {
    color: '#6F6F76',
    fontSize: 12,
    marginTop: 4,
  },


  // CARDS

  card: {
    minHeight: 105,
    backgroundColor: '#17171C',
    borderRadius: 12,
    padding: 16,
    marginBottom: 11,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardIcone: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#222228',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  emoji: {
    fontSize: 22,
  },

  cardConteudo: {
    flex: 1,
  },

  cardNumero: {
    color: '#C7A95B',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },

  cardTitulo: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 3,
  },

  cardDescricao: {
    color: '#74747B',
    fontSize: 12,
    lineHeight: 17,
    marginTop: 4,
    paddingRight: 5,
  },

  seta: {
    color: '#C7A95B',
    fontSize: 20,
    marginLeft: 10,
  },


  // FINAL

  areaFinal: {
    marginTop: 35,
    paddingTop: 28,
    borderTopWidth: 1,
    borderTopColor: '#24242A',
  },

  finalPequeno: {
    color: '#C7A95B',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  finalTitulo: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },

  finalDescricao: {
    color: '#77777F',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 7,
  },

  botaoAcusacao: {
    backgroundColor: '#C7A95B',
    borderRadius: 10,
    paddingVertical: 17,
    paddingHorizontal: 18,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  botaoAcusacaoTexto: {
    color: '#101014',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1.3,
  },

  botaoSeta: {
    color: '#101014',
    fontSize: 20,
    fontWeight: 'bold',
  },

});