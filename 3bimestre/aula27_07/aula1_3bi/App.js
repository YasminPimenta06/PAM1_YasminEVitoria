import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Button } from 'react-native';

export default function App() {
  return (
    <View>
      <Image
        source={{
          uri: 'https://images.seeklogo.com/logo-png/4/1/esporte-clube-porto-alves-de-agudo-rs-logo-png_seeklogo-49338.png',
        }}
        style={{width: 200, height: 200}}
      />
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput placeholder='Insira'/>
      <Button onPress={() => {}} />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
