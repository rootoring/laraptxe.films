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
    <section class="user-saveFilms container d-flex flex-center-column ">
      <h2 class="fs-xxl color-gray500 mt-l">Сохранённые фильмы:</h2>
      <TransitionGroup
        name="list"
        tag="div"
        class="d-flex flex-wrap gap-s mt-l film-lists"
      >
        <FilmCard v-for="film of store?.films" :data="film" :key="film?.id" />
      </TransitionGroup>
      <div class="loadMoreBtn">
        <starWarsLoader v-show="loadFilm" />
        <button v-show="btnShow" @click="loadMore">Загрузить еще</button>
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
  title: "Профиль |Сохраненные фильмы, сериалы и аниме Laraptxe.films",
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
let fetchEnd = ref(false)
const btnShow = computed(()=>{
  if(loadFilm.value) return false
  if(fetchEnd.value) return false
  return true
})

let page = ref(1)
const loadMore = async () => {
  loadFilm.value = true;
  page.value += 1;
  fetchEnd.value =  await store.fetchSavedFilms(page.value)
  loadFilm.value = false;
};
onUnmounted(() => {
  store.films = [];
});
</script>
<style scoped>
.user-saveFilms{
  justify-self: center;
}
.loadMoreBtn {
  align-self: center;
  margin-top: 80px;
}
@media (max-width: 782px){
  .film-lists{
    justify-content: center !important;
  }
}
</style>
