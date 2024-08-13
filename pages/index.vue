<template>
  <div class="d-flex gap-s flex-center-column">
    <BigSlider />
    <div class="container">
      <section>
        <h2 class="fs-xl color-gray300 mt-l mb-s">Рекомендуем к просмотру</h2>
        <RecSlider />
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
onMounted(() => {
  store.fetchFilms();
});
onUnmounted(() => {
  store.films = [];
});
</script>
<style scoped></style>
