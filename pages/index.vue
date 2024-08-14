<template>
  <div class="d-flex gap-s flex-center-column">
    <BigSlider />
    <div class="container">
      <section>
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
import { type taskType } from "../types";
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
