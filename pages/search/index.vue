<template>
  <div class="container">
    <input type="text" v-model.trim="filmName" />
    <section class="foundFilms">
      <div v-for="film of store.films.docs">
        <NuxtLink :to="'film/' + film.id"><filmCard :data="film" /></NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted, type Ref } from "vue";
import { useStore } from "../../store/store";
import filmCard from "../../components/filmCard.vue";
const store = useStore();
let filmName: Ref<string> = ref("");
let debounceTimeout: ReturnType<typeof setTimeout> | null = null;
onUnmounted(() => {
  store.films = [];
});
watch(filmName, async (newVal) => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(async () => {
    await store.fetchFilmsByName(newVal);
  }, 600);
});
</script>
