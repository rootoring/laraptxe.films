<template>
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
</script>
