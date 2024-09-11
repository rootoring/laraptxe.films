<template>
    <div>
        <section class="user-info container">
            <p>Name</p>
            <button>Выйти</button>
        </section>
        <section class="user-saveFilms container">
            Сохранённые фильмы:
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
import {onMounted} from "vue"
import btn from "../../components/ui/btn.vue";

useHead({
  title: "Профиль |Сохраненные фильмы, сериалы и аниме Laraptxe.films",
});
const store = useStore();
onMounted(async () => {

  await store.login()
  await store.fetchSavedFilms();

});
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
const params = {
  page: 1,
  limit: 20,
id:['666']
};
</script>