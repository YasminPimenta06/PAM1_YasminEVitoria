
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
  vinho: '#681E2B',
  dourado: '#B99A64',
  prata: '#EDE8E4',
  texto: '#B9AFA9',
  borda: '#49362F',
};

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
  const [suspeitoSelecionado, setSuspeitoSelecionado] =
    useState(null);

  const [mostrarConfirmacao, setMostrarConfirmacao] =
    useState(false);

  const { width } = useWindowDimensions();
  const telaPequena = width < 370;

  const [fontsLoaded] = useFonts({
    CinzelDecorative_400Regular,
    CinzelDecorative_700Bold,
    CormorantGaramond_400Regular,
    CormorantGaramond_400Regular_Italic,
    CormorantGaramond_600SemiBold,
  });

  function selecionarSuspeito(suspeito) {
    setSuspeitoSelecionado(suspeito);
  }

  function confirmarAcusacao() {
    if (!suspeitoSelecionado) return;

    setMostrarConfirmacao(true);
  }

  function finalizarAcusacao() {
    if (!suspeitoSelecionado) return;

    const nomeAcusado = suspeitoSelecionado.nome;

    setMostrarConfirmacao(false);

    navigation.navigate('Resultado', {
      acusado: nomeAcusado,
    });
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
    <View style={styles.container}>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={true}
        persistentScrollbar={true}
      >
        <View style={styles.conteudo}>

          {/* CABEÇALHO */}

          <Text style={styles.arquivo}>
            MYSTERY · CASO Nº 001
          </Text>

          <View style={styles.ornamento}>
            <View style={styles.linha} />
            <Text style={styles.estrela}>✦</Text>
            <View style={styles.linha} />
          </View>

          <Text style={styles.titulo}>
            O VEREDITO
          </Text>

          <Text style={styles.frase}>
            Uma escolha. Uma verdade.
          </Text>

          {/* BALANÇA */}

          <View style={styles.ilustracao}>

            <View style={styles.circuloBalanca}>
              <Text style={styles.simboloBalanca}>
                ⚖
              </Text>
            </View>

            <Text style={styles.ilustracaoTexto}>
              MANSÃO OLIVEIRA
            </Text>

            <Text style={styles.ilustracaoSubtexto}>
              O MOMENTO DA VERDADE
            </Text>

          </View>

          {/* PERGUNTA */}

          <Text style={styles.pergunta}>
            Quem roubou o colar?
          </Text>

          <Text style={styles.instrucao}>
            Selecione o culpado.
          </Text>

          {/* SUSPEITOS */}

          <View style={styles.grade}>

            {suspeitos.map((suspeito) => {
              const selecionado =
                suspeitoSelecionado?.id === suspeito.id;

              return (
                <TouchableOpacity
                  key={suspeito.id}
                  style={[
                    styles.card,
                    telaPequena && styles.cardPequeno,
                    selecionado && styles.cardSelecionado,
                  ]}
                  onPress={() =>
                    selecionarSuspeito(suspeito)
                  }
                  activeOpacity={0.8}
                  accessibilityRole="radio"
                  accessibilityState={{
                    checked: selecionado,
                  }}
                >

                  <View style={styles.cardTopo}>

                    <Text style={styles.numero}>
                      0{suspeito.id}
                    </Text>

                    <View
                      style={[
                        styles.checkbox,
                        selecionado &&
                          styles.checkboxSelecionado,
                      ]}
                    >
                      {selecionado && (
                        <Text style={styles.check}>
                          ✓
                        </Text>
                      )}
                    </View>

                  </View>

                  <Text
                    style={[
                      styles.nome,
                      telaPequena && styles.nomePequeno,
                    ]}
                  >
                    {suspeito.nome}
                  </Text>

                  <Text
                    style={styles.funcao}
                    numberOfLines={2}
                  >
                    {suspeito.funcao}
                  </Text>

                </TouchableOpacity>
              );
            })}

          </View>

          {/* BOTÃO CENTRALIZADO */}

          <TouchableOpacity
            style={[
              styles.botaoAcusar,
              !suspeitoSelecionado &&
                styles.botaoDesativado,
            ]}
            onPress={confirmarAcusacao}
            disabled={!suspeitoSelecionado}
            activeOpacity={0.8}
          >
            <Text style={styles.textoBotao}>
              SELAR ACUSAÇÃO
            </Text>
          </TouchableOpacity>

          <Text style={styles.avisoFinal}>
            {suspeitoSelecionado
              ? `${suspeitoSelecionado.nome} selecionado(a).`
              : 'Escolha um suspeito para continuar.'}
          </Text>

          <Text style={styles.rodape}>
            ✦
          </Text>

        </View>
      </ScrollView>

      {/* MODAL DE CONFIRMAÇÃO */}

      <Modal
        visible={mostrarConfirmacao}
        transparent={true}
        animationType="fade"
        onRequestClose={() =>
          setMostrarConfirmacao(false)
        }
      >
        <View style={styles.fundoConfirmacao}>

          <View style={styles.caixaConfirmacao}>

            <Text style={styles.iconeConfirmacao}>
              ⚖
            </Text>

            <Text style={styles.tituloConfirmacao}>
              O VEREDITO FINAL
            </Text>

            <Text style={styles.mensagemConfirmacao}>
              Você deseja acusar{' '}
              {suspeitoSelecionado?.nome}?
            </Text>

            <TouchableOpacity
              style={styles.botaoConfirmarFinal}
              onPress={finalizarAcusacao}
              activeOpacity={0.8}
            >
              <Text style={styles.textoConfirmarFinal}>
                CONFIRMAR
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoReconsiderar}
              onPress={() =>
                setMostrarConfirmacao(false)
              }
            >
              <Text style={styles.textoReconsiderar}>
                RECONSIDERAR
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>

    </View>
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
    paddingBottom: 45,
  },

  conteudo: {
    width: '100%',
    maxWidth: 700,
    paddingHorizontal: 24,
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
    justifyContent: 'center',
    marginTop: 23,
    marginBottom: 20,
    gap: 15,
  },

  linha: {
    width: 55,
    height: 1,
    backgroundColor: CORES.borda,
  },

  estrela: {
    color: CORES.dourado,
    fontSize: 21,
  },

  titulo: {
    fontFamily: 'CinzelDecorative_700Bold',
    color: CORES.prata,
    fontSize: 31,
    textAlign: 'center',
  },

  frase: {
    fontFamily: 'CormorantGaramond_400Regular_Italic',
    color: CORES.texto,
    fontSize: 22,
    textAlign: 'center',
    marginTop: 12,
  },

  ilustracao: {
    width: '100%',
    height: 210,
    marginTop: 28,
    backgroundColor: '#140E11',
    borderWidth: 1,
    borderColor: CORES.borda,
    alignItems: 'center',
    justifyContent: 'center',
  },

  circuloBalanca: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#241B19',
    borderWidth: 1,
    borderColor: '#554532',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },

  simboloBalanca: {
    fontSize: 75,
    color: CORES.dourado,
    textAlign: 'center',
  },

  ilustracaoTexto: {
    fontFamily: 'CinzelDecorative_400Regular',
    color: CORES.dourado,
    fontSize: 12,
    letterSpacing: 1,
  },

  ilustracaoSubtexto: {
    color: '#8D7A6E',
    fontSize: 9,
    letterSpacing: 2,
    marginTop: 7,
  },

  pergunta: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    color: CORES.prata,
    fontSize: 31,
    textAlign: 'center',
    marginTop: 32,
  },

  instrucao: {
    fontFamily: 'CormorantGaramond_400Regular',
    color: CORES.texto,
    fontSize: 20,
    marginTop: 5,
    marginBottom: 25,
  },

  grade: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },

  card: {
    width: '48%',
    minHeight: 126,
    backgroundColor: CORES.painel,
    borderWidth: 1,
    borderColor: CORES.borda,
    padding: 15,
    justifyContent: 'space-between',
  },

  cardPequeno: {
    width: '47%',
    padding: 11,
  },

  cardSelecionado: {
    backgroundColor: '#30241E',
    borderColor: '#CBA96F',
    borderWidth: 1.5,
  },

  cardTopo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  numero: {
    color: CORES.dourado,
    fontSize: 10,
    letterSpacing: 1,
  },

  checkbox: {
    width: 23,
    height: 23,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#70584C',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkboxSelecionado: {
    backgroundColor: CORES.dourado,
    borderColor: CORES.dourado,
  },

  check: {
    color: CORES.fundo,
    fontSize: 15,
    fontWeight: 'bold',
  },

  nome: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    color: CORES.prata,
    fontSize: 28,
    marginTop: 9,
  },

  nomePequeno: {
    fontSize: 24,
  },

  funcao: {
    fontFamily: 'CormorantGaramond_400Regular',
    color: CORES.texto,
    fontSize: 17,
    marginTop: 3,
  },

  botaoAcusar: {
    backgroundColor: CORES.dourado,
    width: 205,
    minHeight: 49,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 34,
    paddingHorizontal: 12,
  },

  botaoDesativado: {
    opacity: 0.45,
  },

  textoBotao: {
    fontFamily: 'CinzelDecorative_400Regular',
    color: CORES.fundo,
    fontSize: 11,
    textAlign: 'center',
  },

  avisoFinal: {
    color: CORES.texto,
    fontFamily: 'CormorantGaramond_400Regular_Italic',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 15,
  },

  rodape: {
    color: CORES.dourado,
    fontSize: 23,
    marginTop: 27,
  },

  // JANELA DE CONFIRMAÇÃO

  fundoConfirmacao: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.93)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  caixaConfirmacao: {
    backgroundColor: CORES.painel,
    borderWidth: 1,
    borderColor: CORES.dourado,
    width: '100%',
    maxWidth: 360,
    padding: 28,
    alignItems: 'center',
  },

  iconeConfirmacao: {
    fontSize: 52,
    color: CORES.dourado,
    marginBottom: 18,
  },

  tituloConfirmacao: {
    fontFamily: 'CinzelDecorative_700Bold',
    color: CORES.prata,
    fontSize: 19,
    textAlign: 'center',
  },

  mensagemConfirmacao: {
    fontFamily: 'CormorantGaramond_400Regular',
    color: CORES.texto,
    fontSize: 23,
    textAlign: 'center',
    marginVertical: 24,
  },

  botaoConfirmarFinal: {
    backgroundColor: CORES.dourado,
    width: 170,
    paddingVertical: 14,
    alignItems: 'center',
  },

  textoConfirmarFinal: {
    color: CORES.fundo,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },

  botaoReconsiderar: {
    marginTop: 23,
    padding: 8,
  },

  textoReconsiderar: {
    color: CORES.dourado,
    fontSize: 11,
    letterSpacing: 1.5,
  },
});
