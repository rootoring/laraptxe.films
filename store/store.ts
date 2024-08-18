import { defineStore } from "pinia";
import { type taskType } from "../types";
import apiModule from "../api";
const api = apiModule();
interface State {
  films: taskType[];
  film: {};
  anime: [];
  menuStatus: boolean;
}

export const useStore = defineStore({
  id: "Products",
  state: (): State => ({
    films: [],
    film: {},
    anime: [],
    filterFilm: [],
    menuStatus: false,
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
  },
});
