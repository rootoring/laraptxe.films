<template>
  <section class="movie-lists">
    <div class="container d-flex flex-column">
      <h1 class="color-gray500 fs-l mt-l">Новогоднее настроение</h1>
      <TransitionGroup name="list" tag="div" class="film-lists mt-l">
        <FilmCard v-for="film of store?.films" :data="film" :key="film?.id" />
      </TransitionGroup>
      <div class="loadMoreBtn">
        <starWarsLoader v-show="loadFilm" />
        <btn v-show="btnShow" @click="loadMore">Загрузить еще</btn>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useStore } from "../store/store";
import btn from "../../components/ui/btn.vue";

useHead({
  title:
    "Новогодняя подборка фильмов | Топ самых лучших фильмов Laraptxe.films",
});
const store = useStore();
onMounted(async () => {
  loadFilm.value = true;
  await store.fetchTopFilms(params);
  loadFilm.value = false;
});
let loadFilm = ref(false);
let fetchEnd = ref(false);
const btnShow = computed(() => {
  if (loadFilm.value) return false;
  if (fetchEnd.value) return false;
  return true;
});
const loadMore = async () => {
  loadFilm.value = true;
  params.page += 1;
  fetchEnd.value = await store.fetchTopFilms(params);
  loadFilm.value = false;
};
onUnmounted(() => {
  store.films = [];
});
const params = {
  page: 1,
  limit: 20,
  selectFields: [],
  notNullFields: ["name", "year", "rating.kp"],
  sortField: [],
  sortType: [],
  type: [],
  genres: {
    name: [],
  },
  id: [
    "8124",
    "77331",
    "493768",
    "5056",
    "464090",
    "3755",
    "2547",
    "8222",
    "46701",
    "975292",
    "63906",
    "493208",
    "79450",
    "6144",
    "689",
    "7222",
    "328",
    "276295",
    "842380",
    "5928",
    "38905",
    "470036",
    "160908",
    "48162",
  ],
  year: [],
  rating: {
    kp: [],
  },
  countries: {
    name: [],
  },
  typeNumber: [],
  lists: [],
};
</script>

<style scoped>
.loadMoreBtn {
  align-self: center;
  margin-top: 80px;
}
.film-lists {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(5, 1fr);
}
@media (max-width: 1200px) {
  .film-lists {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 970px) {
  .film-lists {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 768px) {
  .film-lists {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 385px) {
  .film-lists {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
