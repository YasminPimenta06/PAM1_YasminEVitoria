import React, { useState } from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';


const suspeitos = [
  {
    id: '1',
    nome: 'Helena',
    funcao: 'Dona da mansão',
  },
  {
    id: '2',
    nome: 'Rafael',
    funcao: 'Irmão da vítima',
  },
  {
    id: '3',
    nome: 'Marina',
    funcao: 'Melhor amiga',
  },
  {
    id: '4',
    nome: 'Lucas',
    funcao: 'Funcionário da casa',
  },
];


export default function Acusacao({ navigation }) {

  const [suspeitoSelecionado, setSuspeitoSelecionado] = useState(null);


  function selecionarSuspeito(suspeito) {
    setSuspeitoSelecionado(suspeito);
  }


  function confirmarAcusacao() {

    if (suspeitoSelecionado === null) {

      Alert.alert(
        'Nenhum suspeito selecionado',
        'Escolha um suspeito antes de fazer a acusação.'
      );

      return;
    }


    navigation.navigate('Resultado', {
      acusado: suspeitoSelecionado.nome
    });
  }


  function renderizarSuspeito({ item }) {

    const selecionado =
      suspeitoSelecionado?.id === item.id;


    return (

      <TouchableOpacity
        style={[
          styles.card,
          selecionado && styles.cardSelecionado
        ]}
        onPress={() => selecionarSuspeito(item)}
      >

        <View
          style={[
            styles.avatar,
            selecionado && styles.avatarSelecionado
          ]}
        >

          <Text
            style={[
              styles.avatarTexto,
              selecionado && styles.avatarTextoSelecionado
            ]}
          >
            {item.nome.charAt(0)}
          </Text>

        </View>


        <View style={styles.informacoes}>

          <Text style={styles.nome}>
            {item.nome}
          </Text>

          <Text style={styles.funcao}>
            {item.funcao}
          </Text>

        </View>


        <View
          style={[
            styles.radio,
            selecionado && styles.radioSelecionado
          ]}
        >

          {selecionado && (
            <View style={styles.radioCentro} />
          )}

        </View>

      </TouchableOpacity>
    );
  }


  return (

    <View style={styles.container}>

      <Text style={styles.etiqueta}>
        DECISÃO FINAL
      </Text>


      <Text style={styles.titulo}>
        ⚖️ FAÇA SUA ACUSAÇÃO
      </Text>


      <Text style={styles.subtitulo}>
        Você analisou os suspeitos, as evidências e os
        depoimentos. Agora chegou o momento de decidir.
      </Text>


      <View style={styles.alerta}>

        <Text style={styles.alertaTitulo}>
          ⚠ ATENÇÃO
        </Text>

        <Text style={styles.alertaTexto}>
          Compare todas as pistas antes de escolher o culpado.
        </Text>

      </View>


      <Text style={styles.pergunta}>
        Quem roubou o colar?
      </Text>


      <FlatList
        data={suspeitos}
        renderItem={renderizarSuspeito}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />


      <TouchableOpacity
        style={[
          styles.botaoAcusar,
          suspeitoSelecionado === null &&
          styles.botaoDesativado
        ]}
        onPress={confirmarAcusacao}
      >

        <Text style={styles.textoBotao}>
          CONFIRMAR ACUSAÇÃO
        </Text>

      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#101014',
    padding: 22,
  },

  etiqueta: {
    color: '#C7A95B',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginTop: 10,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 8,
  },

  subtitulo: {
    color: '#999999',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 10,
  },

  alerta: {
    backgroundColor: '#19191F',
    borderLeftWidth: 3,
    borderLeftColor: '#B84A4A',
    padding: 14,
    marginTop: 20,
  },

  alertaTitulo: {
    color: '#B84A4A',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  alertaTexto: {
    color: '#AAAAAA',
    fontSize: 13,
    marginTop: 5,
  },

  pergunta: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 15,
  },

  lista: {
    paddingBottom: 10,
  },

  card: {
    backgroundColor: '#19191F',
    borderWidth: 1,
    borderColor: '#303038',
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardSelecionado: {
    borderColor: '#C7A95B',
    borderWidth: 2,
    backgroundColor: '#24241F',
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#303038',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  avatarSelecionado: {
    backgroundColor: '#C7A95B',
  },

  avatarTexto: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  avatarTextoSelecionado: {
    color: '#101014',
  },

  informacoes: {
    flex: 1,
  },

  nome: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  funcao: {
    color: '#999999',
    fontSize: 12,
    marginTop: 3,
  },

  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#666666',
    justifyContent: 'center',
    alignItems: 'center',
  },

  radioSelecionado: {
    borderColor: '#C7A95B',
  },

  radioCentro: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#C7A95B',
  },

  botaoAcusar: {
    backgroundColor: '#C7A95B',
    padding: 17,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 15,
  },

  botaoDesativado: {
    opacity: 0.45,
  },

  textoBotao: {
    color: '#101014',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

});