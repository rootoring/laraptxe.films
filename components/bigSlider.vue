<template>
  <swiper
    :grabCursor="true"
    :effect="'creative'"
    :creativeEffect="{
      prev: {
        shadow: true,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
    :autoplay="{
      delay: 6500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper3"
    loop
  >
    <swiper-slide v-for="film in store.films.docs"
      ><card :data="film"
    /></swiper-slide>
  </swiper>
</template>
<script setup>
import { useStore } from "../store/store";
const store = useStore();
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-creative";

import {
  EffectCreative,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
const modules = [EffectCreative, Autoplay, Pagination, Navigation];
</script>
<style>
.swiper {
  margin: 0px auto;
  width: 100%;
  height: 700px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}
@media (max-width: 758px) {
  .swiper {
    height: 550px;
  }
}
</style>
