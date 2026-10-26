
import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Modal,
  TextInput,
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
  vinho: '#681E2B',
  dourado: '#B99A64',
  prata: '#EDE8E4',
  texto: '#B9AFA9',
  borda: '#49362F',
};

const depoimentos = [
  {
    id: '1',
    numero: 'I',
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
    numero: 'II',
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
    numero: 'III',
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
    numero: 'IV',
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
  const [selecionado, setSelecionado] = useState(null);
  const [anotacoes, setAnotacoes] = useState({});
  const { width } = useWindowDimensions();
  const pequeno = width < 390;

  const [fontsLoaded] = useFonts({
    CinzelDecorative_400Regular,
    CinzelDecorative_700Bold,
    CormorantGaramond_400Regular,
    CormorantGaramond_400Regular_Italic,
    CormorantGaramond_600SemiBold,
  });

  function atualizarAnotacao(id, texto) {
    setAnotacoes((anteriores) => ({
      ...anteriores,
      [id]: texto,
    }));
  }

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
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.conteudo}>

          {/* CABEÇALHO */}

          <View style={styles.cabecalho}>
            <Text style={styles.arquivo}>
              MYSTERY · ARQUIVO Nº 001
            </Text>
            <Text style={styles.estrela}>✦</Text>
          </View>

          <View style={styles.ornamento}>
            <View style={styles.linha} />
            <Text style={styles.ornamentoTexto}>❦</Text>
            <View style={styles.linha} />
          </View>

          <Text style={styles.etiqueta}>
            REGISTROS DE INTERROGATÓRIO
          </Text>

          <Text
            style={[
              styles.titulo,
              pequeno && styles.tituloPequeno,
            ]}
          >
            DEPOIMENTOS
          </Text>

          <Text style={styles.subtitulo}>
            Quatro versões de uma mesma noite.
            Escute cada palavra e descubra
            o que pode estar escondido.
          </Text>

          {/* AVISO */}

          <View style={styles.aviso}>
            <Text style={styles.avisoTitulo}>
              ✧ ATENÇÃO, INVESTIGADOR
            </Text>
            <Text style={styles.avisoTexto}>
              Um dos depoimentos pode conter uma
              contradição. Compare as declarações
              com as evidências recolhidas.
            </Text>
          </View>

          {/* CONTADOR */}

          <View style={styles.contador}>
            <Text style={styles.contadorSimbolo}>✧</Text>
            <Text style={styles.contadorTexto}>
              04 DEPOIMENTOS REGISTRADOS
            </Text>
          </View>

          {/* CARTÕES */}

          {depoimentos.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() => setSelecionado(item)}
              activeOpacity={0.75}
              accessibilityRole="button"
              accessibilityLabel={
                `Ler depoimento de ${item.nome}`
              }
            >
              <View style={styles.cardTopo}>
                <Text style={styles.cardIdentificacao}>
                  INTERROGATÓRIO Nº {item.id.padStart(2, '0')}
                </Text>
                <Text style={styles.cardEstrela}>✦</Text>
              </View>

              <View style={styles.cardPrincipal}>
                <View style={styles.retrato}>
                  <Text style={styles.inicial}>
                    {item.nome.charAt(0)}
                  </Text>
                  <Text style={styles.numero}>
                    {item.numero}
                  </Text>
                </View>

                <View style={styles.cardInformacoes}>
                  <Text style={styles.nome}>
                    {item.nome}
                  </Text>

                  <Text style={styles.horario}>
                    DEPOIMENTO · {item.horario}
                  </Text>

                  <Text style={styles.resumo}>
                    {item.resumo}
                  </Text>
                </View>
              </View>

              <View style={styles.divisoriaCard} />

              <Text style={styles.trechoEtiqueta}>
                TRECHO DO DEPOIMENTO
              </Text>

              <Text
                style={styles.trecho}
                numberOfLines={3}
              >
                “{item.depoimento}”
              </Text>

              <View style={styles.cardRodape}>
                <Text style={styles.ler}>
                  LER DEPOIMENTO COMPLETO
                </Text>
                <Text style={styles.seta}>↗</Text>
              </View>

            </TouchableOpacity>
          ))}

          <View style={styles.rodape}>
            <Text style={styles.rodapeSimbolo}>❦</Text>
            <Text style={styles.rodapeTexto}>
              TODA HISTÓRIA POSSUI MAIS DE UMA VERSÃO
            </Text>
          </View>

        </View>
      </ScrollView>

      {/* TRANSCRIÇÃO COMPLETA */}

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
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={styles.modalConteudo}
              >
                <Text style={styles.modalArquivo}>
                  TRANSCRIÇÃO CONFIDENCIAL · {selecionado.id.padStart(2, '0')}
                </Text>

                <View style={styles.modalOrnamento}>
                  <View style={styles.linha} />
                  <Text style={styles.modalEstrela}>✦</Text>
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
                  DEPOIMENTO OFICIAL · {selecionado.horario}
                </Text>

                <View style={styles.divisoria} />

                <Text style={styles.rotulo}>
                  I · DECLARAÇÃO
                </Text>

                <View style={styles.declaracao}>
                  <Text style={styles.aspas}>“</Text>
                  <Text style={styles.textoDeclaracao}>
                    {selecionado.depoimento}
                  </Text>
                  <Text style={styles.aspasFinal}>”</Text>
                </View>

                <Text style={styles.rotulo}>
                  II · OBSERVAÇÃO DO INVESTIGADOR
                </Text>

                <View style={styles.observacao}>
                  <Text style={styles.observacaoTexto}>
                    {selecionado.observacao}
                  </Text>
                </View>

                {/* ANOTAÇÕES INTERATIVAS */}

                <Text style={styles.rotulo}>
                  III · SUAS ANOTAÇÕES
                </Text>

                <Text style={styles.ajudaAnotacoes}>
                  Registre dúvidas, detalhes importantes
                  ou possíveis contradições.
                </Text>

                <TextInput
                  style={styles.campoAnotacoes}
                  multiline={true}
                  placeholder="Escreva suas observações..."
                  placeholderTextColor="#80736F"
                  value={anotacoes[selecionado.id] || ''}
                  onChangeText={(texto) =>
                    atualizarAnotacao(selecionado.id, texto)
                  }
                  textAlignVertical="top"
                  accessibilityLabel={
                    `Anotações sobre ${selecionado.nome}`
                  }
                />

                <Text style={styles.notaArmazenamento}>
                  Anotações temporárias desta sessão.
                </Text>

                <TouchableOpacity
                  style={styles.botaoFechar}
                  onPress={() => setSelecionado(null)}
                  activeOpacity={0.75}
                  accessibilityRole="button"
                >
                  <Text style={styles.textoBotaoFechar}>
                    FECHAR DEPOIMENTO
                  </Text>
                  <Text style={styles.fecharSeta}>×</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
  },

  arquivo: {
    color: CORES.dourado,
    fontSize: 10,
    letterSpacing: 1.6,
  },

  estrela: {
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
    fontSize: 33,
    textAlign: 'center',
    textShadowColor: '#59484C',
    textShadowRadius: 10,
  },

  tituloPequeno: {
    fontSize: 24,
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

  aviso: {
    backgroundColor: '#241519',
    borderLeftWidth: 3,
    borderLeftColor: CORES.vinho,
    padding: 19,
    marginBottom: 25,
  },

  avisoTitulo: {
    color: CORES.dourado,
    fontSize: 10,
    letterSpacing: 1.4,
  },

  avisoTexto: {
    fontFamily: 'CormorantGaramond_400Regular',
    color: CORES.prata,
    fontSize: 20,
    lineHeight: 26,
    marginTop: 11,
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
    marginBottom: 19,
    padding: 20,
  },

  cardTopo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  cardIdentificacao: {
    color: CORES.dourado,
    fontSize: 10,
    letterSpacing: 1.5,
  },

  cardEstrela: {
    color: '#8C6B56',
    fontSize: 19,
  },

  cardPrincipal: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  retrato: {
    width: 76,
    height: 98,
    borderWidth: 1,
    borderColor: '#7B5A47',
    backgroundColor: '#24171B',
    marginRight: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inicial: {
    fontFamily: 'CinzelDecorative_400Regular',
    color: '#D7C2B3',
    fontSize: 36,
  },

  numero: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    color: CORES.dourado,
    fontSize: 15,
    marginTop: 4,
  },

  cardInformacoes: {
    flex: 1,
  },

  nome: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    color: CORES.prata,
    fontSize: 35,
  },

  horario: {
    color: CORES.dourado,
    fontSize: 10,
    letterSpacing: 1.3,
    marginTop: 5,
  },

  resumo: {
    fontFamily: 'CormorantGaramond_400Regular_Italic',
    color: CORES.texto,
    fontSize: 20,
    marginTop: 10,
  },

  divisoriaCard: {
    height: 1,
    backgroundColor: CORES.borda,
    marginVertical: 20,
  },

  trechoEtiqueta: {
    color: CORES.dourado,
    fontSize: 9,
    letterSpacing: 1.5,
    marginBottom: 10,
  },

  trecho: {
    fontFamily: 'CormorantGaramond_400Regular_Italic',
    color: CORES.prata,
    fontSize: 21,
    lineHeight: 28,
  },

  cardRodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 22,
  },

  ler: {
    color: CORES.dourado,
    fontSize: 10,
    letterSpacing: 1.4,
  },

  seta: {
    color: CORES.dourado,
    fontSize: 22,
  },

  rodape: {
    alignItems: 'center',
    marginTop: 24,
  },

  rodapeSimbolo: {
    color: CORES.dourado,
    fontSize: 26,
  },

  rodapeTexto: {
    color: '#85746C',
    fontSize: 9,
    letterSpacing: 1.6,
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
    padding: 23,
    paddingBottom: 35,
  },

  modalArquivo: {
    color: CORES.dourado,
    fontSize: 9,
    letterSpacing: 1.4,
    textAlign: 'center',
  },

  modalOrnamento: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 13,
    marginTop: 18,
    marginBottom: 23,
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
    letterSpacing: 1.6,
    textAlign: 'center',
    marginTop: 10,
  },

  divisoria: {
    height: 1,
    backgroundColor: CORES.borda,
    marginVertical: 25,
  },

  rotulo: {
    color: CORES.dourado,
    fontSize: 10,
    letterSpacing: 1.4,
    marginBottom: 12,
  },

  declaracao: {
    backgroundColor: '#241519',
    borderWidth: 1,
    borderColor: CORES.borda,
    padding: 20,
    marginBottom: 28,
  },

  aspas: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    color: CORES.dourado,
    fontSize: 48,
    height: 40,
  },

  textoDeclaracao: {
    fontFamily: 'CormorantGaramond_400Regular_Italic',
    color: CORES.prata,
    fontSize: 24,
    lineHeight: 32,
  },

  aspasFinal: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    color: CORES.dourado,
    fontSize: 48,
    textAlign: 'right',
    height: 40,
  },

  observacao: {
    backgroundColor: '#1F1518',
    borderLeftWidth: 2,
    borderLeftColor: CORES.dourado,
    padding: 19,
    marginBottom: 30,
  },

  observacaoTexto: {
    fontFamily: 'CormorantGaramond_400Regular_Italic',
    color: CORES.prata,
    fontSize: 21,
    lineHeight: 28,
  },

  ajudaAnotacoes: {
    fontFamily: 'CormorantGaramond_400Regular',
    color: CORES.texto,
    fontSize: 19,
    lineHeight: 25,
    marginBottom: 13,
  },

  campoAnotacoes: {
    minHeight: 125,
    backgroundColor: '#1C1216',
    borderWidth: 1,
    borderColor: CORES.borda,
    color: CORES.prata,
    padding: 15,
    fontFamily: 'CormorantGaramond_400Regular',
    fontSize: 20,
    lineHeight: 27,
  },

  notaArmazenamento: {
    color: '#85746C',
    fontSize: 10,
    marginTop: 10,
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
