<template>
  <div class="container">
    <iframe
      id="cinemaplayer-iframe"
      frameborder="0"
      allowfullscreen="allowfullscreen"
      webkitallowfullscreen="webkitallowfullscreen"
      mozallowfullscreen="mozallowfullscreen"
      scrolling="no"
      style="
        width: 100%;
        height: 500px;
        border: 0px;
        padding: 0px;
        overflow: hidden;

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
useHead({
  title: `${store?.film?.name} | Смотреть онлайн бесплатно ${store?.film?.name} в хорошем качестве`,
});

const route = useRoute();
onMounted(async () => {
  await store.fetchFilm(route.params.id);
  const adSelectors = [
    'iframe[src*="ads"]',
    'iframe[src*="adservice"]',
    'iframe[src*="ad"]',
    'div[class*="ad"]',
    'div[class*="ads"]',
    'div[class*="banner"]',
    'div[id*="ad"]',
    'div[id*="ads"]',
    'div[id*="banner"]',
    "ins.adsbygoogle",
    'div[id^="google_ads"]',
  ];

  // Проходим по каждому селектору и удаляем найденные элементы
  adSelectors.forEach((selector) => {
    const ads = document.querySelectorAll(selector);
    console.log(ads);
    ads.forEach((ad) => {
      ad.remove();
    });
  });
});
</script>
