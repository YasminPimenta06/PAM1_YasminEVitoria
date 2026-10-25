import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101014',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  imagem: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },

  texto: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },

  input: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: '#000000',
  },

  botao: {
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
  },

  cadastro: {
    color: '#66B2FF',
    fontSize: 16,
    textAlign: 'center',
  },
});