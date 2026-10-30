
import React, { useState, useCallback } from 'react';

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  useWindowDimensions
} from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold
} from '@expo-google-fonts/nunito';

import {
  Montserrat_800ExtraBold
} from '@expo-google-fonts/montserrat';

import { listarPets } from '../../services/petService';

const CORES = {
  preto: '#090909',
  creme: '#FBF4EA',
  branco: '#FFFDF8',
  verde: '#104D42',
  coral: '#FF7558',
  amarelo: '#F1BD55',
  menta: '#A7D9C5',
  texto: '#183A35',
  cinza: '#6F7974',
  borda: '#E8DCCF'
};

export default function MeusPets({ navigation }) {
  const { width, height } = useWindowDimensions();
  const desktop = width >= 850;

  const [pets, setPets] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [atualizando, setAtualizando] = useState(false);
  const [erro, setErro] = useState('');

  const [fontesCarregadas, erroFonte] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Montserrat_800ExtraBold
  });

  const carregarPets = useCallback(
    async (mostrarLoading = true) => {
      if (mostrarLoading) setCarregando(true);

      try {
        const dados = await listarPets();
        setPets(dados);
        setErro('');
      } catch (error) {
        console.log('Erro ao listar pets:', error);
        setErro('Não foi possível carregar seus pets.');
      } finally {
        setCarregando(false);
        setAtualizando(false);
      }
    },
    []
  );

  useFocusEffect(
    useCallback(() => {
      carregarPets();
    }, [carregarPets])
  );

  function atualizarLista() {
    setAtualizando(true);
    carregarPets(false);
  }

  const vacinasEmDia = pets.filter(
    pet => pet.statusVacinas === 'Em dia'
  ).length;

  const vacinasPendentes = pets.filter(
    pet => pet.statusVacinas === 'Pendente'
  ).length;

  const tamanhoTitulo = desktop
    ? Math.min(62, Math.max(38, width * 0.041))
    : Math.min(45, Math.max(32, width * 0.09));

  if (!fontesCarregadas && !erroFonte) {
    return (
      <View style={styles.carregamento}>
        <ActivityIndicator
          size="large"
          color={CORES.verde}
        />
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.conteudo,
        { minHeight: height }
      ]}
      refreshControl={
        <RefreshControl
          refreshing={atualizando}
          onRefresh={atualizarLista}
          tintColor={CORES.verde}
        />
      }
    >
      <View style={[
        styles.layout,
        desktop && styles.layoutDesktop
      ]}>
        <View style={[
          styles.painel,
          desktop && styles.painelDesktop
        ]}>
          <Text style={styles.marca}>
            Pet<Text style={styles.marcaCor}>Care.</Text>
          </Text>

          <TouchableOpacity
            style={styles.voltar}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.voltarTexto}>
              ← Voltar
            </Text>
          </TouchableOpacity>

          <View style={styles.impacto}>
            <Text style={[
              styles.impactoTexto,
              { fontSize: tamanhoTitulo }
            ]}>
              NOSSA{'\n'}
              <Text style={styles.coral}>FAMÍLIA.</Text>
              {'\n'}NOSSO{'\n'}
              <Text style={styles.amarelo}>AMOR.</Text>
              {'\n'}
              <Text style={styles.menta}>SEMPRE.</Text>
            </Text>
          </View>
        </View>

        <View style={[
          styles.areaDireita,
          desktop && styles.areaDireitaDesktop
        ]}>
          <View style={styles.areaInterna}>
            <View style={styles.cabecalhoLista}>
              <Text style={styles.titulo}>
                Meus pets.
              </Text>

              <TouchableOpacity
                style={styles.botaoAdicionar}
                onPress={() =>
                  navigation.navigate('CadastrarPet')
                }
              >
                <Text style={styles.botaoAdicionarTexto}>
                  + Novo pet
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.resumo}>
              <View style={styles.indicador}>
                <Text style={styles.numero}>
                  {pets.length}
                </Text>
                <Text style={styles.indicadorLabel}>
                  CADASTRADOS
                </Text>
              </View>

              <View style={styles.divisoriaVertical} />

              <View style={styles.indicador}>
                <Text style={[
                  styles.numero,
                  { color: CORES.verde }
                ]}>
                  {vacinasEmDia}
                </Text>
                <Text style={styles.indicadorLabel}>
                  VACINAS EM DIA
                </Text>
              </View>

              <View style={styles.divisoriaVertical} />

              <View style={styles.indicador}>
                <Text style={[
                  styles.numero,
                  { color: CORES.coral }
                ]}>
                  {vacinasPendentes}
                </Text>
                <Text style={styles.indicadorLabel}>
                  PENDENTES
                </Text>
              </View>
            </View>

            <Text style={styles.secaoTitulo}>
              SEUS COMPANHEIROS
            </Text>

            <View style={styles.linhaDivisoria} />

            {carregando ? (
              <ActivityIndicator
                size="large"
                color={CORES.verde}
                style={styles.loadingLista}
              />
            ) : erro ? (
              <View style={styles.estadoVazio}>
                <Text style={styles.estadoTitulo}>
                  Não foi possível carregar.
                </Text>

                <Text style={styles.estadoTexto}>
                  {erro}
                </Text>

                <TouchableOpacity
                  onPress={() => carregarPets()}
                  style={styles.botaoTentar}
                >
                  <Text style={styles.botaoTentarTexto}>
                    Tentar novamente
                  </Text>
                </TouchableOpacity>
              </View>
            ) : pets.length === 0 ? (
              <View style={styles.estadoVazio}>
                <Text style={styles.estadoTitulo}>
                  Sua família começa aqui.
                </Text>

                <Text style={styles.estadoTexto}>
                  Cadastre seu primeiro pet.
                </Text>

                <TouchableOpacity
                  style={styles.botaoTentar}
                  onPress={() =>
                    navigation.navigate('CadastrarPet')
                  }
                >
                  <Text style={styles.botaoTentarTexto}>
                    Cadastrar pet
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              pets.map((pet, index) => {
                const vacinasOk =
                  pet.statusVacinas === 'Em dia';

                return (
                  <TouchableOpacity
                    key={pet.id}
                    style={styles.petLinha}
                    onPress={() =>
                      navigation.navigate('EditarPet', {
                        petId: pet.id
                      })
                    }
                    activeOpacity={0.75}
                  >
                    <View style={[
                      styles.petAvatar,
                      {
                        backgroundColor:
                          index % 3 === 0
                            ? CORES.menta
                            : index % 3 === 1
                              ? CORES.amarelo
                              : '#F4C3B5'
                      }
                    ]}>
                      <Text style={styles.petInicial}>
                        {pet.nome?.charAt(0).toUpperCase() || 'P'}
                      </Text>
                    </View>

                    <View style={styles.petInfo}>
                      <Text style={styles.petNome}>
                        {pet.nome}
                      </Text>

                      <Text style={styles.petDescricao}>
                        {pet.especie}
                        {pet.raca ? ` · ${pet.raca}` : ''}
                      </Text>

                      <Text style={styles.petDescricao}>
                        {pet.idade} anos · {pet.peso} kg
                      </Text>

                      <Text style={[
                        styles.petVacinas,
                        {
                          color: vacinasOk
                            ? CORES.verde
                            : CORES.coral
                        }
                      ]}>
                        {vacinasOk
                          ? 'Vacinas em dia'
                          : 'Vacinas pendentes'}
                      </Text>
                    </View>

                    <View style={styles.editarArea}>
                      <Text style={styles.editarTexto}>
                        Editar
                      </Text>
                      <Text style={styles.seta}>›</Text>
                    </View>
                  </TouchableOpacity>
                );
              })
            )}

            <TouchableOpacity
              style={styles.botaoFinal}
              onPress={() =>
                navigation.navigate('CadastrarPet')
              }
            >
              <Text style={styles.botaoFinalTexto}>
                + Adicionar novo pet
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.creme
  },
  conteudo: {
    flexGrow: 1
  },
  layout: {
    flex: 1,
    width: '100%'
  },
  layoutDesktop: {
    flexDirection: 'row'
  },
  painel: {
    backgroundColor: CORES.preto,
    padding: 30,
    minHeight: 390
  },
  painelDesktop: {
    width: '43%',
    minHeight: '100%',
    padding: 45
  },
  marca: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat_800ExtraBold',
    fontSize: 32
  },
  marcaCor: {
    color: CORES.coral
  },
  voltar: {
    alignSelf: 'flex-start',
    marginTop: 22,
    paddingVertical: 8
  },
  voltarTexto: {
    color: CORES.menta,
    fontFamily: 'Nunito_700Bold',
    fontSize: 16
  },
  impacto: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 35
  },
  impactoTexto: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat_800ExtraBold',
    textAlign: 'left',
    letterSpacing: -1.5
  },
  coral: {
    color: CORES.coral
  },
  amarelo: {
    color: CORES.amarelo
  },
  menta: {
    color: CORES.menta
  },
  areaDireita: {
    backgroundColor: CORES.creme,
    paddingHorizontal: 25,
    paddingVertical: 40
  },
  areaDireitaDesktop: {
    width: '57%',
    paddingHorizontal: 55,
    paddingVertical: 55
  },
  areaInterna: {
    width: '100%',
    maxWidth: 650,
    alignSelf: 'center'
  },
  cabecalhoLista: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 30
  },
  titulo: {
    fontFamily: 'Montserrat_800ExtraBold',
    color: CORES.verde,
    fontSize: 31
  },
  botaoAdicionar: {
    backgroundColor: CORES.verde,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25
  },
  botaoAdicionarTexto: {
    color: '#FFFFFF',
    fontFamily: 'Nunito_700Bold',
    fontSize: 14
  },
  resumo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 38,
    paddingVertical: 22,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: CORES.borda
  },
  indicador: {
    flex: 1,
    alignItems: 'center'
  },
  numero: {
    color: CORES.preto,
    fontFamily: 'Montserrat_800ExtraBold',
    fontSize: 35
  },
  indicadorLabel: {
    color: CORES.cinza,
    fontFamily: 'Nunito_700Bold',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5
  },
  divisoriaVertical: {
    width: 1,
    height: 45,
    backgroundColor: CORES.borda
  },
  secaoTitulo: {
    fontFamily: 'Montserrat_800ExtraBold',
    color: CORES.preto,
    fontSize: 17,
    marginBottom: 16
  },
  linhaDivisoria: {
    height: 2,
    backgroundColor: CORES.preto
  },
  loadingLista: {
    marginVertical: 45
  },
  petLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: CORES.borda
  },
  petAvatar: {
    width: 66,
    height: 66,
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 17
  },
  petInicial: {
    fontFamily: 'Montserrat_800ExtraBold',
    fontSize: 26,
    color: CORES.preto
  },
  petInfo: {
    flex: 1,
    minWidth: 0
  },
  petNome: {
    fontFamily: 'Montserrat_800ExtraBold',
    fontSize: 19,
    color: CORES.preto,
    marginBottom: 5
  },
  petDescricao: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 14,
    color: CORES.cinza,
    marginBottom: 2
  },
  petVacinas: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 13,
    marginTop: 6
  },
  editarArea: {
    alignItems: 'flex-end',
    marginLeft: 12
  },
  editarTexto: {
    fontFamily: 'Nunito_700Bold',
    color: CORES.verde,
    fontSize: 13
  },
  seta: {
    color: CORES.verde,
    fontSize: 28,
    lineHeight: 30
  },
  estadoVazio: {
    paddingVertical: 45,
    alignItems: 'center'
  },
  estadoTitulo: {
    fontFamily: 'Montserrat_800ExtraBold',
    color: CORES.preto,
    fontSize: 20,
    textAlign: 'center'
  },
  estadoTexto: {
    fontFamily: 'Nunito_400Regular',
    color: CORES.cinza,
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10
  },
  botaoTentar: {
    backgroundColor: CORES.verde,
    paddingHorizontal: 25,
    paddingVertical: 13,
    borderRadius: 25,
    marginTop: 20
  },
  botaoTentarTexto: {
    color: '#FFFFFF',
    fontFamily: 'Nunito_700Bold'
  },
  botaoFinal: {
    backgroundColor: CORES.verde,
    paddingVertical: 18,
    borderRadius: 28,
    alignItems: 'center',
    marginTop: 35
  },
  botaoFinalTexto: {
    color: '#FFFFFF',
    fontFamily: 'Nunito_700Bold',
    fontSize: 16
  },
  carregamento: {
    flex: 1,
    backgroundColor: CORES.creme,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
