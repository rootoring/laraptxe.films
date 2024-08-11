<template>
  <header class="py-xs">
    <div class="container d-flex justify-between">
      <NuxtLink to="/" class="font-beer color-gray100 logo hov-text"
        >Laraptxe<span class="logo-sub color-primary">.films</span></NuxtLink
      >
      <nav class="d-flex items-center">
        <ul class="d-flex gap-s nav-lists">
          <li class="d-flex items-center nav-list hov-text">
            <NuxtLink
              to="/"
              class="font-ubuntu color-gray100 fs-m d-flex items-center"
              >Фильмы</NuxtLink
            >
          </li>
          <li class="d-flex items-center nav-list hov-text">
            <NuxtLink
              to="/"
              class="font-ubuntu color-gray100 fs-m d-flex items-center"
              >Сериалы</NuxtLink
            >
          </li>
          <li class="d-flex items-center nav-list hov-text">
            <NuxtLink
              to="/"
              class="font-ubuntu color-gray100 fs-m d-flex items-center"
              >Аниме</NuxtLink
            >
          </li>
          <li class="d-flex items-center nav-list hov-text">
            <NuxtLink
              to="/"
              class="font-ubuntu color-gray100 fs-m d-flex items-center"
              >Конткты</NuxtLink
            >
          </li>
        </ul>
      </nav>
      <NuxtLink to="/search" class="d-flex items-center hov-text"
        ><img class="search" src="../assets/svg/search.svg" alt=""
      /></NuxtLink>
    </div>
  </header>
</template>
<style lang="scss">
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
@media (max-width: 758px) {
  nav {
    display: none !important;
  }
}
</style>
