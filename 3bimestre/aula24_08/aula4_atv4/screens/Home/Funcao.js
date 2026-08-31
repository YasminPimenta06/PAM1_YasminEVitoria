const musicas = [
  {
    titulo: "Midnight Drive",
    artista: "Nova",
    genero: "Pop",
    humor: "Feliz",
    energia: "Alta",
    idioma: "Inglês",
  },

  {
    titulo: "Summer Lights",
    artista: "Luna",
    genero: "Pop",
    humor: "Feliz",
    energia: "Alta",
    idioma: "Inglês",
  },

  {
    titulo: "Noite Quente",
    artista: "Aurora",
    genero: "Pop",
    humor: "Romântico",
    energia: "Media",
    idioma: "Português",
  },

  {
    titulo: "Coração em Chamas",
    artista: "Vibe",
    genero: "Rock",
    humor: "Romântico",
    energia: "Alta",
    idioma: "Português",
  },

  {
    titulo: "Cidade Neon",
    artista: "Pulse",
    genero: "Eletrônica",
    humor: "Feliz",
    energia: "Alta",
    idioma: "Inglês",
  },

  {
    titulo: "Depois da Chuva",
    artista: "Sol",
    genero: "MPB",
    humor: "Triste",
    energia: "Baixa",
    idioma: "Português",
  },

  {
    titulo: "Calma",
    artista: "Maré",
    genero: "MPB",
    humor: "Relaxado",
    energia: "Baixa",
    idioma: "Português",
  },

  {
    titulo: "Dream Again",
    artista: "Sky",
    genero: "Pop",
    humor: "Relaxado",
    energia: "Media",
    idioma: "Inglês",
  },

  {
    titulo: "Electric Soul",
    artista: "Fire",
    genero: "Eletrônica",
    humor: "Feliz",
    energia: "Media",
    idioma: "Inglês",
  },

  {
    titulo: "Peso do Mundo",
    artista: "Eco",
    genero: "Rock",
    humor: "Triste",
    energia: "Media",
    idioma: "Português",
  },
];

export function gerarPlaylist(preferencias) {
  const resultado = musicas
    .map((musica) => {
      let pontos = 0;

      // Gênero
      if (
        preferencias.genero === "Todos" ||
        musica.genero === preferencias.genero
      ) {
        pontos++;
      }

      // Humor
      if (
        preferencias.humor === "Todos" ||
        musica.humor === preferencias.humor
      ) {
        pontos++;
      }

      // Energia
      if (
        preferencias.energia === "Todos" ||
        musica.energia === preferencias.energia
      ) {
        pontos++;
      }

      // Idioma
      if (
        preferencias.idioma === "Todos" ||
        musica.idioma === preferencias.idioma
      ) {
        pontos++;
      }

      return {
        ...musica,
        pontos,
      };
    })
    .sort((a, b) => b.pontos - a.pontos);

  return resultado.slice(0, 5);
}
