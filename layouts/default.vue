<template>
  <message />
  <transition name="slide"><mobileMenu v-if="store.menuStatus" /></transition>
  <TheHeader />
  <main>
    <NuxtPage />
  </main>
  <TheFooter />
</template>
<script setup>
import { useStore } from "@/store/store";

const store = useStore();

import { onMounted } from "vue";

onMounted(async () => {
  const user = localStorage.getItem("user");
  store.user = JSON.parse(user);
});
</script>
<style>
main {
  min-height: 100vh;
}
</style>
