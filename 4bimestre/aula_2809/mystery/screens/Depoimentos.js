import React, { useState } from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView
} from 'react-native';


const depoimentos = [
  {
    id: '1',
    nome: 'Helena',
    horario: '22:15',
    resumo: 'Afirma que estava na cozinha.',
    depoimento:
      'Eu estava na cozinha preparando os doces. Marina ficou comigo durante boa parte desse tempo.',
    observacao:
      'Marina confirma que estava com Helena na cozinha durante parte do período investigado.',
  },

  {
    id: '2',
    nome: 'Rafael',
    horario: '22:30',
    resumo: 'Afirma que estava no jardim.',
    depoimento:
      'Fiquei no jardim durante praticamente toda a festa. Entrei na casa apenas uma vez para buscar meu celular.',
    observacao:
      'Rafael admite que entrou na mansão durante o período do crime, mas nenhuma evidência o coloca próximo ao escritório.',
  },

  {
    id: '3',
    nome: 'Marina',
    horario: '22:20',
    resumo: 'Afirma que estava com Helena.',
    depoimento:
      'Eu estava conversando com Helena na cozinha. Nós duas ficamos lá por bastante tempo.',
    observacao:
      'O depoimento de Marina coincide com parte da versão apresentada por Helena.',
  },

  {
    id: '4',
    nome: 'Lucas',
    horario: '22:40',
    resumo: 'Afirma que estava organizando a sala.',
    depoimento:
      'Eu estava organizando a sala durante todo o período. Não passei pelo corredor do escritório.',
    observacao:
      'Atenção: compare esta declaração com as imagens registradas pela câmera de segurança.',
  },
];


export default function Depoimentos() {

  const [depoimentoSelecionado, setDepoimentoSelecionado] = useState(null);


  function analisarDepoimento(depoimento) {
    setDepoimentoSelecionado(depoimento);
  }


  function fecharDepoimento() {
    setDepoimentoSelecionado(null);
  }


  function renderizarDepoimento({ item }) {

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => analisarDepoimento(item)}
      >

        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>
            {item.nome.charAt(0)}
          </Text>
        </View>


        <View style={styles.informacoes}>

          <Text style={styles.nome}>
            {item.nome}
          </Text>

          <Text style={styles.horario}>
            DEPOIMENTO • {item.horario}
          </Text>

          <Text style={styles.resumo}>
            {item.resumo}
          </Text>

        </View>


        <Text style={styles.seta}>
          ›
        </Text>

      </TouchableOpacity>
    );
  }


  return (
    <View style={styles.container}>

      <Text style={styles.etiqueta}>
        INTERROGATÓRIOS
      </Text>

      <Text style={styles.titulo}>
        💬 DEPOIMENTOS
      </Text>

      <Text style={styles.subtitulo}>
        Analise as declarações e procure informações
        que não correspondem às evidências.
      </Text>


      <View style={styles.aviso}>

        <Text style={styles.avisoTitulo}>
          ⚠ ATENÇÃO
        </Text>

        <Text style={styles.avisoTexto}>
          Um dos depoimentos pode conter uma contradição.
        </Text>

      </View>


      <FlatList
        data={depoimentos}
        renderItem={renderizarDepoimento}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />


      <Modal
        visible={depoimentoSelecionado !== null}
        animationType="fade"
        transparent={true}
        onRequestClose={fecharDepoimento}
      >

        <View style={styles.fundoModal}>

          <View style={styles.modal}>

            {depoimentoSelecionado && (

              <ScrollView
                showsVerticalScrollIndicator={false}
              >

                <View style={styles.avatarGrande}>

                  <Text style={styles.avatarGrandeTexto}>
                    {depoimentoSelecionado.nome.charAt(0)}
                  </Text>

                </View>


                <Text style={styles.nomeModal}>
                  {depoimentoSelecionado.nome}
                </Text>


                <Text style={styles.classificacao}>
                  DEPOIMENTO OFICIAL • {depoimentoSelecionado.horario}
                </Text>


                <View style={styles.linha} />


                <Text style={styles.rotulo}>
                  DECLARAÇÃO
                </Text>


                <View style={styles.declaracao}>

                  <Text style={styles.aspas}>
                    “
                  </Text>

                  <Text style={styles.textoDeclaracao}>
                    {depoimentoSelecionado.depoimento}
                  </Text>

                </View>


                <Text style={styles.rotulo}>
                  ANOTAÇÃO DO INVESTIGADOR
                </Text>


                <View style={styles.observacao}>

                  <Text style={styles.observacaoTexto}>
                    🔎 {depoimentoSelecionado.observacao}
                  </Text>

                </View>


                <TouchableOpacity
                  style={styles.botaoFechar}
                  onPress={fecharDepoimento}
                >

                  <Text style={styles.textoBotaoFechar}>
                    FECHAR DEPOIMENTO
                  </Text>

                </TouchableOpacity>

              </ScrollView>

            )}

          </View>

        </View>

      </Modal>

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
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 8,
  },

  subtitulo: {
    color: '#999999',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 10,
  },

  aviso: {
    backgroundColor: '#19191F',
    borderLeftWidth: 3,
    borderLeftColor: '#B84A4A',
    padding: 14,
    marginTop: 20,
    marginBottom: 20,
  },

  avisoTitulo: {
    color: '#B84A4A',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  avisoTexto: {
    color: '#AAAAAA',
    fontSize: 13,
    marginTop: 5,
  },

  lista: {
    paddingBottom: 30,
  },

  card: {
    backgroundColor: '#19191F',
    borderWidth: 1,
    borderColor: '#303038',
    borderRadius: 10,
    padding: 16,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#C7A95B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  avatarTexto: {
    color: '#101014',
    fontSize: 19,
    fontWeight: 'bold',
  },

  informacoes: {
    flex: 1,
  },

  nome: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  horario: {
    color: '#C7A95B',
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 3,
  },

  resumo: {
    color: '#999999',
    fontSize: 13,
    marginTop: 7,
  },

  seta: {
    color: '#C7A95B',
    fontSize: 30,
  },


  // MODAL

  fundoModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.88)',
    justifyContent: 'center',
    padding: 20,
  },

  modal: {
    backgroundColor: '#19191F',
    borderWidth: 1,
    borderColor: '#C7A95B',
    borderRadius: 12,
    padding: 22,
    maxHeight: '88%',
  },

  avatarGrande: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#C7A95B',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  avatarGrandeTexto: {
    color: '#101014',
    fontSize: 34,
    fontWeight: 'bold',
  },

  nomeModal: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 12,
  },

  classificacao: {
    color: '#C7A95B',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
    marginTop: 6,
  },

  linha: {
    height: 1,
    backgroundColor: '#33333A',
    marginVertical: 20,
  },

  rotulo: {
    color: '#C7A95B',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 10,
  },

  declaracao: {
    backgroundColor: '#24242B',
    borderRadius: 8,
    padding: 16,
    marginBottom: 22,
  },

  aspas: {
    color: '#C7A95B',
    fontSize: 32,
    height: 25,
  },

  textoDeclaracao: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 23,
    fontStyle: 'italic',
  },

  observacao: {
    backgroundColor: '#24242B',
    borderLeftWidth: 3,
    borderLeftColor: '#C7A95B',
    padding: 14,
  },

  observacaoTexto: {
    color: '#CCCCCC',
    fontSize: 13,
    lineHeight: 20,
  },

  botaoFechar: {
    backgroundColor: '#C7A95B',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 25,
  },

  textoBotaoFechar: {
    color: '#101014',
    fontWeight: 'bold',
    letterSpacing: 1,
  },

});