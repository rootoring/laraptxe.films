<template>
  <div class="d-flex gap-s flex-center-column">
    <BigSlider />
    <div class="container">
      <section>
        <myFilter />

        <TransitionGroup
          name="list"
          tag="div"
          v-if="store?.filterFilm"
          class="d-flex flex-wrap-center gap-s mt-l"
        >
          <FilmCard
            v-for="film of store?.filterFilm"
            :data="film"
            :key="film.id"
          />
        </TransitionGroup>
        <h2 class="fs-xl color-gray300 mt-l mb-s">Рекомендуем к просмотру</h2>
        <RecSlider :data="store?.films?.slice(10)" />
        <h2 class="fs-xl color-gray300 mt-l mb-s">Самое лучшее Аниме</h2>
        <RecSlider :data="store?.anime" />
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from "../store/store";

useHead({
  title: "Главная | Подборка фильмов Laraptxe.films",
});

const store = useStore();
onBeforeMount(async () => {
  const token = JSON.parse(localStorage.getItem("user"));
  console.log(token);
  await store.fetchFilms();
  await store.fetchAnime();
});
onUnmounted(() => {
  store.films = [];
});
</script>
<style scoped></style>
