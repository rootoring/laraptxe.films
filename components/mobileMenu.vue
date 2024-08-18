<template>
  <div
    class="w-full h-full p-fixed mobil-menu d-flex justify-end"
    @click="store.menuStatus = false"
  >
    <div
      class="py-s px-m w-8 bg-primary"
      @click.prevent="$event.stopPropagation()"
    >
      <button class="fs-l color-black" @click="store.menuStatus = false">
        <i class="fab fa-x"></i>
      </button>
      <nav class="d-flex items-center h-full justify-center">
        <ul class="d-flex gap-l flex-center-column">
          <li class="d-flex items-center nav-list hov-text">
            <NuxtLink
              to="/"
              class="font-ubuntu color-black fs-l d-flex items-center"
              >Фильмы</NuxtLink
            >
          </li>
          <li class="d-flex items-center nav-list hov-text">
            <NuxtLink
              to="/"
              class="font-ubuntu color-black fs-l d-flex items-center"
              >Сериалы</NuxtLink
            >
          </li>
          <li class="d-flex items-center nav-list hov-text">
            <NuxtLink
              to="/"
              class="font-ubuntu color-black fs-l d-flex items-center"
              >Аниме</NuxtLink
            >
          </li>
          <li class="d-flex items-center nav-list hov-text">
            <NuxtLink
              to="/"
              class="font-ubuntu color-black fs-l d-flex items-center"
              >Контакты</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "@/store/store";

const store = useStore();
</script>
<style scoped>
.mobil-menu {
  z-index: 777777777777;
}
.nav-list {
  letter-spacing: 5px;
}
@media (max-width: 758px) {
  nav {
    display: flex !important;
  }
}
</style>
