<template>
  <header class="py-xs">
    <div class="container d-flex justify-between">
      <NuxtLink to="/" class="font-beer color-gray100 logo hov-text"
        >Laraptxe<span class="logo-sub color-primary">.films</span></NuxtLink
      >
      <nav class="d-flex items-center">
        <ul class="d-flex gap-s nav-lists">
          <!-- <li class="d-flex items-center nav-list hov-text">
            <NuxtLink
              to="/happyNewYear"
              class="font-ubuntu color-gray100 fs-m d-flex items-center"
              >Новогодняя подпорка</NuxtLink
            >
          </li> -->
          <li class="d-flex items-center nav-list hov-text">
            <NuxtLink
              to="/new"
              class="font-ubuntu color-gray100 fs-m d-flex items-center"
              >Новинки</NuxtLink
            >
          </li>
          <li class="d-flex items-center nav-list hov-text">
            <NuxtLink
              to="/films"
              class="font-ubuntu color-gray100 fs-m d-flex items-center"
              >Фильмы</NuxtLink
            >
          </li>
          <li class="d-flex items-center nav-list hov-text">
            <NuxtLink
              to="/serials"
              class="font-ubuntu color-gray100 fs-m d-flex items-center"
              >Сериалы</NuxtLink
            >
          </li>
          <li class="d-flex items-center nav-list hov-text">
            <NuxtLink
              to="/anime"
              class="font-ubuntu color-gray100 fs-m d-flex items-center"
              >Аниме</NuxtLink
            >
          </li>
          <!-- <li class="d-flex items-center nav-list hov-text">
            <NuxtLink
              to="/happyNewYear"
              class="font-ubuntu color-gray100 fs-m d-flex items-center"
              >Контакты</NuxtLink
            >
          </li> -->
        </ul>
      </nav>
      <div class="d-flex gap-s items-center">
        <NuxtLink to="/search" class="d-flex items-center hov-text"
          ><img class="search" src="../assets/svg/search.svg" alt=""
        /></NuxtLink>
        <NuxtLink to="/profile" class="fs-xl color-gray500 hov-text">
          <i class="fas fa-user"></i>
        </NuxtLink>
        <button
          @click="store.menuStatus = true"
          class="fs-xl color-primary mobil-close"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  </header>
</template>
<script setup>
import { useStore } from "@/store/store";

const store = useStore();
</script>

<style lang="scss">
.fa-sign-out-alt {
  font-weight: 600;
  cursor: pointer;
}
header {
  position: sticky;
  top: 0;
  z-index: 8888;
  background-color: #212121;
  box-shadow: #1a1616 0px 1px 4px;
}
.logo {
  font-size: 35px;
  letter-spacing: 2px;
  .logo-sub {
    font-size: 17px;

    font-family: "Raleway";

    font-weight: 600 !important;
  }
}

.search {
  width: 25px;
}
.mobil-close {
  display: none;
}
@media (max-width: 758px) {
  nav {
    display: none !important;
  }
  .mobil-close {
    display: flex;
    border-color: transparent;
  }
}
</style>
