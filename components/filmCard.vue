<template>
  <div
    class="movie-card"
    :style="{ backgroundImage: `url(${data?.poster?.url})` }"
  >
    <div class="movie-info glass">
      <h2 class="title">{{ data?.name }}</h2>
      <div class="details">
        <span class="year">{{ data?.year }}</span>
        <!-- <span class="country">{{ data?.countries[0]?.name }}</span> -->
        <span class="genre">{{ data?.rating?.imdb }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, toRefs } from "vue";

// Пример данных о фильме
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
  background-size: 100%;
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
  padding: 10px; /* Внутренние отступы */
  position: absolute;
  bottom: 0;
  width: 100%;
}

.title {
  font-size: 1.2em; /* Размер шрифта заголовка */
  margin: 10px 0 5px; /* Отступы */
}

.details {
  display: flex; /* Flexbox для деталей */
  justify-content: space-between; /* Распределение по краям */
  font-size: 0.9em; /* Размер шрифта деталей */
}

.details span {
  margin: 0 5px; /* Отступы между деталями */
}
</style>
