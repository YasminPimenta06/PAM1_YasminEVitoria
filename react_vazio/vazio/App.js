import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.titulo}>
        <Text style={styles.text}>Copa do Mundo 2026</Text>
      </View>
      <ScrollView style ={styles.cont_texto}>
        <Text>
          O impacto das redes sociais na sociedade contemporânea
          Nas últimas décadas, as redes sociais transformaram profundamente a forma como as pessoas se comunicam, trabalham e se relacionam. Com o avanço da tecnologia e a expansão do acesso à internet, plataformas digitais passaram a fazer parte do cotidiano de bilhões de indivíduos ao redor do mundo. Atualmente, elas são utilizadas para compartilhar informações, divulgar opiniões, acompanhar notícias, promover negócios e fortalecer relações pessoais. Entretanto, apesar dos inúmeros benefícios proporcionados por essas ferramentas, seu uso também apresenta desafios significativos para a sociedade, especialmente no que se refere à saúde mental, à disseminação de informações e à qualidade das relações humanas.
          Em primeiro lugar, é importante destacar que as redes sociais contribuíram para a democratização da comunicação. Antes do surgimento dessas plataformas, a produção e a divulgação de conteúdos estavam concentradas principalmente nos grandes veículos de comunicação. Hoje, qualquer pessoa com acesso à internet pode expressar suas ideias, compartilhar experiências e alcançar um grande número de pessoas. Esse processo ampliou a participação da população em debates sociais e políticos, fortalecendo a liberdade de expressão e possibilitando maior visibilidade para grupos que antes tinham pouca representatividade.
          Além disso, as redes sociais facilitam a conexão entre indivíduos que se encontram em diferentes partes do mundo. Amigos e familiares podem manter contato constante independentemente da distância geográfica, o que fortalece vínculos afetivos e reduz barreiras de comunicação. Da mesma forma, estudantes e profissionais têm acesso a oportunidades de aprendizado e networking que podem contribuir para seu desenvolvimento acadêmico e profissional. Muitas empresas também utilizam essas plataformas como ferramentas de marketing e divulgação, ampliando sua presença no mercado e alcançando novos consumidores.
          Outro benefício relevante está relacionado à rapidez na circulação de informações. Por meio das redes sociais, notícias e acontecimentos podem ser divulgados quase instantaneamente, permitindo que a população acompanhe eventos importantes em tempo real. Em situações de emergência, como desastres naturais ou crises de saúde pública, essas plataformas desempenham um papel fundamental na orientação da população e na mobilização de recursos para auxiliar pessoas afetadas.
          No entanto, apesar dessas vantagens, o uso excessivo das redes sociais pode gerar consequências negativas. Um dos principais problemas é a dependência digital, fenômeno cada vez mais comum entre jovens e adultos. Muitas pessoas passam várias horas por dia conectadas, verificando notificações, publicando conteúdos e consumindo informações. Esse comportamento pode prejudicar a produtividade, reduzir a capacidade de concentração e comprometer atividades importantes, como estudos, trabalho e convivência familiar.
          Além disso, a exposição constante às redes sociais pode afetar a saúde mental dos usuários. Frequentemente, as pessoas compartilham apenas os aspectos positivos de suas vidas, criando uma imagem idealizada da realidade. Ao comparar sua própria rotina com essas representações, muitos indivíduos desenvolvem sentimentos de frustração, ansiedade e baixa autoestima. Entre os adolescentes, esse problema é ainda mais preocupante, pois eles se encontram em uma fase de formação da identidade e podem ser mais vulneráveis à influência de padrões irreais de beleza, sucesso e felicidade.
          Outro desafio significativo é a disseminação de notícias falsas. As chamadas fake news espalham-se rapidamente pelas redes sociais devido à facilidade de compartilhamento de conteúdos. Muitas vezes, informações sem comprovação são divulgadas como verdadeiras e acabam influenciando a opinião pública. Esse fenômeno pode gerar desinformação, prejudicar processos democráticos e provocar conflitos sociais. Por isso, torna-se fundamental que os usuários desenvolvam senso crítico e verifiquem a origem das informações antes de compartilhá-las.
          Também merece atenção a questão da privacidade. Ao utilizar redes sociais, os usuários frequentemente fornecem dados pessoais que podem ser coletados e utilizados por empresas para diversos fins. Em alguns casos, o uso inadequado dessas informações pode comprometer a segurança dos indivíduos e expô-los a golpes, fraudes e outras ameaças virtuais. Dessa forma, é essencial que as pessoas adotem medidas de proteção digital e utilizem as configurações de segurança disponíveis nas plataformas.
          Diante desse cenário, torna-se necessário promover uma educação digital mais eficaz. As escolas podem desempenhar um papel importante ao orientar os estudantes sobre o uso responsável da internet e das redes sociais. As famílias também devem acompanhar os hábitos digitais dos jovens, incentivando o equilíbrio entre a vida virtual e as relações presenciais. Paralelamente, as próprias plataformas digitais precisam investir em mecanismos de combate à desinformação, ao discurso de ódio e à exposição excessiva de conteúdos prejudiciais.
          Portanto, as redes sociais representam uma das maiores transformações tecnológicas da sociedade moderna. Seus benefícios são inegáveis, especialmente no que diz respeito à comunicação, ao acesso à informação e à criação de oportunidades pessoais e profissionais. Contudo, os impactos negativos relacionados à saúde mental, à dependência tecnológica, à desinformação e à privacidade demonstram a necessidade de um uso mais consciente dessas ferramentas. Assim, por meio da educação, da responsabilidade individual e da atuação das empresas de tecnologia, será possível aproveitar os aspectos positivos das redes sociais e minimizar seus efeitos prejudiciais, contribuindo para uma sociedade mais informada, equilibrada e conectada.

        </Text>
      </ScrollView>
        <View>
          <TextInput style={{height:40, borderColor: "yellow", borderWidth: 20, width: 400, alignSelf: 'center'}}>

            </TextInput>
        </View>
    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  titulo: {
    flex: 1,
    margintop: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  cont_texto: {
    margintop: 600,
    height: 700,
    width: 400,
    backgroundColor: "green",
    alignSelf: 'center',
  },
  text: {
    backgroundColor: 'blue',
    height: 50,
    width: 400,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Sans-Serif',

  }
});
