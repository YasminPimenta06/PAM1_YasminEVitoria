import {View, ScrollView, Text, Image, TextInput} from 'react-native';

export default function Home({ navigation }) {
    return (
        <View>
            <Image
            source = {{
                uri: 'https://static.vecteezy.com/system/resources/thumbnails/016/416/789/small/home-line-icon-in-black-colors-house-button-illustration-png.png'
            }}
            style = {{width: 200,height: 200
            }}/>

            <Text>Digite o e-mail</Text>

            <TextInput placeholder ="fulano@hotmail.com"/>

            <Text>Senha</Text>

            <TextInput placeholder="abc@123"/>

            <Button 
             title ="Entrar"
             onPress={() => navigation.navigate('Home')}
            />

        </View>
    );
}