<template>
  <section class="movie-lists">
    <div class="container d-flex flex-column">
      <h1 class="color-gray500 fs-l mt-l">Лучшее АНИМЕ</h1>
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

<script setup lang="ts">
import { useStore } from "../store/store";
import btn from "../../components/ui/btn.vue";
import type { ParamsType } from "@/types/index";

useHead({
  title: "Подборка фильмов | Топ самых лучших фильмов Laraptxe.films",
});
const store = useStore();
onMounted(async () => {
  loadFilm.value = true;
  await store.fetchTopFilms(params);
  loadFilm.value = false;
});
let loadFilm = ref<boolean>(false);
let fetchEnd = ref<boolean>(false);
const btnShow = computed(() => {
  return fetchEnd.value || loadFilm.value ? false : true;
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
const params: ParamsType = {
  page: 1,
  limit: 20,
  selectFields: [],
  notNullFields: ["name", "year", "rating.kp"],
  sortField: ["rating.kp"],
  sortType: ["-1"],
  type: ["anime"],
  genres: {
    name: [],
  },
  year: [],
  rating: {
    kp: [],
  },
  countries: {
    name: [],
  },

  lists: [],
};
</script>

<style scoped>
.loadMoreBtn {
  align-self: center;
  margin-top: 80px;
}
</style>
