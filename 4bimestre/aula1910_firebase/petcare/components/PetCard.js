
import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet
} from 'react-native';

import theme from '../styles/theme';

const cores = theme.colors;

export default function PetCard({ pet, onEditar }) {
  const emoji =
    pet.especie === 'Cachorro' ? '🐶' :
    pet.especie === 'Gato' ? '🐱' : '🐾';

  const vacinaEmDia = pet.statusVacinas === 'Em dia';

  const peso = Number(pet.peso);
  const pesoFormatado = Number.isFinite(peso)
    ? peso.toLocaleString('pt-BR')
    : 'Não informado';

  return (
    <View style={styles.card}>
      <View style={styles.topo}>
        <View style={[
          styles.avatar,
          {
            backgroundColor:
              pet.especie === 'Cachorro'
                ? '#FFE7E1'
                : '#DDF9F5'
          }
        ]}>
          <Text style={styles.emoji}>{emoji}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.nome}>{pet.nome}</Text>

          <Text style={styles.descricao}>
            {pet.raca} • {pet.idade} anos
          </Text>

          <Text style={[
            styles.status,
            { color: vacinaEmDia ? '#147F7A' : '#E48A27' }
          ]}>
            ● {vacinaEmDia ? 'Vacinas em dia' : 'Vacinas pendentes'}
          </Text>
        </View>
      </View>

      <View style={styles.rodape}>
        <Text style={styles.peso}>
          Peso: {pesoFormatado} kg
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={onEditar}
        >
          <Text style={styles.textoBotao}>
            Editar perfil ✎
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 19,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: cores.border,
    shadowColor: '#392277',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3
  },
  topo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emoji: {
    fontSize: 36
  },
  info: {
    flex: 1,
    marginLeft: 15
  },
  nome: {
    color: cores.text,
    fontSize: 22,
    fontWeight: 'bold'
  },
  descricao: {
    color: cores.muted,
    fontSize: 13,
    marginTop: 4
  },
  status: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 8
  },
  rodape: {
    borderTopWidth: 1,
    borderTopColor: cores.border,
    marginTop: 17,
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  peso: {
    color: cores.muted,
    fontSize: 13
  },
  botao: {
    backgroundColor: '#E9E1FF',
    paddingHorizontal: 13,
    paddingVertical: 11,
    borderRadius: 12
  },
  textoBotao: {
    color: cores.primary,
    fontWeight: 'bold',
    fontSize: 12
  }
});
