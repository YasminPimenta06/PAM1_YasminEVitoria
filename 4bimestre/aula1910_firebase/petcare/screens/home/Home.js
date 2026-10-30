
import React, { useState, useCallback } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  StyleSheet, ActivityIndicator, useWindowDimensions
} from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold
} from '@expo-google-fonts/nunito';

import { Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat';

import { auth, db } from '../../firebase/firebase';
import { listarPets } from '../../services/petService';

export default function Home({ navigation }) {
  const { width } = useWindowDimensions();
  const desktop = width >= 800;

  const [nome, setNome] = useState('');
  const [pets, setPets] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  const [fontesCarregadas, erroFonte] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Montserrat_800ExtraBold
  });

  useFocusEffect(
    useCallback(() => {
      let ativo = true;

      async function carregar() {
        setCarregando(true);

        try {
          const usuario = auth.currentUser;

          if (!usuario) {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }]
            });
            return;
          }

          const [resultado, lista] = await Promise.all([
            getDoc(doc(db, 'usuarios', usuario.uid)),
            listarPets()
          ]);

          if (!ativo) return;

          const dados = resultado.exists() ? resultado.data() : {};
          setNome(dados.nome || 'Visitante');
          setPets(lista);
          setErro('');
        } catch (error) {
          console.log('Erro na Home:', error);
          if (ativo) setErro('Não foi possível carregar seus pets.');
        } finally {
          if (ativo) setCarregando(false);
        }
      }

      carregar();

      return () => { ativo = false; };
    }, [navigation])
  );

  async function sair() {
    try {
      await signOut(auth);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }]
      });
    } catch (error) {
      setErro('Não foi possível sair da conta.');
    }
  }

  if (!fontesCarregadas && !erroFonte) {
    return (
      <View style={styles.carregando}>
        <ActivityIndicator color="#104D42" />
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
    >
      <View style={styles.cabecalho}>
        <Text style={styles.marca}>
          Pet<Text style={styles.marcaCor}>Care.</Text>
        </Text>
        <TouchableOpacity onPress={sair}>
          <Text style={styles.sair}>Sair</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.hero, desktop && styles.heroDesktop]}>
        <View style={styles.heroTexto}>
          <Text style={styles.saudacao}>
            OLÁ, {nome.trim().split(/\s+/)[0].toUpperCase() || 'VISITANTE'}.
          </Text>

          <Text style={[
            styles.heroTitulo,
            { fontSize: desktop ? 53 : 36 }
          ]}>
            CUIDAR É{'\n'}
            <Text style={styles.coral}>AMAR.</Text>
            {'\n'}TODOS OS{'\n'}
            <Text style={styles.menta}>DIAS.</Text>
          </Text>
        </View>

        <TouchableOpacity
          style={styles.heroBotao}
          onPress={() => navigation.navigate('CadastrarPet')}
        >
          <Text style={styles.heroBotaoTexto}>Cadastrar pet</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.principal}>
        <View style={styles.acessos}>
          <TouchableOpacity
            style={styles.atalho}
            onPress={() => navigation.navigate('CadastrarPet')}
          >
            <View style={[styles.circulo, { backgroundColor: '#104D42' }]}>
              <Text style={styles.simbolo}>+</Text>
            </View>
            <Text style={styles.atalhoTexto}>Novo pet</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.atalho}
            onPress={() => navigation.navigate('MeusPets')}
          >
            <View style={[styles.circulo, { backgroundColor: '#D56B49' }]}>
              <Text style={styles.simbolo}>≡</Text>
            </View>
            <Text style={styles.atalhoTexto}>Meus pets</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.atalho}
            onPress={() => navigation.navigate('Sobre')}
          >
            <View style={[styles.circulo, { backgroundColor: '#F1BD55' }]}>
              <Text style={[styles.simbolo, { color: '#090909' }]}>i</Text>
            </View>
            <Text style={styles.atalhoTexto}>Sobre</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linhaTitulo}>
          <Text style={styles.secaoTitulo}>SEUS PETS</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('MeusPets')}
          >
            <Text style={styles.verTodos}>Ver todos</Text>
          </TouchableOpacity>
        </View>

        {carregando ? (
          <ActivityIndicator
            color="#104D42"
            size="large"
            style={{ marginTop: 20 }}
          />
        ) : erro ? (
          <Text style={styles.vazio}>{erro}</Text>
        ) : pets.length === 0 ? (
          <Text style={styles.vazio}>Nenhum pet cadastrado.</Text>
        ) : (
          pets.slice(0, 4).map(pet => (
            <TouchableOpacity
              key={pet.id}
              style={styles.petLinha}
              onPress={() =>
                navigation.navigate('EditarPet', { petId: pet.id })
              }
            >
              <View style={styles.avatar}>
                <Text style={styles.inicial}>
                  {pet.nome?.charAt(0).toUpperCase() || 'P'}
                </Text>
              </View>

              <View style={styles.petInfo}>
                <Text style={styles.petNome}>{pet.nome}</Text>
                <Text style={styles.petDetalhes}>
                  {pet.raca || pet.especie} · {pet.idade} anos
                </Text>
                <Text style={[
                  styles.petVacinas,
                  {
                    color: pet.statusVacinas === 'Em dia'
                      ? '#4F9A78'
                      : '#D56B49'
                  }
                ]}>
                  {pet.statusVacinas === 'Em dia'
                    ? 'Vacinas em dia'
                    : 'Vacinas pendentes'}
                </Text>
              </View>

              <Text style={styles.seta}>›</Text>
            </TouchableOpacity>
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF4EA'
  },
  conteudo: {
    flexGrow: 1,
    paddingBottom: 50
  },
  cabecalho: {
    backgroundColor: '#090909',
    paddingHorizontal: 30,
    paddingVertical: 23,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  marca: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat_800ExtraBold',
    fontSize: 29
  },
  marcaCor: { color: '#FF7558' },
  sair: {
    color: '#A7D9C5',
    fontFamily: 'Nunito_700Bold',
    fontSize: 15
  },
  hero: {
    backgroundColor: '#090909',
    paddingHorizontal: 30,
    paddingVertical: 42,
    alignItems: 'flex-start'
  },
  heroDesktop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 65,
    paddingVertical: 55
  },
  heroTexto: { flex: 1 },
  saudacao: {
    color: '#FFFFFF',
    fontFamily: 'Nunito_700Bold',
    fontSize: 17,
    marginBottom: 20
  },
  heroTitulo: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat_800ExtraBold',
    letterSpacing: -1.5
  },
  coral: { color: '#FF7558' },
  menta: { color: '#A7D9C5' },
  heroBotao: {
    backgroundColor: '#F1BD55',
    paddingHorizontal: 27,
    paddingVertical: 16,
    marginTop: 25,
    borderRadius: 28
  },
  heroBotaoTexto: {
    color: '#090909',
    fontFamily: 'Nunito_700Bold',
    fontSize: 16
  },
  principal: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingHorizontal: 28,
    paddingTop: 35
  },
  acessos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 45
  },
  atalho: { flex: 1, alignItems: 'center' },
  circulo: {
    width: 68,
    height: 68,
    borderRadius: 34,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  simbolo: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: 'bold'
  },
  atalhoTexto: {
    color: '#183A35',
    fontFamily: 'Nunito_700Bold',
    fontSize: 14
  },
  linhaTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  secaoTitulo: {
    color: '#090909',
    fontFamily: 'Montserrat_800ExtraBold',
    fontSize: 24
  },
  verTodos: {
    color: '#D56B49',
    fontFamily: 'Nunito_700Bold',
    fontSize: 14
  },
  petLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 17,
    borderBottomWidth: 1,
    borderBottomColor: '#E8DCCF'
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#A7D9C5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16
  },
  inicial: {
    color: '#104D42',
    fontFamily: 'Montserrat_800ExtraBold',
    fontSize: 24
  },
  petInfo: { flex: 1 },
  petNome: {
    color: '#090909',
    fontFamily: 'Montserrat_800ExtraBold',
    fontSize: 17
  },
  petDetalhes: {
    color: '#6F7974',
    fontFamily: 'Nunito_400Regular',
    fontSize: 14,
    marginTop: 4
  },
  petVacinas: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 13,
    marginTop: 5
  },
  seta: {
    color: '#104D42',
    fontSize: 30
  },
  vazio: {
    color: '#6F7974',
    fontFamily: 'Nunito_400Regular',
    fontSize: 15,
    marginTop: 20
  },
  carregando: {
    flex: 1,
    backgroundColor: '#FBF4EA',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
