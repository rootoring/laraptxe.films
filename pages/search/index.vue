<template>
  <div class="container">
    <h1 class="fs-xxl color-white py-l">Поиск по названию...</h1>
    <input
      class="styled-input"
      type="text"
      v-model.trim="filmName"
      placeholder="Введите название фильма или сериала"
    />
    <section class="foundFilms d-flex flex-wrap justify-center">
      <div v-for="film of store.films.docs">
        <NuxtLink :to="'film/' + film.id"><filmCard :data="film" /></NuxtLink>
      </div>
      <p
        v-if="filmName == ''"
        class="color-gray700 fs-xl text-center w-full pt-xxl"
      >
        Чего ждешь?! Давай ищи
      </p>
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
  if (newVal == "") return (store.films = []);
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(async () => {
    await store.fetchFilmsByName(newVal);
  }, 2000);
});
</script>
<style>
.styled-input {
  width: 100%;
  padding: 10px 15px;

  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  color: #333;
  transition: border-color 0.3s ease;
}

.styled-input:focus {
  border-color: #66afe9;
  outline: none;
  background-color: #fff;
}

/* Удаление стрелок для input type="number" */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
