
import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Modal,
  ActivityIndicator,
  useWindowDimensions,
} from 'react-native';

import {
  useFonts,
  CinzelDecorative_400Regular,
  CinzelDecorative_700Bold,
} from '@expo-google-fonts/cinzel-decorative';

import {
  CormorantGaramond_400Regular,
  CormorantGaramond_400Regular_Italic,
  CormorantGaramond_600SemiBold,
} from '@expo-google-fonts/cormorant-garamond';

const CORES = {
  fundo: '#080708',
  painel: '#151012',
  painelClaro: '#201519',
  vinho: '#681E2B',
  dourado: '#B99A64',
  prata: '#EDE8E4',
  texto: '#B9AFA9',
  borda: '#49362F',
};

const suspeitos = [
  {
    id: '1',
    numero: 'I',
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
    numero: 'II',
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
    numero: 'III',
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
    numero: 'IV',
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
  const [selecionado, setSelecionado] = useState(null);
  const { width } = useWindowDimensions();
  const pequeno = width < 390;

  const [fontsLoaded] = useFonts({
    CinzelDecorative_400Regular,
    CinzelDecorative_700Bold,
    CormorantGaramond_400Regular,
    CormorantGaramond_400Regular_Italic,
    CormorantGaramond_600SemiBold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.carregamento}>
        <ActivityIndicator
          color={CORES.dourado}
          size="large"
        />
      </View>
    );
  }

  return (
    <View style={styles.pagina}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={true}
        persistentScrollbar={true}
      >
        <View style={styles.conteudo}>

          {/* CABEÇALHO */}

          <View style={styles.cabecalho}>
            <Text style={styles.arquivo}>
              MYSTERY · ARQUIVO Nº 001
            </Text>
            <Text style={styles.cabecalhoSimbolo}>
              ✦
            </Text>
          </View>

          <View style={styles.ornamento}>
            <View style={styles.linha} />
            <Text style={styles.ornamentoTexto}>
              ❦
            </Text>
            <View style={styles.linha} />
          </View>

          <Text style={styles.etiqueta}>
            REGISTROS CONFIDENCIAIS
          </Text>

          <Text
            style={[
              styles.titulo,
              pequeno && styles.tituloPequeno,
            ]}
          >
            SUSPEITOS
          </Text>

          <Text style={styles.subtitulo}>
            Quatro pessoas estavam na mansão durante
            o período do crime. Cada uma guarda sua
            própria versão da história.
          </Text>

          {/* CONTADOR */}

          <View style={styles.contador}>
            <Text style={styles.contadorSimbolo}>
              ✧
            </Text>
            <Text style={styles.contadorTexto}>
              04 PESSOAS SOB INVESTIGAÇÃO
            </Text>
          </View>

          {/* FICHAS */}

          {suspeitos.map((suspeito) => (
            <TouchableOpacity
              key={suspeito.id}
              style={styles.card}
              onPress={() => setSelecionado(suspeito)}
              activeOpacity={0.75}
              accessibilityRole="button"
              accessibilityLabel={
                `Examinar ficha de ${suspeito.nome}`
              }
            >
              <View style={styles.cardTopo}>
                <Text style={styles.cardIdentificacao}>
                  SUSPEITO Nº {suspeito.id.padStart(2, '0')}
                </Text>
                <Text style={styles.cardOrnamento}>
                  ✦
                </Text>
              </View>

              <View style={styles.cardPrincipal}>
                <View style={styles.retrato}>
                  <View style={styles.retratoInterno}>
                    <Text style={styles.inicial}>
                      {suspeito.nome.charAt(0)}
                    </Text>
                  </View>
                  <Text style={styles.retratoNumero}>
                    {suspeito.numero}
                  </Text>
                </View>

                <View style={styles.cardInformacoes}>
                  <Text style={styles.nome}>
                    {suspeito.nome}
                  </Text>

                  <Text style={styles.funcao}>
                    {suspeito.funcao}
                  </Text>

                  <Text style={styles.idade}>
                    {suspeito.idade} ANOS
                  </Text>
                </View>
              </View>

              <View style={styles.cardDivisoria} />

              <Text style={styles.descricao}>
                {suspeito.descricao}
              </Text>

              <View style={styles.cardRodape}>
                <Text style={styles.examinar}>
                  EXAMINAR DOSSIÊ
                </Text>
                <Text style={styles.seta}>
                  ↗
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          <View style={styles.rodapeOrnamento}>
            <Text style={styles.rodapeSimbolo}>
              ❦
            </Text>
            <Text style={styles.rodapeTexto}>
              NEM TODA VERDADE É O QUE PARECE
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* DOSSIÊ COMPLETO */}

      <Modal
        visible={selecionado !== null}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setSelecionado(null)}
      >
        <View style={styles.fundoModal}>
          <View style={styles.modal}>
            {selecionado && (
              <ScrollView
                showsVerticalScrollIndicator={true}
                persistentScrollbar={true}
                contentContainerStyle={styles.modalConteudo}
              >
                <Text style={styles.modalArquivo}>
                  ARQUIVO CONFIDENCIAL · {selecionado.id.padStart(2, '0')}
                </Text>

                <View style={styles.modalOrnamento}>
                  <View style={styles.linha} />
                  <Text style={styles.modalEstrela}>
                    ✦
                  </Text>
                  <View style={styles.linha} />
                </View>

                <View style={styles.retratoGrande}>
                  <Text style={styles.inicialGrande}>
                    {selecionado.nome.charAt(0)}
                  </Text>
                </View>

                <Text style={styles.nomeModal}>
                  {selecionado.nome}
                </Text>

                <Text style={styles.classificacao}>
                  PESSOA SOB INVESTIGAÇÃO
                </Text>

                <View style={styles.modalDivisoria} />

                <View style={styles.dados}>
                  <View style={styles.dado}>
                    <Text style={styles.rotuloPequeno}>
                      IDADE
                    </Text>
                    <Text style={styles.valorDado}>
                      {selecionado.idade} anos
                    </Text>
                  </View>

                  <View style={styles.dado}>
                    <Text style={styles.rotuloPequeno}>
                      OCUPAÇÃO
                    </Text>
                    <Text style={styles.valorDado}>
                      {selecionado.funcao}
                    </Text>
                  </View>
                </View>

                <View style={styles.bloco}>
                  <Text style={styles.rotulo}>
                    I · RELAÇÃO COM O CASO
                  </Text>
                  <Text style={styles.textoModal}>
                    {selecionado.relacao}
                  </Text>
                </View>

                <View style={styles.bloco}>
                  <Text style={styles.rotulo}>
                    II · INFORMAÇÕES
                  </Text>
                  <Text style={styles.textoModal}>
                    {selecionado.informacao}
                  </Text>
                </View>

                <View style={styles.observacao}>
                  <Text style={styles.observacaoEtiqueta}>
                    ✧ OBSERVAÇÃO DO INVESTIGADOR
                  </Text>
                  <Text style={styles.observacaoTexto}>
                    {selecionado.detalhe}
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.botaoFechar}
                  onPress={() => setSelecionado(null)}
                  activeOpacity={0.75}
                  accessibilityRole="button"
                >
                  <Text style={styles.textoBotaoFechar}>
                    FECHAR DOSSIÊ
                  </Text>
                  <Text style={styles.fecharSeta}>
                    ×
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

  pagina: {
    flex: 1,
    backgroundColor: CORES.fundo,
  },

  carregamento: {
    flex: 1,
    backgroundColor: CORES.fundo,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scroll: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 55,
  },

  conteudo: {
    width: '100%',
    maxWidth: 850,
    paddingHorizontal: 24,
    paddingTop: 28,
  },

  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 28,
  },

  arquivo: {
    color: CORES.dourado,
    fontSize: 10,
    letterSpacing: 1.6,
  },

  cabecalhoSimbolo: {
    color: CORES.dourado,
    fontSize: 22,
  },

  ornamento: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 23,
  },

  linha: {
    width: 55,
    height: 1,
    backgroundColor: CORES.borda,
  },

  ornamentoTexto: {
    color: CORES.dourado,
    fontSize: 25,
  },

  etiqueta: {
    textAlign: 'center',
    color: CORES.dourado,
    fontSize: 10,
    letterSpacing: 2.4,
    marginBottom: 14,
  },

  titulo: {
    fontFamily: 'CinzelDecorative_700Bold',
    color: CORES.prata,
    fontSize: 39,
    textAlign: 'center',
    textShadowColor: '#59484C',
    textShadowRadius: 10,
  },

  tituloPequeno: {
    fontSize: 30,
  },

  subtitulo: {
    fontFamily: 'CormorantGaramond_400Regular_Italic',
    color: CORES.texto,
    fontSize: 21,
    lineHeight: 28,
    textAlign: 'center',
    marginTop: 18,
    marginBottom: 27,
    maxWidth: 470,
    alignSelf: 'center',
  },

  contador: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: CORES.borda,
    backgroundColor: '#170F12',
    paddingVertical: 11,
    paddingHorizontal: 18,
    gap: 11,
    marginBottom: 29,
  },

  contadorSimbolo: {
    color: CORES.dourado,
    fontSize: 18,
  },

  contadorTexto: {
    color: CORES.dourado,
    fontSize: 10,
    letterSpacing: 1.2,
  },

  card: {
    backgroundColor: CORES.painel,
    borderWidth: 1,
    borderColor: CORES.borda,
    marginBottom: 18,
    padding: 20,
  },

  cardTopo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  cardIdentificacao: {
    color: CORES.dourado,
    fontSize: 10,
    letterSpacing: 1.8,
  },

  cardOrnamento: {
    color: '#8C6B56',
    fontSize: 19,
  },

  cardPrincipal: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  retrato: {
    width: 91,
    height: 115,
    borderWidth: 1,
    borderColor: '#7B5A47',
    backgroundColor: '#24171B',
    padding: 5,
    marginRight: 19,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  retratoInterno: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#493239',
    backgroundColor: '#160D11',
  },

  inicial: {
    fontFamily: 'CinzelDecorative_400Regular',
    color: '#D7C2B3',
    fontSize: 43,
  },

  retratoNumero: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    fontSize: 15,
    color: CORES.dourado,
    marginTop: 3,
  },

  cardInformacoes: {
    flex: 1,
  },

  nome: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    color: CORES.prata,
    fontSize: 35,
  },

  funcao: {
    fontFamily: 'CormorantGaramond_400Regular_Italic',
    color: CORES.texto,
    fontSize: 20,
    marginTop: 2,
  },

  idade: {
    color: CORES.dourado,
    fontSize: 10,
    letterSpacing: 1.4,
    marginTop: 12,
  },

  cardDivisoria: {
    height: 1,
    backgroundColor: CORES.borda,
    marginVertical: 17,
  },

  descricao: {
    fontFamily: 'CormorantGaramond_400Regular',
    color: CORES.texto,
    fontSize: 20,
    lineHeight: 25,
  },

  cardRodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 22,
  },

  examinar: {
    color: CORES.dourado,
    fontSize: 10,
    letterSpacing: 1.8,
  },

  seta: {
    color: CORES.dourado,
    fontSize: 22,
  },

  rodapeOrnamento: {
    alignItems: 'center',
    paddingTop: 20,
  },

  rodapeSimbolo: {
    color: CORES.dourado,
    fontSize: 26,
  },

  rodapeTexto: {
    color: '#85746C',
    fontSize: 9,
    letterSpacing: 1.8,
    marginTop: 10,
    textAlign: 'center',
  },

  fundoModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },

  modal: {
    width: '100%',
    maxWidth: 620,
    maxHeight: '90%',
    backgroundColor: '#120C0F',
    borderWidth: 1,
    borderColor: CORES.dourado,
  },

  modalConteudo: {
    padding: 24,
    paddingBottom: 35,
  },

  modalArquivo: {
    color: CORES.dourado,
    fontSize: 9,
    letterSpacing: 1.5,
    textAlign: 'center',
  },

  modalOrnamento: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 13,
    marginTop: 18,
    marginBottom: 22,
  },

  modalEstrela: {
    color: CORES.dourado,
    fontSize: 19,
  },

  retratoGrande: {
    width: 95,
    height: 115,
    alignSelf: 'center',
    backgroundColor: '#26171C',
    borderWidth: 1,
    borderColor: '#8D6B53',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inicialGrande: {
    fontFamily: 'CinzelDecorative_700Bold',
    fontSize: 49,
    color: CORES.prata,
  },

  nomeModal: {
    fontFamily: 'CinzelDecorative_400Regular',
    fontSize: 31,
    color: CORES.prata,
    textAlign: 'center',
    marginTop: 18,
  },

  classificacao: {
    color: CORES.dourado,
    fontSize: 9,
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 10,
  },

  modalDivisoria: {
    height: 1,
    backgroundColor: CORES.borda,
    marginVertical: 24,
  },

  dados: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    marginBottom: 28,
  },

  dado: {
    flexGrow: 1,
    flexBasis: 115,
  },

  rotuloPequeno: {
    color: CORES.dourado,
    fontSize: 9,
    letterSpacing: 1.5,
  },

  valorDado: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    color: CORES.prata,
    fontSize: 22,
    marginTop: 7,
  },

  bloco: {
    marginBottom: 25,
  },

  rotulo: {
    color: CORES.dourado,
    fontSize: 10,
    letterSpacing: 1.4,
    marginBottom: 10,
  },

  textoModal: {
    fontFamily: 'CormorantGaramond_400Regular',
    color: CORES.texto,
    fontSize: 21,
    lineHeight: 28,
  },

  observacao: {
    backgroundColor: '#241519',
    borderLeftWidth: 2,
    borderLeftColor: CORES.dourado,
    padding: 19,
    marginTop: 2,
  },

  observacaoEtiqueta: {
    color: CORES.dourado,
    fontSize: 10,
    letterSpacing: 1.1,
    marginBottom: 12,
  },

  observacaoTexto: {
    fontFamily: 'CormorantGaramond_400Regular_Italic',
    color: CORES.prata,
    fontSize: 21,
    lineHeight: 28,
  },

  botaoFechar: {
    borderWidth: 1,
    borderColor: CORES.dourado,
    backgroundColor: '#24171A',
    paddingVertical: 16,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 17,
    marginTop: 30,
  },

  textoBotaoFechar: {
    fontFamily: 'CinzelDecorative_400Regular',
    color: '#E8D4B3',
    fontSize: 12,
  },

  fecharSeta: {
    color: CORES.dourado,
    fontSize: 24,
  },

});
