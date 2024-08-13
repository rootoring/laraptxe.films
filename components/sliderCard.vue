<template>
  <NuxtLink :to="'film/' + data.id">
    <div
      class="movie-card"
      :style="{
        backgroundImage: `url(${
          data?.poster?.url ? transformImageUrl(data?.poster?.url) : 'logo.jpg'
        })`,
      }"
    >
      <div class="movie-info glass">
        <h2 class="title">{{ data?.name }}</h2>
        <div class="details">
          <span class="year">{{ data?.year }}</span>
          <!-- <span class="country">{{ data?.countries[0]?.name }}</span> -->
          <span class="genre">{{ data?.rating?.imdb }}</span>
        </div>
      </div>
    </div></NuxtLink
  >
</template>

<script setup>
import { reactive, toRefs } from "vue";
function transformImageUrl(origUrl, size) {
  // Используем регулярное выражение для извлечения идентификатора и хэша изображения
  const regex = /\/(\d+)\/([a-f0-9\-]+)\/orig$/;
  const match = origUrl.match(regex);

  if (!match) {
    throw new Error("URL не соответствует ожидаемому формату");
  }

  const imageId = match[1];
  const imageHash = match[2];

  // Формируем новый URL с указанным размером
  const newUrl = `https://avatars.mds.yandex.net/get-kinopoisk-image/${imageId}/${imageHash}/150x225`;
  return newUrl;
}

defineProps({
  data: Object,
});
</script>

<style scoped lang="scss">
.movie-card {
  cursor: pointer;
  background-color: #1a1a1a; /* Тёмный фон */
  border-radius: 10px; /* Скруглённые углы */
  overflow: hidden; /* Скрыть выступающие элементы */
  width: 200px; /* Ширина карточки */
  text-align: center; /* Центрирование текста */
  font-family: "Ubuntu";
  color: #fff; /* Белый текст */
  margin: 20px; /* Отступы */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Тень */
  height: 300px;
  position: relative;
  transition: 0.4s all;
  background-size: 110%;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    background-size: 120%;
  }
}

.poster {
  width: 100%; /* Ширина изображения по размеру карточки */
  height: auto; /* Автоматическая высота */
}

.movie-info {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5));
  padding: 10px; /* Внутренние отступы */
  position: absolute;
  bottom: 0;
  width: 100%;
}

.title {
  font-size: 20px; /* Размер шрифта заголовка */
  margin: 10px 0; /* Отступы */
}

.details {
  display: flex; /* Flexbox для деталей */
  justify-content: space-between; /* Распределение по краям */
  font-size: 13px; /* Размер шрифта деталей */
}

.details span {
  margin: 0 5px; /* Отступы между деталями */
}
</style>
