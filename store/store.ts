import { defineStore } from "pinia";
import type {
  filmType,
  ParamsType,
  filmImgType,
  filmsType,
} from "../types/index";
import apiModule from "../api";

const api = apiModule();
interface State {
  films: filmType[] | [];
  film: filmType | {};
  filmImg: filmImgType | {};
  anime: filmsType | {};
  filterFilm: filmsType | {};
  menuStatus: boolean;
  user: {
    _id: string;
    username: string;
    films: string[];
    isAdmin: boolean;
  } | null;
  person: {};
  messages: { message: string; status: string }[] | [];
}

export const useStore = defineStore({
  id: "Products",
  state: (): State => ({
    films: [],
    film: {},
    filmImg: {},
    anime: {},
    filterFilm: {},
    menuStatus: false,
    user: null,
    person: {},
    messages: [],
  }),
  // getters: {

  // },

  actions: {
    async fetchFilms() {
      try {
        this.films = await api.fetchAllFilms();
      } catch (e) {
        console.error("Error parsing saved tasks:", e);
      }
    },
    async fetchFilm(id: number) {
      let data = await api.fetchFilm(id);
      if (data !== null) this.film = data;

      try {
      } catch (e) {
        console.error("Error parsing saved tasks:", e);
      }
    },
    async fetchImg(id: number) {
      try {
        this.filmImg = await api.fetchImg(id);
      } catch (e) {
        console.error("Error parsing saved tasks:", e);
      }
    },
    async fetchFilmsByName(name: string) {
      try {
        this.films = await api.fetchFilmsByName(name);
      } catch (e) {
        console.error("Error parsing saved tasks:", e);
      }
    },
    async fetchAnime() {
      const animeParams: ParamsType = {
        page: 1,
        limit: 100,
        notNullFields: ["top250"],
        sortField: ["top250"],
        sortType: ["1"],
        type: ["anime"],
        rating: { imdb: ["7.5-10"] },
      };

      try {
        this.anime = await api.fetchFilmsByFilters(animeParams);
      } catch (e) {
        console.error("Error parsing saved tasks:", e);
      }
    },
    async fetchFilter(params: ParamsType) {
      this.filterFilm = await api.fetchFilmsByFilters(params);

      try {
      } catch (e) {
        console.error("Error parsing saved tasks:", e);
      }
    },
    async fetchRandom(params: ParamsType) {
      try {
        return await api.fetchRandomFilm(params);
      } catch (e) {
        console.error("Error parsing saved tasks:", e);
      }
    },
    async fetchTopFilms(params: ParamsType) {
      try {
        let { docs, total } = await api.fetchFilmsByFilters(params);

        this.films.push(...docs);
        return this.films.length == total;
      } catch (e) {
        console.error("Error parsing saved tasks:", e);
      }
    },
    async fetchSavedFilms(page: number) {
      try {
        if (!this.user || this.user.films.length <= 0) return;
        let data = await api.fetchFilmsByFilters({
          page: page,
          limit: 15,
          id: this.user.films,
        });
        let arr = data.docs;
        this.films.push(...arr);
        return this.films.length == total;
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
        console.log(err);
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
        console.log(err);
      }
    },
    async saveFilm(filmId: string) {
      try {
        const user = localStorage.getItem("user");
        if (!user) throw new Error("Нет данных о пользователе");
        const token = JSON.parse(user);

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
        console.log(err);
      }
    },
    async delFilm(filmId: string) {
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
        console.log(err);
      }
    },

    async fetchPerson(id: number) {
      let data = await api.fetchPerson(id);
      this.person = await data.json();

      // this.films = arr.docs;
      try {
      } catch (e) {
        console.error("Error parsing saved tasks:", e);
      }
    },

    addElement(element) {
      this.messages.push(element);

      setTimeout(() => {
        this.removeElement(element);
      }, 2000);
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
