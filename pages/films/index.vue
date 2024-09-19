<template>
  <section class="movie-lists">
    <div class="container d-flex flex-column">
      <h1 class="color-gray500 fs-l mt-l">Самое лучшее КИНО</h1>
      <TransitionGroup
        name="list"
        tag="div"
        class="d-flex flex-wrap-center gap-s mt-l"
      >
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
  title: "Подборка фильмов | Топ самых лучших фильмов Laraptxe.films",
});
const store = useStore();
onMounted(async () => {
  loadFilm.value = true;
  await store.fetchTopFilms(params);
  loadFilm.value = false;
});
let loadFilm = ref(false);
let fetchEnd = ref(false)
const btnShow = computed(()=>{
  if(loadFilm.value) return false
  if(fetchEnd.value) return false
  return true
})
const loadMore = async () => {
  loadFilm.value = true;
  params.page += 1;
  fetchEnd.value =  await store.fetchTopFilms(params);
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
  sortField: ["rating.kp"],
  sortType: ["-1"],
  type: ["movie"],
  genres: {
    name: [],
  },
  year: [],
  rating: {
    kp: ["7-10"],
  },
  countries: {
    name: [],
  },
  typeNumber: [],
  lists: ["top250"],
};
</script>

<style scoped>
.loadMoreBtn {
  align-self: center;
  margin-top: 80px;
}
</style>
