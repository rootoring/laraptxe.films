import buildQueryParams from "../modules/queryParams";
import { type filmType } from "../types/index";
const keys = [
  "FA4Q5SC-PQV4MAH-MAZNTWJ-8B9F6KB",
  "WD8CXRE-YW6499C-GQHGK89-ADEXTF2",
  "1TC4BMX-0A64D2K-KZG0RNJ-PASR9DG",
  "584KP88-YPGMVS2-JYV9D8F-6VMPN71",
  "097E415-JKFMB0A-P5G3NNQ-PGHC0B1",
];
let currentKeyIndex = 0;
export default () => ({
  async fetchAllFilms() {
    try {
      let randomPage = () => {
        return Math.floor(Math.random() * 34) + 1;
      };
      const data = await fetch(
        `https://api.kinopoisk.dev/v1.4/movie/search?page=${randomPage()}&limit=30&query=`,
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
  async fetchImg(id: number) {
    try {
      const data = await fetch(
        `https://api.kinopoisk.dev/v1.4/image?page=1&limit=30&movieId=${id}&type=frame&type=screenshot`,
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
        return this.fetchImg(id);
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
  async fetchFilmsByFilters(params) {
    if (typeof params !== "string") params = buildQueryParams(params);
    try {
      const data = await fetch(
        `https://api.kinopoisk.dev/v1.4/movie?${params}`,
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
        return this.fetchFilmsByFilters(params);
      } else {
        throw error;
      }
    }
  },
  async fetchRandomFilm(params): Promise<filmType> {
    if (typeof params !== "string") params = buildQueryParams(params);
    try {
      const data = await fetch(
        `https://api.kinopoisk.dev/v1.4/movie/random?${params}`,
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
        return this.fetchRandomFilm(params);
      } else {
        throw error;
      }
    }
  },
});
