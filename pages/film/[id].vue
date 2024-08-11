<template>
  <div>
    <iframe
      id="cinemaplayer-iframe"
      frameborder="0"
      allowfullscreen="allowfullscreen"
      webkitallowfullscreen="webkitallowfullscreen"
      mozallowfullscreen="mozallowfullscreen"
      scrolling="no"
      style="
        width: 500px;
        height: 300px;
        border: 0px;
        padding: 0px;
        overflow: hidden;
        position: relative;
        background: rgb(0, 0, 0);
      "
      width="1920"
      height="967"
      :src="'https://toembed.com/iframe/' + route.params.id"
    ></iframe>
  </div>
</template>
<script setup>
import { useStore } from "../store/store";
import { useRoute } from "vue-router";
const store = useStore();

const route = useRoute();
onMounted(async () => {
  await store.fetchFilm(route.params.id);
});
</script>
