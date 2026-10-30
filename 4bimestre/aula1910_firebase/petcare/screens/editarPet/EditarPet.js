
import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Platform,
  useWindowDimensions
} from 'react-native';

import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold
} from '@expo-google-fonts/nunito';

import {
  Montserrat_800ExtraBold
} from '@expo-google-fonts/montserrat';

import {
  buscarPetPorId,
  atualizarPet
} from '../../services/petService';

import SeletorEspecie from '../../components/SeletorEspecie';

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

function mostrarAviso(titulo, mensagem) {
  if (Platform.OS === 'web') {
    window.alert(`${titulo}\n${mensagem}`);
  } else {
    Alert.alert(titulo, mensagem);
  }
}

export default function EditarPet({ route, navigation }) {
  const { width, height } = useWindowDimensions();
  const desktop = width >= 850;
  const petId = route.params?.petId;

  const [nome, setNome] = useState('');
  const [especie, setEspecie] = useState('Cachorro');
  const [raca, setRaca] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [vacinas, setVacinas] = useState('Em dia');

  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState('');

  const [fontesCarregadas, erroFonte] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Montserrat_800ExtraBold
  });

  useEffect(() => {
    let ativo = true;

    async function carregarPet() {
      if (!petId) {
        setErro('Nenhum pet foi selecionado.');
        setCarregando(false);
        return;
      }

      try {
        const pet = await buscarPetPorId(petId);

        if (!ativo) return;

        setNome(pet.nome || '');
        setEspecie(pet.especie || 'Cachorro');
        setRaca(pet.raca || '');
        setIdade(String(pet.idade ?? ''));
        setPeso(String(pet.peso ?? ''));
        setVacinas(pet.statusVacinas || 'Em dia');
        setErro('');
      } catch (error) {
        if (ativo) {
          console.log('Erro ao buscar pet:', error);
          setErro('Não foi possível carregar o pet.');
        }
      } finally {
        if (ativo) setCarregando(false);
      }
    }

    carregarPet();

    return () => {
      ativo = false;
    };
  }, [petId]);

  async function salvarAlteracoes() {
    if (
      !nome.trim() ||
      !raca.trim() ||
      !idade.trim() ||
      !peso.trim()
    ) {
      mostrarAviso(
        'Atenção',
        'Preencha todos os campos.'
      );
      return;
    }

    if (!especie.trim() || especie === 'Outro') {
      mostrarAviso(
        'Atenção',
        'Informe qual é o animal.'
      );
      return;
    }

    const idadeNumero = Number(idade);
    const pesoNumero = Number(peso.replace(',', '.'));

    if (
      !Number.isInteger(idadeNumero) ||
      idadeNumero < 0 ||
      !Number.isFinite(pesoNumero) ||
      pesoNumero <= 0
    ) {
      mostrarAviso(
        'Atenção',
        'Informe uma idade e um peso válidos.'
      );
      return;
    }

    setSalvando(true);

    try {
      await atualizarPet(petId, {
        nome: nome.trim(),
        especie: especie.trim(),
        raca: raca.trim(),
        idade: idadeNumero,
        peso: pesoNumero,
        statusVacinas: vacinas
      });

      mostrarAviso(
        'Sucesso!',
        'As informações do pet foram atualizadas.'
      );

      navigation.goBack();
    } catch (error) {
      console.log('Erro ao atualizar pet:', error);

      mostrarAviso(
        'Erro',
        'Não foi possível salvar as alterações.'
      );
    } finally {
      setSalvando(false);
    }
  }

  if (!fontesCarregadas && !erroFonte) {
    return (
      <View style={styles.centralizado}>
        <ActivityIndicator
          size="large"
          color={CORES.verde}
        />
      </View>
    );
  }

  if (carregando) {
    return (
      <View style={styles.centralizado}>
        <ActivityIndicator
          size="large"
          color={CORES.verde}
        />
        <Text style={styles.mensagem}>
          Carregando pet...
        </Text>
      </View>
    );
  }

  if (erro) {
    return (
      <View style={styles.centralizado}>
        <Text style={styles.erro}>{erro}</Text>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.linkVoltar}>
            ← Voltar
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  const tamanhoTitulo = desktop
    ? Math.min(60, Math.max(38, width * 0.04))
    : Math.min(43, Math.max(30, width * 0.085));

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.conteudo,
        { minHeight: height }
      ]}
      keyboardShouldPersistTaps="handled"
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
            disabled={salvando}
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
              CADA{'\n'}
              <Text style={styles.coral}>DETALHE.</Text>
              {'\n'}TODO O{'\n'}
              <Text style={styles.amarelo}>CUIDADO.</Text>
              {'\n'}
              <Text style={styles.menta}>IMPORTA.</Text>
            </Text>
          </View>
        </View>

        <View style={[
          styles.areaFormulario,
          desktop && styles.areaFormularioDesktop
        ]}>
          <View style={styles.formulario}>
            <Text style={styles.titulo}>
              Editar pet.
            </Text>

            <View style={styles.perfil}>
              <View style={styles.avatar}>
                <Text style={styles.inicial}>
                  {nome.charAt(0).toUpperCase() || 'P'}
                </Text>
              </View>

              <View style={styles.perfilInfo}>
                <Text style={styles.nomePerfil}>
                  {nome}
                </Text>
                <Text style={styles.descricaoPerfil}>
                  {especie}
                </Text>
              </View>
            </View>

            <Text style={styles.label}>
              Nome do pet
            </Text>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              placeholder="Nome do pet"
              placeholderTextColor="#8E978F"
            />

            <Text style={styles.label}>
              Espécie
            </Text>
            <SeletorEspecie
              value={especie}
              onChange={setEspecie}
            />

            <Text style={styles.label}>
              Raça
            </Text>
            <TextInput
              style={styles.input}
              value={raca}
              onChangeText={setRaca}
              placeholder="Raça do pet"
              placeholderTextColor="#8E978F"
            />

            <View style={styles.camposDuplos}>
              <View style={styles.campoMetade}>
                <Text style={styles.label}>
                  Idade (anos)
                </Text>
                <TextInput
                  style={styles.input}
                  value={idade}
                  onChangeText={setIdade}
                  keyboardType="numeric"
                  placeholder="Ex.: 3"
                  placeholderTextColor="#8E978F"
                />
              </View>

              <View style={styles.campoMetade}>
                <Text style={styles.label}>
                  Peso (kg)
                </Text>
                <TextInput
                  style={styles.input}
                  value={peso}
                  onChangeText={setPeso}
                  keyboardType="decimal-pad"
                  placeholder="Ex.: 12,5"
                  placeholderTextColor="#8E978F"
                />
              </View>
            </View>

            <Text style={styles.label}>
              Situação das vacinas
            </Text>

            <View style={styles.opcoes}>
              {['Em dia', 'Pendente'].map(item => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.opcao,
                    vacinas === item && styles.opcaoAtiva
                  ]}
                  onPress={() => setVacinas(item)}
                >
                  <Text style={[
                    styles.textoOpcao,
                    vacinas === item &&
                      styles.textoOpcaoAtiva
                  ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={[
                styles.botaoSalvar,
                salvando && { opacity: 0.6 }
              ]}
              onPress={salvarAlteracoes}
              disabled={salvando}
            >
              <Text style={styles.textoBotao}>
                {salvando
                  ? 'Salvando...'
                  : 'Salvar alterações'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelar}
              onPress={() => navigation.goBack()}
              disabled={salvando}
            >
              <Text style={styles.cancelarTexto}>
                Cancelar
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
    minHeight: 380
  },
  painelDesktop: {
    width: '45%',
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
    fontFamily: 'Montserrat_800ExtraBold',
    color: '#FFFFFF',
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
  areaFormulario: {
    backgroundColor: CORES.creme,
    paddingHorizontal: 25,
    paddingVertical: 40,
    justifyContent: 'center'
  },
  areaFormularioDesktop: {
    width: '55%',
    paddingHorizontal: 55
  },
  formulario: {
    width: '100%',
    maxWidth: 540,
    alignSelf: 'center'
  },
  titulo: {
    fontFamily: 'Montserrat_800ExtraBold',
    color: CORES.verde,
    fontSize: 30,
    marginBottom: 24
  },
  perfil: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 22,
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: CORES.borda
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: CORES.menta,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  inicial: {
    fontFamily: 'Montserrat_800ExtraBold',
    color: CORES.preto,
    fontSize: 25
  },
  perfilInfo: {
    flex: 1
  },
  nomePerfil: {
    fontFamily: 'Montserrat_800ExtraBold',
    color: CORES.preto,
    fontSize: 19
  },
  descricaoPerfil: {
    fontFamily: 'Nunito_400Regular',
    color: CORES.cinza,
    fontSize: 14,
    marginTop: 4
  },
  label: {
    fontFamily: 'Nunito_700Bold',
    color: CORES.texto,
    fontSize: 15,
    marginBottom: 8
  },
  input: {
    backgroundColor: CORES.branco,
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontFamily: 'Nunito_400Regular',
    fontSize: 15,
    color: CORES.texto,
    marginBottom: 18
  },
  opcoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 9,
    marginBottom: 22
  },
  opcao: {
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: CORES.borda,
    backgroundColor: CORES.branco
  },
  opcaoAtiva: {
    backgroundColor: CORES.verde,
    borderColor: CORES.verde
  },
  textoOpcao: {
    color: CORES.texto,
    fontFamily: 'Nunito_700Bold',
    fontSize: 14
  },
  textoOpcaoAtiva: {
    color: '#FFFFFF'
  },
  camposDuplos: {
    flexDirection: 'row',
    gap: 15
  },
  campoMetade: {
    flex: 1,
    minWidth: 0
  },
  botaoSalvar: {
    backgroundColor: CORES.verde,
    paddingVertical: 18,
    borderRadius: 28,
    alignItems: 'center',
    marginTop: 5
  },
  textoBotao: {
    color: '#FFFFFF',
    fontFamily: 'Nunito_700Bold',
    fontSize: 17
  },
  cancelar: {
    alignItems: 'center',
    marginTop: 20
  },
  cancelarTexto: {
    color: CORES.coral,
    fontFamily: 'Nunito_700Bold',
    fontSize: 14
  },
  centralizado: {
    flex: 1,
    backgroundColor: CORES.creme,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25
  },
  mensagem: {
    color: CORES.cinza,
    fontFamily: 'Nunito_400Regular',
    marginTop: 15
  },
  erro: {
    color: CORES.coral,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  },
  linkVoltar: {
    color: CORES.verde,
    fontFamily: 'Nunito_700Bold',
    fontSize: 16
  }
});
