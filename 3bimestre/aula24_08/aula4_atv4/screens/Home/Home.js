import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function Home() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [operacao, setOperacao] = useState('+');
  const [resultado, setResultado] = useState('');

  function calcular() {
    const n1 = Number(numero1);
    const n2 = Number(numero2);

    if (numero1 === '' || numero2 === '') {
      setResultado('Digite os dois números');
      return;
    }

    if (operacao === '+') {
      setResultado(n1 + n2);
    } else if (operacao === '-') {
      setResultado(n1 - n2);
    } else if (operacao === '*') {
      setResultado(n1 * n2);
    } else if (operacao === '/') {
      if (n2 === 0) {
        setResultado('Não pode dividir por zero');
      } else {
        setResultado(n1 / n2);
      }
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Calculadora
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={numero1}
        onChangeText={setNumero1}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={numero2}
        onChangeText={setNumero2}
      />

      <View style={styles.operacoes}>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setOperacao('+')}
        >
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setOperacao('-')}
        >
          <Text style={styles.textoBotao}>−</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setOperacao('*')}
        >
          <Text style={styles.textoBotao}>×</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setOperacao('/')}
        >
          <Text style={styles.textoBotao}>÷</Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.operacao}>
        Operação selecionada: {operacao}
      </Text>

      <TouchableOpacity
        style={styles.botaoCalcular}
        onPress={calcular}
      >
        <Text style={styles.textoCalcular}>
          CALCULAR
        </Text>
      </TouchableOpacity>

      <Text style={styles.resultado}>
        Resultado: {resultado}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#222',
    marginBottom: 30,
  },

  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 18,
  },

  operacoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },

  botao: {
    width: 60,
    height: 60,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },

  operacao: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },

  botaoCalcular: {
    backgroundColor: '#28a745',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoCalcular: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  resultado: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 25,
    color: '#222',
  },
});
