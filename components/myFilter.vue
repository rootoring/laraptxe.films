<template>
  <div class="container d-flex gap-s filter-cont m-l">
    <mySelect v-model="filmGeneres" :data="filmGenres">Жанр</mySelect>
    <mySelect v-model="countryFilm" :data="country">Страна</mySelect>
    <mySelect v-model="filmTypeChange" :data="filmType">Тип</mySelect>
    <btn class="btn" @click="find">Поиск</btn>
  </div>
  <starWarsLoader v-show="loadFilm" />
</template>
<script setup>
import mySelect from "../components/ui/mySelect.vue";
import btn from "../components/ui/btn.vue";
import { useStore } from "../store/store";
const store = useStore();
let filmGeneres = ref("");
watch(filmGeneres, (a) => {
  a === "" ? (params.genres.name = []) : (params.genres.name = [a]);
});
let filmTypeChange = ref("");
watch(filmTypeChange, (a) => {
  a === "" ? (params.type = []) : (params.type = [a]);
});
let countryFilm = ref("");
watch(countryFilm, (a) => {
  a === "" ? (params.countries.name = []) : (params.countries.name = [a]);
});
const find = async () => {
  loadFilm.value = true;
  await store.fetchFilter(params);
  loadFilm.value = false;
};
let loadFilm = ref(false);
const params = {
  page: 1,
  limit: 100,
  selectFields: [],
  notNullFields: ["name", "year", "rating.kp"],
  sortField: ["rating.kp"],
  sortType: ["-1"],
  type: [],
  genres: {
    name: [],
  },
  year: ["2000-2024"],
  rating: {
    kp: ["7-10"],
  },
  countries: {
    name: [],
  },
  typeNumber: [],
};
const filmGenres = [
  {
    name: "",
    slug: "",
  },
  {
    name: "аниме",
    slug: "anime",
  },
  {
    name: "биография",
    slug: "biografiya",
  },
  {
    name: "боевик",
    slug: "boevik",
  },
  {
    name: "вестерн",
    slug: "vestern",
  },
  {
    name: "военный",
    slug: "voennyy",
  },
  {
    name: "детектив",
    slug: "detektiv",
  },
  {
    name: "детский",
    slug: "detskiy",
  },

  {
    name: "документальный",
    slug: "dokumentalnyy",
  },
  {
    name: "драма",
    slug: "drama",
  },

  {
    name: "комедия",
    slug: "komediya",
  },

  {
    name: "короткометражка",
    slug: "korotkometrazhka",
  },
  {
    name: "криминал",
    slug: "kriminal",
  },
  {
    name: "мелодрама",
    slug: "melodrama",
  },

  {
    name: "приключения",
    slug: "priklyucheniya",
  },

  {
    name: "спорт",
    slug: "sport",
  },

  {
    name: "триллер",
    slug: "triller",
  },
  {
    name: "ужасы",
    slug: "uzhasy",
  },
  {
    name: "фантастика",
    slug: "fantastika",
  },

  {
    name: "фэнтези",
    slug: "fentezi",
  },
];
const country = [
  {
    name: "",
    slug: "",
  },
  {
    name: "Индия",
    slug: "Indiya",
  },
  {
    name: "Россия",
    slug: "Rossiya",
  },
  {
    name: "США",
    slug: "SShA",
  },
  {
    name: "Франция",
    slug: "Frantsiya",
  },
  {
    name: "Южная Корея",
    slug: "Koreya-Yuzhnaya",
  },
  {
    name: "Япония",
    slug: "Yaponiya",
  },
];
const filmType = [
  {
    name: "",
    slug: "",
  },
  {
    name: "movie",
    slug: "",
  },
  {
    name: "tv-series",
    slug: "",
  },
  {
    name: "anime",
    slug: "",
  },
  {
    name: "cartoon",
    slug: "",
  },
  {
    name: "animated-series",
    slug: "",
  },
];
</script>
<style>
.btn {
  align-self: flex-end;
}
@media (max-width: 768px) {
  .filter-cont {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .btn {
    align-self: center;
  }
}
</style>
