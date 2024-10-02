<template>
  <NuxtLink :to="`/name/${data.id}`">
    <div class="actor-card" :style="{ backgroundImage: `url(${imgValid})` }">
      <div class="overlay">
        <div class="actor-info">
          <h2 class="actor-name">{{ data.name }}</h2>
          <p class="actor-role color-gray600" v-if="data.description">
            В роли:<strong class="ml-xxs">{{ data.description }}</strong>
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  data: Object,
});
const imgValid = computed(() => {
  if (
    props.data.photo ===
      "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_131217.jpg" ||
    props.data.photo === ""
  ) {
    return "/logo.jpg";
  }
  return props.data.photo;
});
</script>

<style scoped>
.actor-card {
  position: relative;
  width: 200px;
  height: 300px;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  margin: 20px;
  transition: 0.4s all;
  cursor: pointer;
}

.actor-card:hover {
  transform: translateY(-10px) scale(1.03);
  background-size: 110%;
}

.overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7); /* Полупрозрачный фон для информации */
  padding: 15px;
  text-align: center;
}

.actor-info {
  color: #fff;
}

.actor-name {
  font-size: 18px;
  margin-bottom: 10px;
}

.actor-role,
.actor-profession {
  font-size: 14px;
  margin-bottom: 5px;
}

/* Адаптивные стили для планшетов */
@media (max-width: 768px) {
  .actor-card {
    width: 160px;
    height: 240px;
    margin: 10px;
  }

  .actor-name {
    font-size: 16px;
  }

  .actor-role,
  .actor-profession {
    font-size: 12px;
  }

  .overlay {
    padding: 10px;
  }
}

/* Адаптивные стили для мобильных устройств */
@media (max-width: 480px) {
  .actor-card {
    width: 140px;
    height: 210px;
  }

  .actor-name {
    font-size: 14px;
  }

  .actor-role,
  .actor-profession {
    display: none; /* Скрываем описание и профессию на мобильных устройствах */
  }

  .overlay {
    padding: 8px;
  }
}
</style>
