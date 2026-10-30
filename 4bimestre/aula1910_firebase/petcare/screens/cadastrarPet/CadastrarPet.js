
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
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

import { cadastrarPet } from '../../services/petService';
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
  borda: '#E8DCCF'
};

export default function CadastrarPet({ navigation }) {
  const { width, height } = useWindowDimensions();
  const desktop = width >= 850;

  const [nome, setNome] = useState('');
  const [especie, setEspecie] = useState('Cachorro');
  const [raca, setRaca] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [statusVacinas, setStatusVacinas] =
    useState('Em dia');

  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState('');

  const [fontesCarregadas, erroFonte] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Montserrat_800ExtraBold
  });

  async function salvarPet() {
    setErro('');

    if (
      !nome.trim() ||
      !raca.trim() ||
      !idade.trim() ||
      !peso.trim()
    ) {
      setErro('Preencha todos os campos.');
      return;
    }

    if (!especie.trim() || especie === 'Outro') {
      setErro('Informe qual é o animal.');
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
      setErro('Informe uma idade e um peso válidos.');
      return;
    }

    setSalvando(true);

    try {
      await cadastrarPet({
        nome: nome.trim(),
        especie: especie.trim(),
        raca: raca.trim(),
        idade: idadeNumero,
        peso: pesoNumero,
        statusVacinas
      });

      navigation.navigate('MeusPets');
    } catch (error) {
      console.log('Erro ao cadastrar pet:', error);
      setErro('Não foi possível cadastrar o pet.');
    } finally {
      setSalvando(false);
    }
  }

  if (!fontesCarregadas && !erroFonte) {
    return (
      <View style={styles.carregando}>
        <ActivityIndicator
          size="large"
          color={CORES.verde}
        />
      </View>
    );
  }

  const tituloTamanho = desktop
    ? Math.min(58, Math.max(37, width * 0.039))
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
          >
            <Text style={styles.voltarTexto}>
              ← Voltar
            </Text>
          </TouchableOpacity>

          <View style={styles.impacto}>
            <Text style={[
              styles.impactoTexto,
              { fontSize: tituloTamanho }
            ]}>
              UM NOVO{'\n'}
              <Text style={styles.coral}>AMIGO.</Text>
              {'\n'}TODO O{'\n'}
              <Text style={styles.amarelo}>CUIDADO.</Text>
              {'\n'}
              <Text style={styles.menta}>SEMPRE.</Text>
            </Text>
          </View>
        </View>

        <View style={[
          styles.areaFormulario,
          desktop && styles.areaFormularioDesktop
        ]}>
          <View style={styles.formulario}>
            <Text style={styles.titulo}>
              Cadastrar pet.
            </Text>

            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome do pet"
              placeholderTextColor="#8E978F"
              value={nome}
              onChangeText={setNome}
            />

            <Text style={styles.label}>Espécie</Text>
            <SeletorEspecie
              value={especie}
              onChange={setEspecie}
            />

            <Text style={styles.label}>Raça</Text>
            <TextInput
              style={styles.input}
              placeholder="Raça do pet"
              placeholderTextColor="#8E978F"
              value={raca}
              onChangeText={setRaca}
            />

            <View style={styles.camposDuplos}>
              <View style={styles.campoMetade}>
                <Text style={styles.label}>
                  Idade (anos)
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ex.: 3"
                  placeholderTextColor="#8E978F"
                  keyboardType="numeric"
                  value={idade}
                  onChangeText={setIdade}
                />
              </View>

              <View style={styles.campoMetade}>
                <Text style={styles.label}>
                  Peso (kg)
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ex.: 8,5"
                  placeholderTextColor="#8E978F"
                  keyboardType="decimal-pad"
                  value={peso}
                  onChangeText={setPeso}
                />
              </View>
            </View>

            <Text style={styles.label}>Vacinas</Text>
            <View style={styles.opcoes}>
              {['Em dia', 'Pendente'].map(item => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.opcao,
                    statusVacinas === item &&
                      styles.opcaoSelecionada
                  ]}
                  onPress={() => setStatusVacinas(item)}
                >
                  <Text style={[
                    styles.opcaoTexto,
                    statusVacinas === item &&
                      styles.opcaoTextoSelecionada
                  ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {!!erro && (
              <Text style={styles.erro}>{erro}</Text>
            )}

            <TouchableOpacity
              style={[
                styles.botao,
                salvando && { opacity: 0.6 }
              ]}
              onPress={salvarPet}
              disabled={salvando}
            >
              <Text style={styles.botaoTexto}>
                {salvando
                  ? 'Salvando...'
                  : 'Salvar pet'}
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
    marginBottom: 28
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
  opcaoSelecionada: {
    backgroundColor: CORES.verde,
    borderColor: CORES.verde
  },
  opcaoTexto: {
    color: CORES.texto,
    fontFamily: 'Nunito_700Bold',
    fontSize: 14
  },
  opcaoTextoSelecionada: {
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
  erro: {
    color: '#BC493E',
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 15
  },
  botao: {
    backgroundColor: CORES.verde,
    paddingVertical: 18,
    borderRadius: 28,
    alignItems: 'center',
    marginTop: 5
  },
  botaoTexto: {
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
  carregando: {
    flex: 1,
    backgroundColor: CORES.creme,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
