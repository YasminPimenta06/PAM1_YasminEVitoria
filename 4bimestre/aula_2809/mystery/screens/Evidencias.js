
import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
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
  vinho: '#681E2B',
  dourado: '#B99A64',
  prata: '#EDE8E4',
  texto: '#B9AFA9',
  borda: '#49362F',
};

// IMAGENS LOCAIS DAS EVIDÊNCIAS
const IMAGENS = {
  chave: require('../assets/evidencia_chave.png'),
  pegada: require('../assets/evidencia_pegada.png'),
  mensagem: require('../assets/evidencia_mensagem.png'),
  bilhete: require('../assets/evidencia_bilhete.png'),
  camera: require('../assets/evidencia_camera.png'),
};

// DADOS ORIGINAIS DA INVESTIGAÇÃO
const evidencias = [
  {
    id: '1',
    numero: 'I',
    titulo: 'Chave encontrada',
    descricao:
      'Uma pequena chave foi encontrada próxima ao escritório.',
    detalhe:
      'A chave abre uma das gavetas do escritório. Não foram encontradas impressões digitais nítidas.',
    imagem: IMAGENS.chave,
  },
  {
    id: '2',
    numero: 'II',
    titulo: 'Pegada',
    descricao:
      'Uma marca de sapato foi encontrada próxima à janela.',
    detalhe:
      'A pegada parece recente e corresponde aproximadamente a um calçado entre os tamanhos 40 e 42. Não é possível identificar quem a deixou.',
    imagem: IMAGENS.pegada,
  },
  {
    id: '3',
    numero: 'III',
    titulo: 'Mensagem apagada',
    descricao:
      'Uma mensagem incompleta foi recuperada de um celular encontrado na sala.',
    detalhe:
      'Foi possível recuperar apenas parte da mensagem: "...depois das 22h. Ninguém vai perceber." Não foi possível identificar com segurança quem enviou a mensagem.',
    imagem: IMAGENS.mensagem,
  },
  {
    id: '4',
    numero: 'IV',
    titulo: 'Bilhete',
    descricao:
      'Um bilhete sem assinatura foi encontrado no escritório.',
    detalhe:
      'O bilhete dizia: "Encontre-me perto do escritório quando todos estiverem ocupados." A caligrafia não foi identificada.',
    imagem: IMAGENS.bilhete,
  },
  {
    id: '5',
    numero: 'V',
    titulo: 'Câmera de segurança',
    descricao:
      'A câmera registrou movimentação no corredor.',
    detalhe:
      'Às 22:37, uma pessoa aparece caminhando pelo corredor do escritório. A imagem está escura e não permite identificar seu rosto.',
    imagem: IMAGENS.camera,
  },
];

