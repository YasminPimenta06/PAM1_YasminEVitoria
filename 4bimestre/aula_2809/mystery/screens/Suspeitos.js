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


const suspeitos = [
  {
    id: '1',
    nome: 'Helena',
    idade: 42,
    funcao: 'Dona da mansão',
    descricao: 'Conhecia todos os cômodos da casa.',
    relacao: 'Proprietária da Mansão Oliveira e responsável pela festa.',
    informacao:
      'Helena sabia onde o colar era guardado e tinha acesso ao escritório. Afirma que passou boa parte da noite na cozinha.',
    detalhe:
      'Seu depoimento é parcialmente confirmado por Marina, que afirma ter permanecido com ela na cozinha.',
  },

  {
    id: '2',
    nome: 'Rafael',
    idade: 28,
    funcao: 'Irmão da vítima',
    descricao: 'Estava na festa durante o desaparecimento.',
    relacao: 'Irmão da proprietária do colar.',
    informacao:
      'Rafael afirma que passou praticamente toda a festa no jardim.',
    detalhe:
      'Ele admite que entrou na mansão uma vez para buscar seu celular. Portanto, esteve dentro da casa durante parte do período investigado.',
  },

  {
    id: '3',
    nome: 'Marina',
    idade: 25,
    funcao: 'Melhor amiga',
    descricao: 'Era próxima da família há muitos anos.',
    relacao: 'Amiga próxima da família e convidada da festa.',
    informacao:
      'Marina afirma que estava conversando com Helena na cozinha durante boa parte da noite.',
    detalhe:
      'A versão de Marina coincide com o depoimento de Helena, mas isso não elimina completamente sua participação no caso.',
  },

  {
    id: '4',
    nome: 'Lucas',
    idade: 31,
    funcao: 'Funcionário da casa',
    descricao: 'Tinha acesso a várias áreas da mansão.',
    relacao: 'Funcionário da Mansão Oliveira.',
    informacao:
      'Por trabalhar na residência, Lucas conhecia os cômodos e tinha acesso a diferentes áreas da mansão.',
    detalhe:
      'Lucas afirma que permaneceu organizando a sala e que não passou pelo corredor do escritório durante o período do crime.',
  },
];


export default function Suspeitos() {

  const [suspeitoSelecionado, setSuspeitoSelecionado] = useState(null);


  function investigarSuspeito(suspeito) {
    setSuspeitoSelecionado(suspeito);
  }


  function fecharFicha() {
    setSuspeitoSelecionado(null);
  }


  function renderizarSuspeito({ item }) {

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => investigarSuspeito(item)}
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

          <Text style={styles.detalhes}>
            {item.idade} anos • {item.funcao}
          </Text>

          <Text style={styles.descricao}>
            {item.descricao}
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
        ARQUIVOS DA INVESTIGAÇÃO
      </Text>

      <Text style={styles.titulo}>
        👥 SUSPEITOS
      </Text>

      <Text style={styles.subtitulo}>
        Quatro pessoas estavam na mansão durante o período
        do crime. Analise cada uma delas.
      </Text>


      <View style={styles.contador}>
        <Text style={styles.contadorTexto}>
          4 PESSOAS SOB INVESTIGAÇÃO
        </Text>
      </View>


      <FlatList
        data={suspeitos}
        renderItem={renderizarSuspeito}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />


      <Modal
        visible={suspeitoSelecionado !== null}
        animationType="fade"
        transparent={true}
        onRequestClose={fecharFicha}
      >

        <View style={styles.fundoModal}>

          <View style={styles.modal}>

            {suspeitoSelecionado && (

              <ScrollView
                showsVerticalScrollIndicator={false}
              >

                <View style={styles.avatarGrande}>
                  <Text style={styles.avatarGrandeTexto}>
                    {suspeitoSelecionado.nome.charAt(0)}
                  </Text>
                </View>


                <Text style={styles.nomeModal}>
                  {suspeitoSelecionado.nome}
                </Text>


                <Text style={styles.classificacao}>
                  PESSOA SOB INVESTIGAÇÃO
                </Text>


                <View style={styles.linha} />


                <View style={styles.dados}>

                  <View style={styles.dado}>
                    <Text style={styles.rotuloPequeno}>
                      IDADE
                    </Text>

                    <Text style={styles.valorDado}>
                      {suspeitoSelecionado.idade} anos
                    </Text>
                  </View>


                  <View style={styles.dado}>
                    <Text style={styles.rotuloPequeno}>
                      OCUPAÇÃO
                    </Text>

                    <Text style={styles.valorDado}>
                      {suspeitoSelecionado.funcao}
                    </Text>
                  </View>

                </View>


                <Text style={styles.rotulo}>
                  RELAÇÃO COM O CASO
                </Text>

                <Text style={styles.textoModal}>
                  {suspeitoSelecionado.relacao}
                </Text>


                <Text style={styles.rotulo}>
                  INFORMAÇÕES
                </Text>

                <Text style={styles.textoModal}>
                  {suspeitoSelecionado.informacao}
                </Text>


                <Text style={styles.rotulo}>
                  OBSERVAÇÃO DO INVESTIGADOR
                </Text>

                <View style={styles.observacao}>
                  <Text style={styles.observacaoTexto}>
                    🔎 {suspeitoSelecionado.detalhe}
                  </Text>
                </View>


                <TouchableOpacity
                  style={styles.botaoFechar}
                  onPress={fecharFicha}
                >

                  <Text style={styles.textoBotaoFechar}>
                    FECHAR FICHA
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

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#C7A95B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  avatarTexto: {
    color: '#101014',
    fontSize: 20,
    fontWeight: 'bold',
  },

  informacoes: {
    flex: 1,
  },

  nome: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  detalhes: {
    color: '#C7A95B',
    fontSize: 12,
    marginTop: 3,
  },

  descricao: {
    color: '#999999',
    fontSize: 13,
    marginTop: 7,
    lineHeight: 18,
  },

  seta: {
    color: '#C7A95B',
    fontSize: 30,
    marginLeft: 8,
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
    marginBottom: 15,
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

  dados: {
    flexDirection: 'row',
    marginBottom: 22,
  },

  dado: {
    flex: 1,
  },

  rotuloPequeno: {
    color: '#777777',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  valorDado: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 4,
  },

  rotulo: {
    color: '#C7A95B',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 8,
  },

  textoModal: {
    color: '#CCCCCC',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 22,
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