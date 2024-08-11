import { defineStore } from "pinia";
import { type taskType } from "../types";
import apiModule from "../api";
const api = apiModule();
interface State {
  tasks: taskType[];
  task: {
    taskIndex: null | number;
    data: {} | taskType;
  };
  changeStatus: boolean;
  cells: { id: number }[];
}
const arr = {
  docs: [
    {
      id: 6059559,
      name: "Граница пустоты",
      alternativeName: "Kara no Kyoukai",
      type: "anime",
      typeNumber: 4,
      year: 2007,
      description:
        "В конце 90-х серия до ужаса похожих самоубийств не сходит с передовиц японских газет. У всех смертей, помимо нескольких странных сходств, есть одна деталь, которая выделяется среди остальных: все жертвы покончили с собой, спрыгнув со здания Фудзё. Сики Рёги, наделённая сверхспособностями, подозревает, что эти зловещие события имеют сверхъестественную причину. Она приступает к расследованию вместе с детективом и специалисткой в магии Токо Аодзаки, а также своим другом Микией Кокуто. Сики путешествует по загадочному миру, чтобы раскрыть тёмные тайны, окружающие это пугающее явление.",
      shortDescription:
        "Девушка, способная видеть смерть, расследует загадочные самоубийства. Эффектное аниме с готической атмосферой",
      status: "completed",
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        kp: 12,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      movieLength: null,
      totalSeriesLength: 650,
      seriesLength: 65,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1898899/f61fba8b-80a7-47c9-a09b-7b652d17ec92/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1898899/f61fba8b-80a7-47c9-a09b-7b652d17ec92/x1000",
      },
      backdrop: {
        url: "https://image.openmoviedb.com/kinopoisk-ott-images/1531675/2a0000019121a66613e391480fdaea4cf490/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-ott-images/1531675/2a0000019121a66613e391480fdaea4cf490/x1000",
      },
      genres: [
        {
          name: "аниме",
        },
        {
          name: "мультфильм",
        },
        {
          name: "фэнтези",
        },
        {
          name: "триллер",
        },
        {
          name: "боевик",
        },
        {
          name: "детектив",
        },
        {
          name: "драма",
        },
      ],
      countries: [
        {
          name: "Япония",
        },
      ],
      releaseYears: [
        {
          start: 2007,
          end: 2013,
        },
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false,
    },
    {
      id: 5962119,
      name: "Вечно дисквалифицирован",
      alternativeName: "Isekai Shikkaku",
      type: "anime",
      typeNumber: 4,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 6.7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        kp: 93,
        imdb: 134,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 24,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1898899/72911bc1-69d3-4064-890d-be7259d09f80/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1898899/72911bc1-69d3-4064-890d-be7259d09f80/x1000",
      },
      genres: [
        {
          name: "аниме",
        },
        {
          name: "мультфильм",
        },
        {
          name: "фэнтези",
        },
        {
          name: "комедия",
        },
        {
          name: "приключения",
        },
      ],
      countries: [
        {
          name: "Япония",
        },
      ],
      releaseYears: [
        {
          start: 2024,
          end: null,
        },
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false,
    },
    {
      id: 6022324,
      name: "Боевой отряд «Полный провал»",
      alternativeName: "Sentai Daishikkaku",
      type: "anime",
      typeNumber: 4,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        kp: 40,
        imdb: 692,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 23,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/10703959/af506a0f-deaf-4951-9233-b19e09976945/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/10703959/af506a0f-deaf-4951-9233-b19e09976945/x1000",
      },
      genres: [
        {
          name: "аниме",
        },
        {
          name: "мультфильм",
        },
        {
          name: "фантастика",
        },
        {
          name: "боевик",
        },
      ],
      countries: [
        {
          name: "Япония",
        },
      ],
      releaseYears: [
        {
          start: 2024,
          end: null,
        },
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false,
    },
    {
      id: 6000360,
      name: "Мой сосед-ёкай",
      alternativeName: "Tonari no Youkai-san",
      type: "anime",
      typeNumber: 4,
      year: 2024,
      description: null,
      shortDescription: null,
      status: "completed",
      rating: {
        kp: 0,
        imdb: 7.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        kp: 21,
        imdb: 67,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      movieLength: null,
      totalSeriesLength: 299,
      seriesLength: 23,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/10893610/a4310aed-8e9a-4776-88c8-e61b0d4312e1/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/10893610/a4310aed-8e9a-4776-88c8-e61b0d4312e1/x1000",
      },
      genres: [
        {
          name: "аниме",
        },
        {
          name: "мультфильм",
        },
        {
          name: "фэнтези",
        },
        {
          name: "драма",
        },
      ],
      countries: [
        {
          name: "Япония",
        },
      ],
      releaseYears: [
        {
          start: 2024,
          end: 2024,
        },
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false,
    },
    {
      id: 5916443,
      name: "Эй, Томбо!",
      alternativeName: "Oi! Tonbo",
      type: "anime",
      typeNumber: 4,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 6.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        kp: 10,
        imdb: 46,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 24,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4483445/f3f4ddc3-de7e-4b04-a30e-fe111883dd83/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4483445/f3f4ddc3-de7e-4b04-a30e-fe111883dd83/x1000",
      },
      genres: [
        {
          name: "аниме",
        },
        {
          name: "мультфильм",
        },
        {
          name: "спорт",
        },
        {
          name: "драма",
        },
      ],
      countries: [
        {
          name: "Япония",
        },
      ],
      releaseYears: [
        {
          start: 2024,
          end: null,
        },
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false,
    },
    {
      id: 6022338,
      name: "Аля иногда кокетничает со мной по-русски",
      alternativeName:
        "Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san",
      type: "anime",
      typeNumber: 4,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 7.6,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        kp: 285,
        imdb: 584,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 24,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/9784475/e155afb9-4b87-4be2-ad83-9a7011bd8654/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/9784475/e155afb9-4b87-4be2-ad83-9a7011bd8654/x1000",
      },
      genres: [
        {
          name: "аниме",
        },
        {
          name: "мультфильм",
        },
        {
          name: "комедия",
        },
        {
          name: "мелодрама",
        },
      ],
      countries: [
        {
          name: "Япония",
        },
      ],
      releaseYears: [
        {
          start: 2024,
          end: null,
        },
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false,
    },
    {
      id: 5610119,
      name: null,
      alternativeName: "Hokkyoku Hyakkaten no Concierge San",
      enName: null,
      type: "anime",
      typeNumber: 4,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 6.4,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        kp: 6,
        imdb: 251,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      movieLength: 70,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4486454/340f9d00-7d49-4572-916d-23982d458205/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4486454/340f9d00-7d49-4572-916d-23982d458205/x1000",
      },
      genres: [
        {
          name: "аниме",
        },
        {
          name: "мультфильм",
        },
        {
          name: "фэнтези",
        },
      ],
      countries: [
        {
          name: "Япония",
        },
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false,
    },
    {
      id: 6046385,
      name: "Оглянись",
      alternativeName: "Look Back",
      enName: null,
      type: "anime",
      typeNumber: 4,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 8.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        kp: 2,
        imdb: 360,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      movieLength: 62,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/10671298/cffaaf1e-712e-41e2-8ca6-e6c31074e7d2/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/10671298/cffaaf1e-712e-41e2-8ca6-e6c31074e7d2/x1000",
      },
      genres: [
        {
          name: "аниме",
        },
        {
          name: "мультфильм",
        },
        {
          name: "драма",
        },
      ],
      countries: [
        {
          name: "Япония",
        },
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false,
    },
    {
      id: 6046174,
      name: "Волчица и пряности: Торговец встречает мудрую волчицу",
      alternativeName: "Ookami to Koushinryou: Merchant Meets the Wise Wolf",
      type: "anime",
      typeNumber: 4,
      year: 2024,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 7.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        kp: 9,
        imdb: 416,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: 23,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1898899/8cf88f25-32a0-44a4-b891-17447231bdfc/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1898899/8cf88f25-32a0-44a4-b891-17447231bdfc/x1000",
      },
      genres: [
        {
          name: "аниме",
        },
        {
          name: "мультфильм",
        },
        {
          name: "фэнтези",
        },
        {
          name: "драма",
        },
        {
          name: "мелодрама",
        },
        {
          name: "приключения",
        },
      ],
      countries: [
        {
          name: "Япония",
        },
      ],
      releaseYears: [
        {
          start: 2024,
          end: null,
        },
      ],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false,
    },
    {
      id: 6046067,
      name: "Этот глупый свин не понимает мечту девушки с рюкзаком",
      alternativeName: "Seishun Buta Yarou wa Randoseru Girl no Yume wo Minai",
      enName: null,
      type: "anime",
      typeNumber: 4,
      year: 2023,
      description: null,
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 7.8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        kp: 9,
        imdb: 439,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      movieLength: 75,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/10809116/97270a45-3cd7-4f85-9e91-91b18d53f8ae/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/10809116/97270a45-3cd7-4f85-9e91-91b18d53f8ae/x1000",
      },
      genres: [
        {
          name: "аниме",
        },
        {
          name: "мультфильм",
        },
        {
          name: "мелодрама",
        },
        {
          name: "драма",
        },
        {
          name: "фэнтези",
        },
      ],
      countries: [
        {
          name: "Япония",
        },
      ],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false,
    },
  ],
  total: 6412,
  limit: 10,
  page: 1,
  pages: 642,
};
export const useStore = defineStore({
  id: "Products",
  state: (): State => ({
    films: [],
    film: {},
  }),
  // getters: {

  // },

  actions: {
    async fetchFilms() {
      let data = await api.fetchAllFilms();
      this.films = await data.json();

      // this.films = arr.docs;
      try {
      } catch (e) {
        console.error("Error parsing saved tasks:", e);
      }
    },
    async fetchFilm(id: number) {
      let data = await api.fetchFilm(id);
      this.film = await data.json();

      // this.films = arr.docs;
      try {
      } catch (e) {
        console.error("Error parsing saved tasks:", e);
      }
    },
    async fetchFilmsByName(name: string) {
      let data = await api.fetchFilmsByName(name);
      this.films = await data.json();

      // this.films = arr.docs;
      try {
      } catch (e) {
        console.error("Error parsing saved tasks:", e);
      }
    },
  },
});
