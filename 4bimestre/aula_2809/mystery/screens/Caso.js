
import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
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

export default function Caso({ navigation }) {
  const { width } = useWindowDimensions();
  const pequeno = width < 390;

  const [fontsLoaded] = useFonts({
    CinzelDecorative_400Regular,
    CinzelDecorative_700Bold,
    CormorantGaramond_400Regular,
    CormorantGaramond_400Regular_Italic,
    CormorantGaramond_600SemiBold,
  });

  const secoes = [
    {
      numero: 'I',
      simbolo: '♟',
      titulo: 'Suspeitos',
      descricao: 'Conheça as quatro pessoas presentes na mansão.',
      tela: 'Suspeitos',
    },
    {
      numero: 'II',
      simbolo: '✧',
      titulo: 'Evidências',
      descricao: 'Examine as pistas encontradas na cena.',
      tela: 'Evidencias',
    },
    {
      numero: 'III',
      simbolo: '❝',
      titulo: 'Depoimentos',
      descricao: 'Compare as versões dadas pelos envolvidos.',
      tela: 'Depoimentos',
    },
  ];

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
    <ScrollView
      style={styles.pagina}
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={true}
      persistentScrollbar={true}
    >
      <View style={styles.conteudo}>

        {/* IDENTIFICAÇÃO DO ARQUIVO */}

        <View style={styles.cabecalho}>
          <View style={styles.status}>
            <View style={styles.statusPonto} />
            <Text style={styles.statusTexto}>
              CASO EM ABERTO
            </Text>
          </View>

          <Text style={styles.numeroArquivo}>
            ARQUIVO Nº 001
          </Text>
        </View>

        {/* ORNAMENTO */}

        <View style={styles.ornamento}>
          <View style={styles.linha} />
          <Text style={styles.ornamentoSimbolo}>
            ✦
          </Text>
          <View style={styles.linha} />
        </View>

        {/* TÍTULO DO CASO */}

        <Text style={styles.sobretitulo}>
          DOSSIÊ CONFIDENCIAL
        </Text>

        <Text
          style={[
            styles.titulo,
            pequeno && styles.tituloPequeno,
          ]}
        >
          O COLAR
        </Text>

        <Text
          style={[
            styles.tituloSecundario,
            pequeno && styles.tituloSecundarioPequeno,
          ]}
        >
          DESAPARECIDO
        </Text>

        <Text style={styles.frase}>
          Toda joia guarda uma história.
          Algumas escondem um crime.
        </Text>

        {/* SELO DECORATIVO */}

        <View style={styles.seloArea}>
          <View style={styles.seloLinha} />

          <View style={styles.selo}>
            <Text style={styles.seloIcone}>
              ✦
            </Text>
          </View>

          <View style={styles.seloLinha} />
        </View>

        {/* RELATÓRIO */}

        <View style={styles.relatorio}>
          <View style={styles.relatorioTopo}>
            <Text style={styles.relatorioEtiqueta}>
              RELATÓRIO PRELIMINAR
            </Text>

            <Text style={styles.relatorioNumero}>
              001 / M
            </Text>
          </View>

          <Text style={styles.relatorioTitulo}>
            O mistério da Mansão Oliveira
          </Text>

          <Text style={styles.relatorioTexto}>
            Durante uma festa na Mansão Oliveira,
            um valioso colar de diamantes
            desapareceu sem deixar pistas claras.
          </Text>

          <View style={styles.divisoria} />

          <View style={styles.detalhes}>
            <View style={styles.detalhe}>
              <Text style={styles.detalheRotulo}>
                LOCAL DO OCORRIDO
              </Text>
              <Text style={styles.detalheValor}>
                Mansão Oliveira
              </Text>
            </View>

            <View style={styles.detalhe}>
              <Text style={styles.detalheRotulo}>
                HORÁRIO
              </Text>
              <Text style={styles.detalheValor}>
                22h — 23h
              </Text>
            </View>
          </View>

          <View style={styles.objeto}>
            <Text style={styles.objetoRotulo}>
              OBJETO DESAPARECIDO
            </Text>
            <Text style={styles.objetoValor}>
              Colar de diamantes
            </Text>
          </View>
        </View>

        {/* MISSÃO */}

        <View style={styles.missao}>
          <Text style={styles.missaoOrnamento}>
            ❦
          </Text>

          <Text style={styles.missaoEtiqueta}>
            SUA MISSÃO
          </Text>

          <Text style={styles.missaoTexto}>
            Descubra quem roubou o colar analisando
            pessoas, pistas e versões do ocorrido.
          </Text>
        </View>

        {/* SEÇÕES DA INVESTIGAÇÃO */}

        <View style={styles.secaoCabecalho}>
          <Text style={styles.secaoEtiqueta}>
            OS CAMINHOS DA VERDADE
          </Text>

          <Text style={styles.secaoTitulo}>
            A investigação
          </Text>

          <Text style={styles.secaoDescricao}>
            Por onde deseja começar?
          </Text>
        </View>

        {secoes.map((secao) => (
          <TouchableOpacity
            key={secao.tela}
            style={styles.card}
            onPress={() =>
              navigation.navigate(secao.tela)
            }
            activeOpacity={0.75}
            accessibilityRole="button"
          >
            <View style={styles.cardSimboloArea}>
              <Text style={styles.cardSimbolo}>
                {secao.simbolo}
              </Text>
            </View>

            <View style={styles.cardConteudo}>
              <Text style={styles.cardNumero}>
                CAPÍTULO {secao.numero}
              </Text>

              <Text style={styles.cardTitulo}>
                {secao.titulo}
              </Text>

              <Text style={styles.cardDescricao}>
                {secao.descricao}
              </Text>
            </View>

            <Text style={styles.cardSeta}>
              ↗
            </Text>
          </TouchableOpacity>
        ))}

        {/* ACUSAÇÃO FINAL */}

        <View style={styles.final}>
          <View style={styles.finalOrnamento}>
            <View style={styles.linha} />
            <Text style={styles.finalSimbolo}>
              ✧
            </Text>
            <View style={styles.linha} />
          </View>

          <Text style={styles.finalEtiqueta}>
            O JULGAMENTO DA VERDADE
          </Text>

          <Text style={styles.finalTitulo}>
            Quem roubou o colar?
          </Text>

          <Text style={styles.finalTexto}>
            Quando todas as pistas estiverem
            diante de você, será hora de decidir.
          </Text>

          <TouchableOpacity
            style={styles.botaoAcusacao}
            onPress={() =>
              navigation.navigate('Acusacao')
            }
            activeOpacity={0.75}
            accessibilityRole="button"
          >
            <Text style={styles.botaoTexto}>
              FAZER ACUSAÇÃO
            </Text>

            <Text style={styles.botaoSeta}>
              ↗
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.rodape}>
          MYSTERY · ARQUIVO CONFIDENCIAL
        </Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  pagina: {
    flex: 1,
    backgroundColor: CORES.fundo,
  },

  scroll: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 60,
  },

  conteudo: {
    width: '100%',
    maxWidth: 850,
    paddingHorizontal: 24,
    paddingTop: 26,
  },

  carregamento: {
    flex: 1,
    backgroundColor: CORES.fundo,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 35,
  },

  status: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  statusPonto: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: CORES.vinho,
    borderWidth: 1,
    borderColor: CORES.dourado,
    marginRight: 9,
  },

  statusTexto: {
    fontSize: 10,
    letterSpacing: 1.5,
    color: CORES.dourado,
  },

  numeroArquivo: {
    fontSize: 10,
    letterSpacing: 1.3,
    color: '#85756C',
  },

  ornamento: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 25,
  },

  linha: {
    height: 1,
    width: 55,
    backgroundColor: CORES.borda,
  },

  ornamentoSimbolo: {
    color: CORES.dourado,
    fontSize: 21,
  },

  sobretitulo: {
    color: CORES.dourado,
    fontSize: 10,
    letterSpacing: 3,
    textAlign: 'center',
    marginBottom: 17,
  },

  titulo: {
    fontFamily: 'CinzelDecorative_700Bold',
    fontSize: 43,
    color: CORES.prata,
    textAlign: 'center',
    textShadowColor: '#59484C',
    textShadowRadius: 10,
  },

  tituloPequeno: {
    fontSize: 34,
  },

  tituloSecundario: {
    fontFamily: 'CinzelDecorative_400Regular',
    fontSize: 27,
    color: '#D7C9BF',
    textAlign: 'center',
    marginTop: 3,
  },

  tituloSecundarioPequeno: {
    fontSize: 21,
  },

  frase: {
    fontFamily: 'CormorantGaramond_400Regular_Italic',
    fontSize: 21,
    lineHeight: 27,
    color: '#B8A59D',
    textAlign: 'center',
    marginTop: 20,
    alignSelf: 'center',
    maxWidth: 380,
  },

  seloArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 14,
    marginVertical: 33,
  },

  seloLinha: {
    width: 55,
    height: 1,
    backgroundColor: CORES.borda,
  },

  selo: {
    width: 49,
    height: 49,
    borderRadius: 25,
    backgroundColor: CORES.vinho,
    borderWidth: 2,
    borderColor: '#A17A55',
    justifyContent: 'center',
    alignItems: 'center',
  },

  seloIcone: {
    fontSize: 26,
    color: '#E0C18A',
  },

  relatorio: {
    backgroundColor: CORES.painel,
    borderWidth: 1,
    borderColor: CORES.borda,
    padding: 23,
  },

  relatorioTopo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginBottom: 18,
  },

  relatorioEtiqueta: {
    fontSize: 9,
    letterSpacing: 1.7,
    color: CORES.dourado,
  },

  relatorioNumero: {
    fontSize: 10,
    color: '#7D6D65',
  },

  relatorioTitulo: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    fontSize: 29,
    color: CORES.prata,
    marginBottom: 11,
  },

  relatorioTexto: {
    fontFamily: 'CormorantGaramond_400Regular',
    fontSize: 21,
    lineHeight: 29,
    color: CORES.texto,
  },

  divisoria: {
    height: 1,
    backgroundColor: CORES.borda,
    marginVertical: 23,
  },

  detalhes: {
    flexDirection: 'row',
    gap: 15,
    flexWrap: 'wrap',
  },

  detalhe: {
    flexGrow: 1,
    flexBasis: 130,
  },

  detalheRotulo: {
    fontSize: 9,
    letterSpacing: 1.2,
    color: CORES.dourado,
  },

  detalheValor: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    fontSize: 22,
    color: CORES.prata,
    marginTop: 7,
  },

  objeto: {
    marginTop: 22,
    paddingTop: 18,
    borderTopWidth: 1,
    borderTopColor: '#33282A',
  },

  objetoRotulo: {
    fontSize: 9,
    color: CORES.dourado,
    letterSpacing: 1.2,
  },

  objetoValor: {
    fontFamily: 'CormorantGaramond_400Regular_Italic',
    fontSize: 23,
    color: CORES.prata,
    marginTop: 7,
  },

  missao: {
    alignItems: 'center',
    paddingVertical: 38,
    paddingHorizontal: 15,
  },

  missaoOrnamento: {
    color: CORES.dourado,
    fontSize: 29,
    marginBottom: 12,
  },

  missaoEtiqueta: {
    fontSize: 10,
    color: CORES.dourado,
    letterSpacing: 2.3,
  },

  missaoTexto: {
    fontFamily: 'CormorantGaramond_400Regular_Italic',
    color: CORES.prata,
    fontSize: 23,
    lineHeight: 30,
    textAlign: 'center',
    maxWidth: 460,
    marginTop: 14,
  },

  secaoCabecalho: {
    marginBottom: 24,
    borderTopWidth: 1,
    borderTopColor: CORES.borda,
    paddingTop: 30,
  },

  secaoEtiqueta: {
    color: CORES.dourado,
    fontSize: 9,
    letterSpacing: 2,
    marginBottom: 8,
  },

  secaoTitulo: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    fontSize: 39,
    color: CORES.prata,
  },

  secaoDescricao: {
    fontFamily: 'CormorantGaramond_400Regular_Italic',
    fontSize: 20,
    color: CORES.texto,
    marginTop: 3,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#140F11',
    borderWidth: 1,
    borderColor: '#3D2D2A',
    padding: 17,
    marginBottom: 13,
    minHeight: 112,
  },

  cardSimboloArea: {
    width: 48,
    height: 58,
    backgroundColor: '#26191E',
    borderWidth: 1,
    borderColor: '#583B3D',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },

  cardSimbolo: {
    color: '#D8B985',
    fontSize: 27,
  },

  cardConteudo: {
    flex: 1,
  },

  cardNumero: {
    fontSize: 9,
    color: CORES.dourado,
    letterSpacing: 1.6,
  },

  cardTitulo: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    fontSize: 28,
    color: CORES.prata,
    marginTop: 2,
  },

  cardDescricao: {
    fontFamily: 'CormorantGaramond_400Regular',
    fontSize: 17,
    lineHeight: 20,
    color: CORES.texto,
    marginTop: 2,
  },

  cardSeta: {
    fontSize: 22,
    color: CORES.dourado,
    marginLeft: 8,
  },

  final: {
    marginTop: 32,
    alignItems: 'center',
    backgroundColor: '#160D11',
    borderWidth: 1,
    borderColor: '#4E2D34',
    paddingVertical: 33,
    paddingHorizontal: 18,
  },

  finalOrnamento: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 21,
  },

  finalSimbolo: {
    color: CORES.dourado,
    fontSize: 23,
  },

  finalEtiqueta: {
    color: CORES.dourado,
    fontSize: 9,
    letterSpacing: 2,
    textAlign: 'center',
  },

  finalTitulo: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    fontSize: 35,
    color: CORES.prata,
    textAlign: 'center',
    marginTop: 13,
  },

  finalTexto: {
    fontFamily: 'CormorantGaramond_400Regular_Italic',
    fontSize: 21,
    lineHeight: 27,
    color: CORES.texto,
    textAlign: 'center',
    maxWidth: 340,
    marginTop: 10,
  },

  botaoAcusacao: {
    borderWidth: 1,
    borderColor: CORES.dourado,
    backgroundColor: '#24171A',
    paddingVertical: 15,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    marginTop: 27,
  },

  botaoTexto: {
    fontFamily: 'CinzelDecorative_400Regular',
    fontSize: 12,
    color: '#E8D4B3',
  },

  botaoSeta: {
    color: '#D6B77D',
    fontSize: 21,
  },

  rodape: {
    color: '#76635B',
    fontSize: 9,
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 40,
  },

});
