<template>
  <div class="container">
    <h1 class="fs-xxl color-white pt-l pb-xs">Поиск по названию...</h1>
    <input
      class="styled-input"
      type="text"
      v-model.trim="filmName"
      placeholder="Введите название фильма или сериала"
    />
    <section class="foundFilms d-flex flex-wrap justify-center gap-m mt-l">
      <div v-for="film of store.films.docs">
        <filmCard :data="film" />
      </div>
      <p
        v-if="filmName == ''"
        class="color-gray700 fs-xl text-center w-full pt-xxl"
      >
        Чего ждешь?! Давай ищи
      </p>
      <loader v-show="loaderStatus" class="loader" />
      <p
        v-if="filmName !== '' && !store?.films?.docs?.length && !loaderStatus"
        class="color-gray700 fs-xl text-center w-full pt-xxl"
      >
        По запросу {{ filmName }} ничего не найдено =(
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
let loaderStatus: Ref<boolean> = ref(false);

useHead({
  title: "Поиск фильмов и сериалов | Подборка фильмов Laraptxe.films",
});
onUnmounted(() => {
  store.films = [];
});
watch(filmName, async (newVal) => {
  loaderStatus.value = true;

  if (filmName.value !== "") {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(async () => {
      await store.fetchFilmsByName(newVal);
      if (filmName.value == "") store.films = [];
      loaderStatus.value = false;
    }, 2000);
  }
});
</script>
<style scoped>
.foundFilms {
  position: relative;
  min-height: 400px;
}

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
