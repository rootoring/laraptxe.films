<template>
  <div class="d-flex gap-s flex-center-column">
    <BigSlider />
    <div class="container">
      <section>
        <myFilter />

        <TransitionGroup
          name="list"
          tag="div"
          v-if="store?.filterFilm?.docs"
          class="d-flex flex-wrap-center gap-s mt-l"
        >
          <FilmCard
            v-for="film of store?.filterFilm?.docs"
            :data="film"
            :key="film.id"
          />
        </TransitionGroup>
        <h2 class="fs-xl color-gray300 mt-l mb-s">Рекомендуем к просмотру</h2>
        <RecSlider :data="store?.films?.docs?.slice(10)" />
        <h2 class="fs-xl color-gray300 mt-l mb-s">Самое лучшее Аниме</h2>
        <RecSlider :data="store?.anime?.docs" />
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
onMounted(async () => {
  await store.fetchFilms();
  await store.fetchAnime();
});
onUnmounted(() => {
  store.films = [];
});
</script>
<style scoped></style>