export default function Evidencias() {
  const [selecionada, setSelecionada] = useState(null);
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
          size="large"
          color={CORES.dourado}
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
            <Text style={styles.estrela}>✦</Text>
          </View>

          <View style={styles.ornamento}>
            <View style={styles.linha} />
            <Text style={styles.ornamentoTexto}>❦</Text>
            <View style={styles.linha} />
          </View>

          <Text style={styles.etiqueta}>
            REGISTROS DA CENA DO CRIME
          </Text>

          <Text
            style={[
              styles.titulo,
              pequeno && styles.tituloPequeno,
            ]}
          >
            EVIDÊNCIAS
          </Text>

          <Text style={styles.subtitulo}>
            Cada objeto conta uma parte da história.
            Observe com atenção: nem toda pista
            revela aquilo que parece.
          </Text>

          <View style={styles.contador}>
            <Text style={styles.contadorSimbolo}>✧</Text>
            <Text style={styles.contadorTexto}>
              05 EVIDÊNCIAS ENCONTRADAS
            </Text>
          </View>

          {/* FICHAS DAS EVIDÊNCIAS */}

          {evidencias.map((evidencia) => (
            <TouchableOpacity
              key={evidencia.id}
              style={styles.card}
              onPress={() => setSelecionada(evidencia)}
              activeOpacity={0.75}
              accessibilityRole="button"
              accessibilityLabel={
                `Examinar ${evidencia.titulo}`
              }
            >
              <View style={styles.cardTopo}>
                <Text style={styles.cardIdentificacao}>
                  EVIDÊNCIA Nº {evidencia.id.padStart(2, '0')}
                </Text>
                <Text style={styles.cardEstrela}>✦</Text>
              </View>

              <View style={styles.areaImagem}>
                <Image
                  source={evidencia.imagem}
                  style={styles.imagem}
                  resizeMode="cover"
                />

                <View style={styles.marcaImagem}>
                  <Text style={styles.marcaTexto}>
                    {evidencia.numero}
                  </Text>
                </View>
              </View>

              <Text style={styles.cardTitulo}>
                {evidencia.titulo}
              </Text>

              <Text style={styles.cardDescricao}>
                {evidencia.descricao}
              </Text>

              <View style={styles.cardRodape}>
                <Text style={styles.examinar}>
                  EXAMINAR EVIDÊNCIA
                </Text>
                <Text style={styles.seta}>↗</Text>
              </View>
            </TouchableOpacity>
          ))}

          <View style={styles.rodape}>
            <Text style={styles.rodapeSimbolo}>❦</Text>
            <Text style={styles.rodapeTexto}>
              A VERDADE ESTÁ NOS DETALHES
            </Text>
          </View>

        </View>
      </ScrollView>

      {/* RELATÓRIO COMPLETO DA EVIDÊNCIA */}

      <Modal
        visible={selecionada !== null}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setSelecionada(null)}
      >
        <View style={styles.fundoModal}>
          <View style={styles.modal}>

            {selecionada && (
              <ScrollView
                showsVerticalScrollIndicator={true}
                persistentScrollbar={true}
                contentContainerStyle={styles.modalConteudo}
              >
                <Text style={styles.modalArquivo}>
                  ARQUIVO DE PERÍCIA · {selecionada.id.padStart(2, '0')}
                </Text>

                <View style={styles.modalOrnamento}>
                  <View style={styles.linha} />
                  <Text style={styles.modalEstrela}>✦</Text>
                  <View style={styles.linha} />
                </View>

                <View style={styles.imagemModalArea}>
                  <Image
                    source={selecionada.imagem}
                    style={styles.imagemModal}
                    resizeMode="contain"
                  />
                </View>

                <Text style={styles.tituloModal}>
                  {selecionada.titulo}
                </Text>

                <Text style={styles.classificacao}>
                  EVIDÊNCIA · CASO Nº 001
                </Text>

                <View style={styles.divisoria} />

                <Text style={styles.rotulo}>
                  I · DESCRIÇÃO
                </Text>

                <Text style={styles.textoModal}>
                  {selecionada.descricao}
                </Text>

                <Text style={styles.rotulo}>
                  II · ANÁLISE DA EVIDÊNCIA
                </Text>

                <Text style={styles.textoModal}>
                  {selecionada.detalhe}
                </Text>

                <View style={styles.observacao}>
                  <Text style={styles.observacaoTitulo}>
                    ✧ NOTA DO INVESTIGADOR
                  </Text>

                  <Text style={styles.observacaoTexto}>
                    Esta pista pode ter mais de uma
                    interpretação. Compare-a com
                    os depoimentos antes de concluir.
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.botaoFechar}
                  onPress={() => setSelecionada(null)}
                  activeOpacity={0.75}
                  accessibilityRole="button"
                >
                  <Text style={styles.textoBotaoFechar}>
                    FECHAR ARQUIVO
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
    fontSize: 37,
    textAlign: 'center',
    textShadowColor: '#59484C',
    textShadowRadius: 10,
  },

  tituloPequeno: {
    fontSize: 27,
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
    marginBottom: 19,
    padding: 18,
  },

  cardTopo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  cardIdentificacao: {
    color: CORES.dourado,
    fontSize: 10,
    letterSpacing: 1.6,
  },

  cardEstrela: {
    color: '#8C6B56',
    fontSize: 19,
  },

  areaImagem: {
    width: '100%',
    height: 195,
    backgroundColor: '#251A1D',
    borderWidth: 1,
    borderColor: '#4E3835',
    position: 'relative',
    overflow: 'hidden',
  },

  imagem: {
    width: '100%',
    height: '100%',
    opacity: 0.9,
  },

  marcaImagem: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    width: 37,
    height: 37,
    borderRadius: 19,
    backgroundColor: CORES.vinho,
    borderWidth: 1,
    borderColor: CORES.dourado,
    justifyContent: 'center',
    alignItems: 'center',
  },

  marcaTexto: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    color: '#E8D4B3',
    fontSize: 19,
  },

  cardTitulo: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    color: CORES.prata,
    fontSize: 32,
    marginTop: 18,
  },

  cardDescricao: {
    fontFamily: 'CormorantGaramond_400Regular',
    color: CORES.texto,
    fontSize: 20,
    lineHeight: 26,
    marginTop: 6,
  },

  cardRodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: CORES.borda,
    marginTop: 20,
    paddingTop: 15,
  },

  examinar: {
    color: CORES.dourado,
    fontSize: 10,
    letterSpacing: 1.6,
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
    padding: 23,
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
    marginBottom: 23,
  },

  modalEstrela: {
    color: CORES.dourado,
    fontSize: 19,
  },

  imagemModalArea: {
    width: '100%',
    height: 220,
    backgroundColor: '#251A1D',
    borderWidth: 1,
    borderColor: '#654C41',
    overflow: 'hidden',
  },

  imagemModal: {
    width: '100%',
    height: '100%',
  },

  tituloModal: {
    fontFamily: 'CinzelDecorative_400Regular',
    color: CORES.prata,
    fontSize: 25,
    textAlign: 'center',
    marginTop: 23,
  },

  classificacao: {
    color: CORES.dourado,
    fontSize: 9,
    letterSpacing: 2,
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
    letterSpacing: 1.5,
    marginBottom: 11,
  },

  textoModal: {
    fontFamily: 'CormorantGaramond_400Regular',
    color: CORES.texto,
    fontSize: 21,
    lineHeight: 29,
    marginBottom: 27,
  },

  observacao: {
    backgroundColor: '#241519',
    borderLeftWidth: 2,
    borderLeftColor: CORES.dourado,
    padding: 19,
    marginTop: 1,
  },

  observacaoTitulo: {
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
