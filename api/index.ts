const keys = [
  "FA4Q5SC-PQV4MAH-MAZNTWJ-8B9F6KB",
  "WD8CXRE-YW6499C-GQHGK89-ADEXTF2",
  "1TC4BMX-0A64D2K-KZG0RNJ-PASR9DG",
];
let currentKeyIndex = 0;
export default () => ({
  async fetchAllFilms() {
    try {
      const data = await fetch(
        "https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=30&query=",
        {
          headers: {
            "X-API-KEY": keys[currentKeyIndex],
          },
        }
      );
      if (!data.ok) {
        throw data;
      }
      return data;
    } catch (error) {
      if (error.status === 403 || error.status === 404) {
        currentKeyIndex = (currentKeyIndex + 1) % keys.length;
        return this.fetchAllFilms(); // Рекурсивный вызов с новым ключом
      } else {
        throw error;
      }
    }
  },
  async fetchFilm(id: number) {
    try {
      const data = await fetch(`https://api.kinopoisk.dev/v1.4/movie/${id}`, {
        headers: {
          "X-API-KEY": keys[currentKeyIndex],
        },
      });
      if (!data.ok) {
        throw data;
      }
      return data;
    } catch (error) {
      if (error.status === 403 || error.status === 404) {
        currentKeyIndex = (currentKeyIndex + 1) % keys.length;
        return this.fetchFilm(id);
      } else {
        throw error;
      }
    }
  },
  async fetchFilmsByName(name: string) {
    try {
      const data = await fetch(
        `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=20&query=${name}`,
        {
          headers: {
            "X-API-KEY": keys[currentKeyIndex],
          },
        }
      );
      if (!data.ok) {
        throw data;
      }
      return data;
    } catch (error) {
      if (error.status === 403) {
        currentKeyIndex = (currentKeyIndex + 1) % keys.length;
        return this.fetchFilmsByName(id);
      } else {
        throw error;
      }
    }
  },
  async fetchFilmsByFilters(name: string) {
    try {
      const data = await fetch(
        `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=100&notNullFields=top250&sortField=top250&sortType=1&type=animated-series&type=anime&rating.imdb=8.5-10`,
        {
          headers: {
            "X-API-KEY": keys[currentKeyIndex],
          },
        }
      );
      if (!data.ok) {
        throw data;
      }
      return data;
    } catch (error) {
      if (error.status === 403) {
        currentKeyIndex = (currentKeyIndex + 1) % keys.length;
        return this.fetchFilmsByFilters(id);
      } else {
        throw error;
      }
    }
  },
});
