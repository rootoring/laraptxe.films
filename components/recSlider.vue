<template>
  <swiper
    :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '1024': {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    }"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    loop
    class="my-swiper"
  >
    <swiper-slide v-for="item in store?.films?.docs?.slice(10)" :key="item.id">
      <SliderCard :data="item" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { useStore } from "../store/store";
const store = useStore();
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
const modules = [Pagination, Navigation];
</script>

<style>
/* Общий контейнер */
.container {
  width: 100%;
  max-width: 1200px; /* Ограничиваем максимальную ширину контейнера */
  margin: 0 auto;
}

/* Swiper */
.my-swiper {
  width: 100%;
  max-width: 100%; /* Ограничиваем максимальную ширину Swiper */
  height: auto;
}
.swiper-pagination {
  bottom: 0px !important;
}
/* Слайды */
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
}
</style>
