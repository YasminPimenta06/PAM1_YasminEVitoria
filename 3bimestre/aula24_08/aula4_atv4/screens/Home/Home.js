import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { gerarPlaylist } from "./Funcao";

export default function Home({ route }) {
  const nome = route.params?.nome || "Usuário";

  const [genero, setGenero] = useState("Todos");
  const [humor, setHumor] = useState("Todos");
  const [energia, setEnergia] = useState("Todos");
  const [idioma, setIdioma] = useState("Todos");

  const [playlist, setPlaylist] = useState([]);

  function criarPlaylist() {
    const preferencias = {
      genero,
      humor,
      energia,
      idioma,
    };

    const resultado = gerarPlaylist(preferencias);

    setPlaylist(resultado);
  }

  function Opcao({ texto, valor, selecionado, onPress }) {
    return (
      <TouchableOpacity
        style={[
          styles.option,
          selecionado === valor && styles.optionSelected,
        ]}
        onPress={onPress}
      >
        <Text
          style={[
            styles.optionText,
            selecionado === valor && styles.optionTextSelected,
          ]}
        >
          {texto}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.greeting}>
        Olá, {nome}! 👋
      </Text>

      <Text style={styles.title}>
        Que vibe você quer hoje?
      </Text>

      <Text style={styles.subtitle}>
        Escolha suas preferências e deixe a gente montar sua playlist.
      </Text>

      {/* GÊNERO */}
      <Text style={styles.sectionTitle}>Gênero</Text>

      <View style={styles.optionsContainer}>
        <Opcao
          texto="Todos"
          valor="Todos"
          selecionado={genero}
          onPress={() => setGenero("Todos")}
        />

        <Opcao
          texto="Pop"
          valor="Pop"
          selecionado={genero}
          onPress={() => setGenero("Pop")}
        />

        <Opcao
          texto="Rock"
          valor="Rock"
          selecionado={genero}
          onPress={() => setGenero("Rock")}
        />

        <Opcao
          texto="MPB"
          valor="MPB"
          selecionado={genero}
          onPress={() => setGenero("MPB")}
        />

        <Opcao
          texto="Eletrônica"
          valor="Eletrônica"
          selecionado={genero}
          onPress={() => setGenero("Eletrônica")}
        />
      </View>

      {/* HUMOR */}
      <Text style={styles.sectionTitle}>Humor</Text>

      <View style={styles.optionsContainer}>
        <Opcao
          texto="Todos"
          valor="Todos"
          selecionado={humor}
          onPress={() => setHumor("Todos")}
        />

        <Opcao
          texto="Feliz"
          valor="Feliz"
          selecionado={humor}
          onPress={() => setHumor("Feliz")}
        />

        <Opcao
          texto="Relaxado"
          valor="Relaxado"
          selecionado={humor}
          onPress={() => setHumor("Relaxado")}
        />

        <Opcao
          texto="Romântico"
          valor="Romântico"
          selecionado={humor}
          onPress={() => setHumor("Romântico")}
        />

        <Opcao
          texto="Triste"
          valor="Triste"
          selecionado={humor}
          onPress={() => setHumor("Triste")}
        />
      </View>

      {/* ENERGIA */}
      <Text style={styles.sectionTitle}>Energia</Text>

      <View style={styles.optionsContainer}>
        <Opcao
          texto="Todos"
          valor="Todos"
          selecionado={energia}
          onPress={() => setEnergia("Todos")}
        />

        <Opcao
          texto="Baixa"
          valor="Baixa"
          selecionado={energia}
          onPress={() => setEnergia("Baixa")}
        />

        <Opcao
          texto="Média"
          valor="Media"
          selecionado={energia}
          onPress={() => setEnergia("Media")}
        />

        <Opcao
          texto="Alta"
          valor="Alta"
          selecionado={energia}
          onPress={() => setEnergia("Alta")}
        />
      </View>

      {/* IDIOMA */}
      <Text style={styles.sectionTitle}>Idioma</Text>

      <View style={styles.optionsContainer}>
        <Opcao
          texto="Todos"
          valor="Todos"
          selecionado={idioma}
          onPress={() => setIdioma("Todos")}
        />

        <Opcao
          texto="Português"
          valor="Português"
          selecionado={idioma}
          onPress={() => setIdioma("Português")}
        />

        <Opcao
          texto="Inglês"
          valor="Inglês"
          selecionado={idioma}
          onPress={() => setIdioma("Inglês")}
        />
      </View>

      {/* BOTÃO */}
      <TouchableOpacity
        style={styles.generateButton}
        onPress={criarPlaylist}
      >
        <Text style={styles.generateText}>
          ✨ GERAR PLAYLIST
        </Text>
      </TouchableOpacity>

      {/* RESULTADO */}
      {playlist.length > 0 && (
        <View style={styles.playlistContainer}>
          <Text style={styles.playlistTitle}>
            Sua playlist 🔥
          </Text>

          <Text style={styles.playlistDescription}>
            Encontramos {playlist.length} músicas para você.
          </Text>

          {playlist.map((musica, index) => (
            <View
              key={index}
              style={styles.song}
            >
              <View style={styles.album}>
                <Text style={styles.albumText}>♫</Text>
              </View>

              <View style={styles.songInfo}>
                <Text style={styles.songTitle}>
                  {musica.titulo}
                </Text>

                <Text style={styles.artist}>
                  {musica.artista}
                </Text>
              </View>

              <Text style={styles.duration}>
                ▶
              </Text>
            </View>
          ))}
        </View>
      )}

      {playlist.length === 0 && (
        <Text style={styles.empty}>
          Sua playlist aparecerá aqui.
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#100B10",
  },

  content: {
    padding: 22,
    paddingBottom: 50,
  },

  greeting: {
    color: "#FF7043",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 8,
  },

  subtitle: {
    color: "#A9A1A5",
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
    marginBottom: 25,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 18,
    marginBottom: 12,
  },

  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  option: {
    backgroundColor: "#211820",
    borderWidth: 1,
    borderColor: "#49323D",
    paddingVertical: 11,
    paddingHorizontal: 16,
    borderRadius: 25,
    marginBottom: 5,
  },

  optionSelected: {
    backgroundColor: "#FF5A1F",
    borderColor: "#FF5A1F",
  },

  optionText: {
    color: "#D0C6CA",
    fontSize: 14,
  },

  optionTextSelected: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  generateButton: {
    backgroundColor: "#FF3D00",
    padding: 18,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 35,
    elevation: 5,
  },

  generateText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  playlistContainer: {
    marginTop: 35,
  },

  playlistTitle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
  },

  playlistDescription: {
    color: "#999",
    marginTop: 5,
    marginBottom: 18,
  },

  song: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C141B",
    borderRadius: 12,
    padding: 10,
    marginBottom: 9,
  },

  album: {
    width: 52,
    height: 52,
    borderRadius: 8,
    backgroundColor: "#FF5722",
    justifyContent: "center",
    alignItems: "center",
  },

  albumText: {
    color: "#FFFFFF",
    fontSize: 28,
  },

  songInfo: {
    flex: 1,
    marginLeft: 13,
  },

  songTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  artist: {
    color: "#999",
    fontSize: 13,
    marginTop: 4,
  },

  duration: {
    color: "#FF7043",
    fontSize: 18,
    marginRight: 8,
  },

  empty: {
    color: "#777",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
  },
});
