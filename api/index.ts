import buildQueryParams from "../modules/queryParams";
import { type filmType } from "../types/index";
const keys = [
  "FA4Q5SC-PQV4MAH-MAZNTWJ-8B9F6KB",
  "WD8CXRE-YW6499C-GQHGK89-ADEXTF2",
  "1TC4BMX-0A64D2K-KZG0RNJ-PASR9DG",
  "584KP88-YPGMVS2-JYV9D8F-6VMPN71",
  "097E415-JKFMB0A-P5G3NNQ-PGHC0B1",
  "T50R3ZC-2QVMW7W-K595PJX-Y9ARNAK",
];
let currentKeyIndex = 0;
export default () => ({
  async login(body) {
    const data = await fetch(`https://api.laraptxe.ru/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return data;
  },
  async register(body) {
    const data = await fetch(`http://localhost:8080/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return data;
  },
  async saveFilm(body) {
    const token = JSON.parse(localStorage.getItem("user"));
    const data = await fetch(
      `http://localhost:8080/users/${body.userId}/add-film`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: token.token,
        },
        body: JSON.stringify({ films: [body.filmId] }),
      }
    );

    return data;
  },
  async delFilm(body) {
    const token = JSON.parse(localStorage.getItem("user"));
    const data = await fetch(
      `http://localhost:8080/users/${body.userId}/remove-film`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: token.token,
        },
        body: JSON.stringify({ films: [body.filmId] }),
      }
    );

    return data;
  },
  async fetchAllFilms() {
    try {
      let randomPage = () => {
        return Math.floor(Math.random() * 33) + 1;
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
      if (error.status === 403) {
        currentKeyIndex++;
        if (currentKeyIndex >= keys.length) {
          currentKeyIndex = 0;
          return {};
        }
        return this.fetchAllFilms();
      } else {
        throw error;
      }
    }
  },
  async fetchFilm(id: number) {
    try {
      // Используем useAsyncData для асинхронного запроса
      const { data, error } = await useAsyncData("page", async () => {
        let attempt = 0; // Переменная для отслеживания попыток
        let response;
        let jsonData;

        while (attempt < keys.length) {
          // Пока есть ключи для проверки
          try {
            // Выполняем запрос к API
            response = await fetch(
              `https://api.kinopoisk.dev/v1.4/movie/${id}`,
              {
                headers: {
                  "X-API-KEY": keys[attempt],
                },
              }
            );

            if (!response.ok) {
              // Если статус не 200, выбрасываем ошибку
              throw new Error(`Ошибка HTTP: ${response.status}`);
            }

            jsonData = await response.json();
            return jsonData; // Возвращаем валидный результат, если нет ошибок
          } catch (err) {
            console.error(`Ошибка при использовании ключа: ${err.message}`);

            if (response && response.status === 403) {
              // Если получили статус 403, меняем ключ
              // Переход к следующему ключу
              attempt++; // Увеличиваем количество попыток
            } else {
              // Если другая ошибка, пробрасываем её дальше
              throw err;
            }
          }
        }

        throw new Error("Все ключи API невалидны или истекли"); // Если все ключи не сработали
      });

      if (error.value) {
        console.error("Ошибка при запросе фильма:", error.value);
        throw error.value;
      }

      return data; // Возвращаем данные
    } catch (err) {
      console.error("Ошибка при запросе фильма:", err);
      throw err;
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
        currentKeyIndex++;
        if (currentKeyIndex >= keys.length) {
          currentKeyIndex = 0;
          return {};
        }
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
        currentKeyIndex++;
        if (currentKeyIndex >= keys.length) return {};
        return this.fetchFilmsByName(name);
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
        currentKeyIndex++;
        if (currentKeyIndex >= keys.length) {
          currentKeyIndex = 0;
          return {};
        }
        return this.fetchFilmsByFilters(params);
      } else {
        throw error;
      }
    }
  },
  async fetchRandomFilm(params: object): Promise<Response> {
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
        currentKeyIndex++;
        if (currentKeyIndex >= keys.length) {
          currentKeyIndex = 0;
          return {};
        }
        return this.fetchRandomFilm(params);
      } else {
        throw error;
      }
    }
  },
  //  async fetchSavedFilms(id:string)
});
