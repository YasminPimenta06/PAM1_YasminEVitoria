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


const evidencias = [
  {
    id: '1',
    icone: '🔑',
    titulo: 'Chave encontrada',
    descricao: 'Uma pequena chave foi encontrada próxima ao escritório.',
    detalhe:
      'A chave abre uma das gavetas do escritório. Não foram encontradas impressões digitais nítidas.',
  },

  {
    id: '2',
    icone: '👣',
    titulo: 'Pegada',
    descricao: 'Uma marca de sapato foi encontrada próxima à janela.',
    detalhe:
      'A pegada parece recente e corresponde aproximadamente a um calçado entre os tamanhos 40 e 42. Não é possível identificar quem a deixou.',
  },

  {
    id: '3',
    icone: '📱',
    titulo: 'Mensagem apagada',
    descricao: 'Uma mensagem incompleta foi recuperada de um celular encontrado na sala.',
    detalhe:
      'Foi possível recuperar apenas parte da mensagem: "...depois das 22h. Ninguém vai perceber." Não foi possível identificar com segurança quem enviou a mensagem.',
  },

  {
    id: '4',
    icone: '📝',
    titulo: 'Bilhete',
    descricao: 'Um bilhete sem assinatura foi encontrado no escritório.',
    detalhe:
      'O bilhete dizia: "Encontre-me perto do escritório quando todos estiverem ocupados." A caligrafia não foi identificada.',
  },

  {
    id: '5',
    icone: '🎥',
    titulo: 'Câmera de segurança',
    descricao: 'A câmera registrou movimentação no corredor.',
    detalhe:
      'Às 22:37, uma pessoa aparece caminhando pelo corredor do escritório. A imagem está escura e não permite identificar seu rosto.',
  },
];


export default function Evidencias() {

  const [evidenciaSelecionada, setEvidenciaSelecionada] = useState(null);


  function analisarEvidencia(evidencia) {
    setEvidenciaSelecionada(evidencia);
  }


  function fecharEvidencia() {
    setEvidenciaSelecionada(null);
  }


  function renderizarEvidencia({ item }) {

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => analisarEvidencia(item)}
      >

        <View style={styles.iconeContainer}>
          <Text style={styles.icone}>
            {item.icone}
          </Text>
        </View>

        <View style={styles.informacoes}>

          <Text style={styles.tituloCard}>
            {item.titulo}
          </Text>

          <Text style={styles.descricao}>
            {item.descricao}
          </Text>

        </View>

        <Text style={styles.seta}>›</Text>

      </TouchableOpacity>
    );
  }


  return (
    <View style={styles.container}>

      <Text style={styles.etiqueta}>
        ARQUIVOS DA INVESTIGAÇÃO
      </Text>

      <Text style={styles.titulo}>
        🔍 EVIDÊNCIAS
      </Text>

      <Text style={styles.subtitulo}>
        Examine as pistas com atenção. Nem toda evidência
        aponta diretamente para o culpado.
      </Text>


      <View style={styles.contador}>
        <Text style={styles.contadorTexto}>
          5 EVIDÊNCIAS ENCONTRADAS
        </Text>
      </View>


      <FlatList
        data={evidencias}
        renderItem={renderizarEvidencia}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />


      <Modal
        visible={evidenciaSelecionada !== null}
        animationType="fade"
        transparent={true}
        onRequestClose={fecharEvidencia}
      >

        <View style={styles.fundoModal}>

          <View style={styles.modal}>

            {evidenciaSelecionada && (

              <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.iconeGrandeContainer}>
                  <Text style={styles.iconeGrande}>
                    {evidenciaSelecionada.icone}
                  </Text>
                </View>

                <Text style={styles.tituloModal}>
                  {evidenciaSelecionada.titulo}
                </Text>

                <Text style={styles.classificacao}>
                  EVIDÊNCIA • CASO #001
                </Text>

                <View style={styles.linha} />

                <Text style={styles.rotulo}>
                  DESCRIÇÃO
                </Text>

                <Text style={styles.textoModal}>
                  {evidenciaSelecionada.descricao}
                </Text>

                <Text style={styles.rotulo}>
                  ANÁLISE
                </Text>

                <Text style={styles.detalhe}>
                  {evidenciaSelecionada.detalhe}
                </Text>

                <View style={styles.alerta}>
                  <Text style={styles.alertaTexto}>
                    🔎 Esta pista pode ter mais de uma interpretação.
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.botaoFechar}
                  onPress={fecharEvidencia}
                >
                  <Text style={styles.textoBotaoFechar}>
                    FECHAR ARQUIVO
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

  contador: {
    alignSelf: 'flex-start',
    backgroundColor: '#19191F',
    borderWidth: 1,
    borderColor: '#C7A95B',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 7,
    marginTop: 18,
    marginBottom: 20,
  },

  contadorTexto: {
    color: '#C7A95B',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1,
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

  iconeContainer: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#24242B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  icone: {
    fontSize: 25,
  },

  informacoes: {
    flex: 1,
  },

  tituloCard: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  descricao: {
    color: '#999999',
    fontSize: 13,
    lineHeight: 18,
    marginTop: 6,
  },

  seta: {
    color: '#C7A95B',
    fontSize: 30,
  },

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
    maxHeight: '85%',
  },

  iconeGrandeContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#24242B',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  iconeGrande: {
    fontSize: 40,
  },

  tituloModal: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  classificacao: {
    color: '#C7A95B',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 7,
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
    marginBottom: 8,
  },

  textoModal: {
    color: '#AAAAAA',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 22,
  },

  detalhe: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 24,
  },

  alerta: {
    backgroundColor: '#24242B',
    borderLeftWidth: 3,
    borderLeftColor: '#C7A95B',
    padding: 14,
    marginTop: 22,
  },

  alertaTexto: {
    color: '#BBBBBB',
    fontSize: 13,
    lineHeight: 19,
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