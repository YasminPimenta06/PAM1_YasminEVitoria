
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const OPCOES = [
  'Cachorro',
  'Gato',
  'Pássaro',
  'Coelho',
  'Hamster',
  'Porquinho-da-índia',
  'Peixe',
  'Tartaruga',
  'Réptil',
  'Outro'
];

export default function SeletorEspecie({ value, onChange }) {
  const [aberto, setAberto] = useState(false);

  const personalizada =
    !!value &&
    value !== 'Outro' &&
    !OPCOES.includes(value);

  const selecionada = personalizada ? 'Outro' : value;

  function selecionar(opcao) {
    onChange(opcao);
    setAberto(false);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.seletor,
          aberto && styles.seletorAberto
        ]}
        onPress={() => setAberto(!aberto)}
        activeOpacity={0.8}
      >
        <Text style={styles.valor}>
          {selecionada || 'Selecione um animal'}
        </Text>
        <Text style={styles.seta}>
          {aberto ? '⌃' : '⌄'}
        </Text>
      </TouchableOpacity>

      {aberto && (
        <View style={styles.lista}>
          {OPCOES.map(opcao => (
            <TouchableOpacity
              key={opcao}
              style={[
                styles.item,
                selecionada === opcao && styles.itemAtivo
              ]}
              onPress={() => selecionar(opcao)}
            >
              <Text style={[
                styles.itemTexto,
                selecionada === opcao &&
                  styles.itemTextoAtivo
              ]}>
                {opcao}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {selecionada === 'Outro' && (
        <View style={styles.campoOutro}>
          <Text style={styles.labelOutro}>
            Qual é o animal?
          </Text>
          <TextInput
            style={styles.inputOutro}
            placeholder="Ex.: Furão, Chinchila..."
            placeholderTextColor="#8E978F"
            value={personalizada ? value : ''}
            onChangeText={texto =>
              onChange(texto || 'Outro')
            }
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 22
  },
  seletor: {
    backgroundColor: '#FFFDF8',
    borderWidth: 1,
    borderColor: '#E8DCCF',
    borderRadius: 14,
    paddingHorizontal: 17,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  seletorAberto: {
    borderColor: '#104D42'
  },
  valor: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#183A35',
    fontSize: 15
  },
  seta: {
    fontSize: 24,
    color: '#104D42'
  },
  lista: {
    marginTop: 7,
    backgroundColor: '#FFFDF8',
    borderWidth: 1,
    borderColor: '#E8DCCF',
    borderRadius: 14,
    overflow: 'hidden'
  },
  item: {
    paddingHorizontal: 17,
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#E8DCCF'
  },
  itemAtivo: {
    backgroundColor: '#E5F0E9'
  },
  itemTexto: {
    color: '#183A35',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 14
  },
  itemTextoAtivo: {
    color: '#104D42',
    fontFamily: 'Nunito_700Bold'
  },
  campoOutro: {
    marginTop: 15
  },
  labelOutro: {
    fontFamily: 'Nunito_700Bold',
    color: '#183A35',
    fontSize: 14,
    marginBottom: 8
  },
  inputOutro: {
    backgroundColor: '#FFFDF8',
    borderWidth: 1,
    borderColor: '#E8DCCF',
    borderRadius: 14,
    padding: 15,
    color: '#183A35',
    fontFamily: 'Nunito_400Regular',
    fontSize: 15
  }
});
