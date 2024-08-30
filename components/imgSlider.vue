<template>
  <swiper
    :breakpoints="{
      '640': {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 5,
      },
    }"
    loop
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="img of data">
      <img :src="img?.previewUrl" alt="" class="slide-img"
    /></swiper-slide>
  </swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const modules = [Pagination, Navigation, Autoplay];

defineProps({
  data: {
    type: Object,
  },
});
</script>
<style scoped>
.swiper {
  height: 350px !important;
  user-select: none;
}
.slide-img {
  display: block;
  width: 100%;
  height: 300px !important;
  object-fit: cover;
  user-select: none;
}
</style>
