<template>
  <div>
    <section class="user-info container">
      <div class="mt-l w-full d-flex justify-between">
        <p class="fs-xxl color-gray500">{{ store.user?.username }}</p>
        <span class="hov-text color-gray500" @click="logout"
          ><i class="fas fa-sign-out fs-l"></i
        ></span>
      </div>
    </section>
    <section class="user-saveFilms container">
      <h2 class="fs-xxl color-gray500 mt-l">Сохранённые фильмы:</h2>
      <TransitionGroup
        name="list"
        tag="div"
        class="d-flex flex-wrap-center gap-s mt-l"
      >
        <FilmCard v-for="film of store?.films" :data="film" :key="film?.id" />
      </TransitionGroup>
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
  await store.fetchSavedFilms();
});
const logout = () => {
  localStorage.removeItem("user");

  route.push("/auth");
};
let loadFilm = ref(false);
// const loadMore = async () => {
//   loadFilm.value = true;
//   params.page += 1;
//   await store.fetchTopFilms(params);
//   loadFilm.value = false;
// };
onUnmounted(() => {
  store.films = [];
});
</script>
