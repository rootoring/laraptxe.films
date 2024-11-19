<template>
  <div class="d-flex flex-center-column">
    <section class="user-info container">
      <div class="mt-l w-full d-flex justify-between">
        <p class="fs-xxl color-gray500">{{ store.user?.username }}</p>
        <span class="hov-text color-gray500" @click="logout"
          ><i class="fas fa-sign-out fs-l"></i
        ></span>
      </div>
    </section>
    <section class="user-saveFilms container d-flex flex-center-column">
      <h2 class="fs-xxl color-gray500 mt-l">Сохранённые фильмы:</h2>
      <TransitionGroup name="list" tag="div" class="film-lists mt-m">
        <FilmCard v-for="film of store?.films" :data="film" :key="film?.id" />
      </TransitionGroup>
      <div class="loadMoreBtn">
        <starWarsLoader v-show="loadFilm" />
        <button v-show="btnShow" @click="loadMore">Загрузить еще</button>
        <p
          v-if="store?.user?.films.length == 0"
          class="noneFilm color-gray700 fs-xl text-center w-full pt-xxl"
        >
          Чё, реально ничего не сохранил? =(<br />
          Я для прикола старался ?!<br />
          Дуй сохронять киношки
        </p>
      </div>
    </section>
  </div>
</template>
<script setup>
import { useStore } from "../../store/store";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const route = useRouter();
useHead({
  title: "Профиль | Сохраненные фильмы, сериалы и аниме Laraptxe.films",
});
const store = useStore();
onMounted(async () => {
  const user = localStorage.getItem("user");
  store.user = JSON.parse(user);
  loadFilm.value = true;
  await store.fetchSavedFilms(page.value);
  loadFilm.value = false;
});
const logout = () => {
  localStorage.removeItem("user");

  route.push("/auth");
};
let loadFilm = ref(false);
let fetchEnd = ref(false);
const btnShow = computed(() => {
  if (loadFilm.value) return false;
  if (fetchEnd.value) return false;
  if (store?.user?.films.length == 0) return false;
  if (store?.user?.films.length == store.films.length) return false;
  return true;
});

let page = ref(1);
const loadMore = async () => {
  loadFilm.value = true;
  page.value += 1;
  fetchEnd.value = await store.fetchSavedFilms(page.value);
  loadFilm.value = false;
};
onUnmounted(() => {
  store.films = [];
});
</script>
<style scoped>
.noneFilm {
  line-height: 32px;
}
.user-saveFilms {
  justify-self: center;
}
.loadMoreBtn {
  align-self: center;
  margin-top: 80px;
}
.film-lists {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(5, 1fr);
}
@media (max-width: 1200px) {
  .film-lists {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 970px) {
  .film-lists {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 768px) {
  .film-lists {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 385px) {
  .film-lists {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
