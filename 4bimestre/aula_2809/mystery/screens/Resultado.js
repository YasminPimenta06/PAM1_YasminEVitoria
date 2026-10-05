import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';


export default function Resultado({ route, navigation }) {

  const { acusado } = route.params;

  const culpado = 'Lucas';

  const acertou = acusado === culpado;


  function jogarNovamente() {
    navigation.popToTop();
  }


  function voltarInvestigacao() {
    navigation.navigate('Caso');
  }


  if (acertou) {

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.conteudo}
      >

        <Text style={styles.iconeResultado}>
          🔓
        </Text>

        <Text style={styles.statusSucesso}>
          CASO RESOLVIDO
        </Text>

        <Text style={styles.titulo}>
          Você descobriu o culpado!
        </Text>

        <Text style={styles.texto}>
          Sua acusação contra
        </Text>

        <Text style={styles.nomeCulpado}>
          LUCAS
        </Text>

        <Text style={styles.texto}>
          estava correta.
        </Text>


        <View style={styles.linha} />


        <Text style={styles.rotulo}>
          O QUE ACONTECEU?
        </Text>

        <Text style={styles.explicacao}>
          Lucas sabia onde o colar era guardado e recebeu
          uma mensagem suspeita antes do desaparecimento.
        </Text>

        <Text style={styles.explicacao}>
          Em seu depoimento, afirmou que não havia passado
          pelo corredor do escritório.
        </Text>

        <Text style={styles.explicacao}>
          Porém, a câmera de segurança registrou Lucas no
          corredor às 22:37.
        </Text>


        <View style={styles.prova}>

          <Text style={styles.provaTitulo}>
            🔍 PROVA DECISIVA
          </Text>

          <Text style={styles.provaTexto}>
            O depoimento de Lucas contradizia diretamente
            a gravação da câmera de segurança.
          </Text>

        </View>


        <Text style={styles.final}>
          O COLAR DESAPARECIDO FOI RECUPERADO.
        </Text>


        <TouchableOpacity
          style={styles.botaoPrincipal}
          onPress={jogarNovamente}
        >

          <Text style={styles.botaoPrincipalTexto}>
            JOGAR NOVAMENTE
          </Text>

        </TouchableOpacity>

      </ScrollView>
    );
  }


  else {

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.conteudo}
      >

        <Text style={styles.iconeResultado}>
          ❌
        </Text>

        <Text style={styles.statusErro}>
          ACUSAÇÃO INCORRETA
        </Text>

        <Text style={styles.titulo}>
          O caso continua aberto.
        </Text>


        <Text style={styles.texto}>
          Você acusou
        </Text>

        <Text style={styles.nomeAcusado}>
          {acusado.toUpperCase()}
        </Text>

        <Text style={styles.texto}>
          mas as evidências não são suficientes para
          responsabilizar essa pessoa.
        </Text>


        <View style={styles.linha} />


        <Text style={styles.rotulo}>
          DICA DO INVESTIGADOR
        </Text>


        <View style={styles.dica}>

          <Text style={styles.dicaTexto}>
            🔎 Existe uma contradição importante entre
            um depoimento e uma das evidências.
          </Text>

        </View>


        <Text style={styles.instrucao}>
          Volte à investigação, compare os depoimentos
          com as evidências e tente novamente.
        </Text>


        <TouchableOpacity
          style={styles.botaoPrincipal}
          onPress={voltarInvestigacao}
        >

          <Text style={styles.botaoPrincipalTexto}>
            VOLTAR À INVESTIGAÇÃO
          </Text>

        </TouchableOpacity>

      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#101014',
  },

  conteudo: {
    flexGrow: 1,
    padding: 25,
    justifyContent: 'center',
  },

  iconeResultado: {
    fontSize: 65,
    textAlign: 'center',
    marginBottom: 20,
  },

  statusSucesso: {
    color: '#C7A95B',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 3,
    textAlign: 'center',
  },

  statusErro: {
    color: '#C85C5C',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 3,
    textAlign: 'center',
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 25,
  },

  texto: {
    color: '#AAAAAA',
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
  },

  nomeCulpado: {
    color: '#C7A95B',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },

  nomeAcusado: {
    color: '#C85C5C',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },

  linha: {
    height: 1,
    backgroundColor: '#303038',
    marginVertical: 25,
  },

  rotulo: {
    color: '#C7A95B',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 12,
  },

  explicacao: {
    color: '#BBBBBB',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 12,
  },

  prova: {
    backgroundColor: '#19191F',
    borderLeftWidth: 3,
    borderLeftColor: '#C7A95B',
    padding: 16,
    marginTop: 10,
  },

  provaTitulo: {
    color: '#C7A95B',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  provaTexto: {
    color: '#CCCCCC',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
  },

  final: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
    marginTop: 25,
  },

  dica: {
    backgroundColor: '#19191F',
    borderLeftWidth: 3,
    borderLeftColor: '#C7A95B',
    padding: 16,
  },

  dicaTexto: {
    color: '#CCCCCC',
    fontSize: 14,
    lineHeight: 22,
  },

  instrucao: {
    color: '#999999',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 22,
  },

  botaoPrincipal: {
    backgroundColor: '#C7A95B',
    padding: 17,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 28,
  },

  botaoPrincipalTexto: {
    color: '#101014',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

});