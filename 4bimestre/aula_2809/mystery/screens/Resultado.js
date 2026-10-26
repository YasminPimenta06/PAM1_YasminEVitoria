
import React, { useEffect, useRef } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
  ActivityIndicator,
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

export default function Resultado({ route, navigation }) {
  const acusado = route.params?.acusado || '';
  const culpado = 'Lucas';
  const acertou = acusado === culpado;

  const opacidade = useRef(new Animated.Value(0)).current;
  const deslocamento = useRef(new Animated.Value(25)).current;
  const escalaSelo = useRef(new Animated.Value(0.7)).current;

  const [fontsLoaded] = useFonts({
    CinzelDecorative_400Regular,
    CinzelDecorative_700Bold,
    CormorantGaramond_400Regular,
    CormorantGaramond_400Regular_Italic,
    CormorantGaramond_600SemiBold,
  });

  useEffect(() => {
    Animated.sequence([
      Animated.spring(escalaSelo, {
        toValue: 1,
        friction: 5,
        tension: 55,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(opacidade, {
          toValue: 1,
          duration: 850,
          useNativeDriver: true,
        }),
        Animated.timing(deslocamento, {
          toValue: 0,
          duration: 850,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [escalaSelo, opacidade, deslocamento]);

  function jogarNovamente() {
    navigation.popToTop();
  }

  function voltarInvestigacao() {
    navigation.navigate('Caso');
  }

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
      style={styles.container}
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={true}
      persistentScrollbar={true}
    >
      <View style={styles.conteudo}>

        {/* IDENTIFICAÇÃO */}

        <Text style={styles.arquivo}>
          MYSTERY · DOSSIÊ Nº 001
        </Text>

        <View style={styles.ornamento}>
          <View style={styles.linhaCurta} />
          <Text style={styles.estrela}>✦</Text>
          <View style={styles.linhaCurta} />
        </View>

        {/* SELO ANIMADO */}

        <Animated.View
          style={[
            styles.seloExterno,
            !acertou && styles.seloExternoErro,
            {
              transform: [{ scale: escalaSelo }],
            },
          ]}
        >
          <View
            style={[
              styles.seloInterno,
              !acertou && styles.seloInternoErro,
            ]}
          >
            <Text style={styles.seloSimbolo}>
              {acertou ? '✧' : '⌛'}
            </Text>

            <Text
              style={[
                styles.seloTexto,
                !acertou && styles.seloTextoErro,
              ]}
            >
              {acertou ? 'ENCERRADO' : 'EM ABERTO'}
            </Text>
          </View>
        </Animated.View>

        {/* CONTEÚDO ANIMADO */}

        <Animated.View
          style={[
            styles.resultado,
            {
              opacity: opacidade,
              transform: [
                { translateY: deslocamento },
              ],
            },
          ]}
        >

          <Text
            style={[
              styles.status,
              !acertou && styles.statusErro,
            ]}
          >
            {acertou
              ? 'CASO RESOLVIDO'
              : 'ACUSAÇÃO INCORRETA'}
          </Text>

          <Text style={styles.titulo}>
            {acertou
              ? 'A verdade foi revelada.'
              : 'O mistério permanece.'}
          </Text>

          <Text style={styles.subtitulo}>
            {acertou
              ? 'Você descobriu quem estava por trás do desaparecimento.'
              : 'Sua investigação ainda não chegou ao fim.'}
          </Text>

          {/* IDENTIFICAÇÃO DO ACUSADO */}

          <View
            style={[
              styles.quadroAcusado,
              !acertou && styles.quadroAcusadoErro,
            ]}
          >
            <Text style={styles.quadroRotulo}>
              {acertou
                ? 'CULPADO IDENTIFICADO'
                : 'SUSPEITO ACUSADO'}
            </Text>

            <Text
              style={[
                styles.nomeAcusado,
                !acertou && styles.nomeAcusadoErro,
              ]}
            >
              {acusado.toUpperCase() || 'DESCONHECIDO'}
            </Text>

            <Text style={styles.quadroStatus}>
              {acertou
                ? 'ACUSAÇÃO CORRETA'
                : 'ACUSAÇÃO NÃO CONFIRMADA'}
            </Text>
          </View>

          {acertou ? (
            <>
              {/* DESFECHO CORRETO */}

              <View style={styles.separador}>
                <View style={styles.linhaLonga} />
                <Text style={styles.separadorIcone}>
                  ❦
                </Text>
                <View style={styles.linhaLonga} />
              </View>

              <Text style={styles.secaoTitulo}>
                O QUE ACONTECEU?
              </Text>

              <Text style={styles.explicacao}>
                Lucas sabia onde o colar era guardado e
                recebeu uma mensagem suspeita antes do
                desaparecimento.
              </Text>

              <Text style={styles.explicacao}>
                Em seu depoimento, afirmou que não havia
                passado pelo corredor do escritório.
              </Text>

              <Text style={styles.explicacao}>
                Porém, a câmera de segurança registrou
                Lucas no corredor às 22:37.
              </Text>

              {/* PROVA DECISIVA */}

              <View style={styles.prova}>
                <Text style={styles.provaEtiqueta}>
                  ✦ PROVA DECISIVA
                </Text>

                <Text style={styles.provaTexto}>
                  O depoimento de Lucas contradizia
                  diretamente a gravação da câmera
                  de segurança.
                </Text>

                <Text style={styles.provaHorario}>
                  REGISTRO · 22:37
                </Text>
              </View>

              {/* CONCLUSÃO */}

              <View style={styles.finalSucesso}>
                <Text style={styles.finalSimbolo}>
                  ✧
                </Text>

                <Text style={styles.finalTitulo}>
                  CASO ENCERRADO
                </Text>

                <Text style={styles.finalTexto}>
                  O COLAR DESAPARECIDO FOI RECUPERADO.
                </Text>
              </View>

              <TouchableOpacity
                style={styles.botaoPrincipal}
                onPress={jogarNovamente}
                activeOpacity={0.8}
              >
                <Text style={styles.botaoPrincipalTexto}>
                  JOGAR NOVAMENTE
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              {/* DESFECHO INCORRETO */}

              <View style={styles.separador}>
                <View style={styles.linhaLonga} />
                <Text style={styles.separadorIcone}>
                  ❦
                </Text>
                <View style={styles.linhaLonga} />
              </View>

              <Text style={styles.secaoTitulo}>
                A INVESTIGAÇÃO CONTINUA
              </Text>

              <Text style={styles.explicacaoCentral}>
                As evidências não são suficientes
                para responsabilizar a pessoa
                que você escolheu.
              </Text>

              {/* DICA */}

              <View style={styles.dica}>
                <Text style={styles.dicaEtiqueta}>
                  ✧ DICA DO INVESTIGADOR
                </Text>

                <Text style={styles.dicaTexto}>
                  Existe uma contradição importante
                  entre um depoimento e uma das evidências.
                </Text>
              </View>

              <Text style={styles.instrucao}>
                Compare os depoimentos com as evidências
                e tente novamente.
              </Text>

              <TouchableOpacity
                style={styles.botaoPrincipal}
                onPress={voltarInvestigacao}
                activeOpacity={0.8}
              >
                <Text style={styles.botaoPrincipalTexto}>
                  VOLTAR À INVESTIGAÇÃO
                </Text>
              </TouchableOpacity>
            </>
          )}

          <Text style={styles.rodape}>
            MYSTERY · MANSÃO OLIVEIRA
          </Text>

        </Animated.View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
    paddingBottom: 50,
  },

  conteudo: {
    width: '100%',
    maxWidth: 680,
    paddingHorizontal: 25,
    paddingTop: 35,
    alignItems: 'center',
  },

  arquivo: {
    color: CORES.dourado,
    fontSize: 10,
    letterSpacing: 1.8,
    textAlign: 'center',
  },

  ornamento: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginTop: 24,
    marginBottom: 30,
  },

  linhaCurta: {
    width: 55,
    height: 1,
    backgroundColor: CORES.borda,
  },

  estrela: {
    color: CORES.dourado,
    fontSize: 22,
  },

  seloExterno: {
    width: 165,
    height: 165,
    borderRadius: 83,
    borderWidth: 2,
    borderColor: CORES.dourado,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#21191A',
    marginBottom: 28,
  },

  seloExternoErro: {
    borderColor: '#8C5055',
    backgroundColor: '#241419',
  },

  seloInterno: {
    width: 145,
    height: 145,
    borderRadius: 73,
    borderWidth: 1,
    borderColor: '#715C3D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  seloInternoErro: {
    borderColor: '#7D464C',
  },

  seloSimbolo: {
    color: CORES.dourado,
    fontSize: 51,
    marginBottom: 5,
  },

  seloTexto: {
    color: CORES.dourado,
    fontSize: 10,
    letterSpacing: 1.8,
  },

  seloTextoErro: {
    color: '#D18B8D',
  },

  resultado: {
    width: '100%',
    alignItems: 'center',
  },

  status: {
    color: CORES.dourado,
    fontSize: 11,
    letterSpacing: 3,
    textAlign: 'center',
  },

  statusErro: {
    color: '#D18B8D',
  },

  titulo: {
    fontFamily: 'CinzelDecorative_700Bold',
    color: CORES.prata,
    fontSize: 26,
    textAlign: 'center',
    marginTop: 15,
  },

  subtitulo: {
    fontFamily: 'CormorantGaramond_400Regular_Italic',
    color: CORES.texto,
    fontSize: 22,
    lineHeight: 28,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 28,
  },

  quadroAcusado: {
    width: '100%',
    backgroundColor: '#1B1612',
    borderWidth: 1,
    borderColor: '#806B49',
    paddingVertical: 25,
    paddingHorizontal: 15,
    alignItems: 'center',
  },

  quadroAcusadoErro: {
    backgroundColor: '#201417',
    borderColor: '#7D464C',
  },

  quadroRotulo: {
    color: CORES.dourado,
    fontSize: 10,
    letterSpacing: 1.5,
  },

  nomeAcusado: {
    fontFamily: 'CinzelDecorative_700Bold',
    color: CORES.prata,
    fontSize: 34,
    marginVertical: 15,
    textAlign: 'center',
  },

  nomeAcusadoErro: {
    color: '#E0B6B5',
  },

  quadroStatus: {
    color: CORES.texto,
    fontSize: 10,
    letterSpacing: 1.4,
  },

  separador: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginVertical: 31,
  },

  linhaLonga: {
    flex: 1,
    height: 1,
    backgroundColor: CORES.borda,
  },

  separadorIcone: {
    color: CORES.dourado,
    fontSize: 24,
  },

  secaoTitulo: {
    fontFamily: 'CinzelDecorative_400Regular',
    color: CORES.dourado,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 21,
  },

  explicacao: {
    fontFamily: 'CormorantGaramond_400Regular',
    color: CORES.prata,
    fontSize: 21,
    lineHeight: 28,
    marginBottom: 16,
    alignSelf: 'stretch',
  },

  explicacaoCentral: {
    fontFamily: 'CormorantGaramond_400Regular',
    color: CORES.prata,
    fontSize: 22,
    lineHeight: 29,
    textAlign: 'center',
    marginBottom: 25,
  },

  prova: {
    width: '100%',
    backgroundColor: CORES.painel,
    borderLeftWidth: 3,
    borderLeftColor: CORES.dourado,
    padding: 20,
    marginTop: 15,
  },

  provaEtiqueta: {
    color: CORES.dourado,
    fontSize: 10,
    letterSpacing: 1.5,
  },

  provaTexto: {
    fontFamily: 'CormorantGaramond_400Regular_Italic',
    color: CORES.prata,
    fontSize: 22,
    lineHeight: 29,
    marginTop: 13,
  },

  provaHorario: {
    color: '#8D7A6E',
    fontSize: 10,
    letterSpacing: 1.3,
    marginTop: 15,
  },

  finalSucesso: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 10,
  },

  finalSimbolo: {
    color: CORES.dourado,
    fontSize: 30,
  },

  finalTitulo: {
    fontFamily: 'CinzelDecorative_700Bold',
    color: CORES.prata,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },

  finalTexto: {
    color: CORES.dourado,
    fontSize: 11,
    letterSpacing: 1.2,
    textAlign: 'center',
    marginTop: 15,
    lineHeight: 20,
  },

  dica: {
    width: '100%',
    backgroundColor: CORES.painel,
    borderLeftWidth: 3,
    borderLeftColor: CORES.dourado,
    padding: 20,
  },

  dicaEtiqueta: {
    color: CORES.dourado,
    fontSize: 10,
    letterSpacing: 1.5,
  },

  dicaTexto: {
    fontFamily: 'CormorantGaramond_400Regular_Italic',
    color: CORES.prata,
    fontSize: 22,
    lineHeight: 29,
    marginTop: 13,
  },

  instrucao: {
    fontFamily: 'CormorantGaramond_400Regular',
    color: CORES.texto,
    fontSize: 21,
    lineHeight: 28,
    textAlign: 'center',
    marginTop: 26,
  },

  botaoPrincipal: {
    backgroundColor: CORES.dourado,
    minWidth: 205,
    maxWidth: '100%',
    paddingHorizontal: 20,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 34,
  },

  botaoPrincipalTexto: {
    fontFamily: 'CinzelDecorative_400Regular',
    color: CORES.fundo,
    fontSize: 11,
    textAlign: 'center',
  },

  rodape: {
    color: '#8D7A6E',
    fontSize: 9,
    letterSpacing: 1.5,
    marginTop: 45,
    textAlign: 'center',
  },
});
