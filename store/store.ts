import { defineStore } from "pinia";
import { type filmType } from "../types/index";
import apiModule from "../api";
import type { register } from "swiper/element";
const api = apiModule();
interface State {
  films: filmType[];
  film: filmType | {};
  filmImg: [];
  anime: [];
  filterFilm: [];
  menuStatus: boolean;
  user: {
    _id: String;
    username: String;
    films: [] | String[];
    isAdmin: boolean;
  } | null;
  messages: { message: string; status: string }[] | [];
}

export const useStore = defineStore({
  id: "Products",
  state: (): State => ({
    films: [],
    film: {},
    filmImg: [],
    anime: [],
    filterFilm: [],
    menuStatus: false,
    user: null,
    messages: [],
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
      this.film = data;

      // this.films = arr.docs;
      try {
      } catch (e) {
        console.error("Error parsing saved tasks:", e);
      }
    },
    async fetchImg(id: number) {
      let data = await api.fetchImg(id);
      this.filmImg = await data.json();

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
    async fetchAnime() {
      const animeParams = {
        page: 1,
        limit: 100,
        notNullFields: ["top250"],
        sortField: ["top250"],
        sortType: [1],
        type: ["anime"],
        "rating.imdb": ["7.5-10"],
      };
      let data = await api.fetchFilmsByFilters(animeParams);
      this.anime = await data.json();

      // this.films = arr.docs;
      try {
      } catch (e) {
        console.error("Error parsing saved tasks:", e);
      }
    },
    async fetchFilter(params) {
      let data = await api.fetchFilmsByFilters(params);
      this.filterFilm = await data.json();

      // this.films = arr.docs;
      try {
      } catch (e) {
        console.error("Error parsing saved tasks:", e);
      }
    },
    async fetchRandom(params) {
      let data = await api.fetchRandomFilm(params);
      return await data.json();

      try {
      } catch (e) {
        console.error("Error parsing saved tasks:", e);
      }
    },
    async fetchTopFilms(params) {
      let data = await api.fetchFilmsByFilters(params);
      let { docs } = await data.json();

      this.films.push(...docs);
      try {
      } catch (e) {
        console.error("Error parsing saved tasks:", e);
      }
    },
    async fetchSavedFilms() {
      if (this.user.films.length <= 0) return;
      let data = await api.fetchFilmsByFilters({ id: this.user.films });
      let { docs } = await data.json();

      this.films = docs;
      try {
      } catch (e) {
        console.error("Error parsing saved tasks:", e);
      }
    },
    async login(body) {
      try {
        const data = await api.login(body);

        if (!data.ok) {
          const meta = await data.json();
          this.addElement(meta);
          throw new Error("Ошиииибка");
        }
        const userData = await data.json();
        this.user = userData;
        localStorage.setItem("user", JSON.stringify(this.user));
      } catch (err) {
        console.log(err.message);
      }
    },
    async register(body) {
      try {
        const data = await api.register(body);
        if (!data.ok) {
          const meta = await data.json();
          this.addElement(meta);
          throw new Error("Ошиииибка");
        }
        const { userData, meta } = await data.json();
        this.user = userData;
        localStorage.setItem("user", JSON.stringify(this.user));
        this.addElement(meta);
      } catch (err) {
        console.log(err.message);
      }
    },
    async saveFilm(filmId) {
      try {
        const data = await api.saveFilm({ userId: this.user?._id, filmId });
        if (!data.ok) {
          const meta = await data.json();
          this.addElement(meta);
          throw new Error("Ошиииибка");
        }
        const { userData, meta } = await data.json();
        this.user = userData;
        localStorage.setItem("user", JSON.stringify(this.user));
        this.addElement(meta);
      } catch (err) {
        console.log(err.message);
      }
    },
    async delFilm(filmId) {
      try {
        const data = await api.delFilm({ userId: this.user?._id, filmId });
        if (!data.ok) {
          const meta = await data.json();
          this.addElement(meta);
          throw new Error("Ошиииибка");
        }
        const { userData, meta } = await data.json();
        this.user = userData;
        localStorage.setItem("user", JSON.stringify(this.user));
        this.addElement(meta);
      } catch (err) {
        console.log(err.message);
      }
    },
    addElement(element) {
      this.messages.push(element);

      setTimeout(() => {
        this.removeElement(element);
      }, 5000);
    },

    // Функция для удаления элемента
    removeElement(element) {
      const index = this.messages.indexOf(element);
      if (index > -1) {
        this.messages.splice(index, 1); // Удаляем элемент из массива
      }
    },
  },
});
