<template>
  <div class="d-flex gap-s">
    <BigSlider />
  </div>
</template>
<script setup lang="ts">
import { useStore } from "../store/store";
import { type taskType } from "../types";
useHead({
  title:
    "Главная | Подборка фильмов Laraptxe.films",

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
