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

export const useStore = defineStore({
  id: "Products",
  state: (): State => ({
    films: [],
    film: {},
    anime: [],
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
    async fetchAnime(name: string) {
      let data = await api.fetchFilmsByFilters(name);
      this.anime = await data.json();

      // this.films = arr.docs;
      try {
      } catch (e) {
        console.error("Error parsing saved tasks:", e);
      }
    },
  },
});
