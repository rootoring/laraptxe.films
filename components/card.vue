<template>
  <div class="card d-flex flex-center-column">
    <div
      class="card-img d-flex items-center"
      :style="{
        backgroundImage: `url(  ${
          data?.backdrop?.url
            ? transformImageUrlToOtt(data?.backdrop?.url)
            : 'logo.jpg'
        })`,
      }"
    >
      <div class="movie-info">
        <NuxtLink :to="'film/' + data.id" class="title hov-text">{{
          data.name
        }}</NuxtLink>
        <p class="rating">Рейтинг: {{ data.rating.imdb }}</p>
        <p class="description">{{ data.shortDescription }}</p>
        <p class="genre">
          Жанр:
          <span class="genres pl-xxs" v-for="(i, index) of data.genres"
            >{{ i.name }}<span v-if="data.genres.length !== index + 1">, </span>
          </span>
        </p>
        <p class="year">Год выпуска: {{ data.year }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
function transformImageUrlToOtt(origUrl) {
  // Используем регулярное выражение для извлечения идентификатора и хэша изображения
  const regex = /\/(\d+)\/([a-f0-9\-]+)\/orig$/;
  const match = origUrl.match(regex);

  if (!match) {
    throw new Error("URL не соответствует ожидаемому формату");
  }

  const imageId = match[1];
  const imageHash = match[2];

  // Формируем новый URL с указанным размером
  const newUrl = `https://avatars.mds.yandex.net/get-ott/${imageId}/${imageHash}/2016x1134`;
  return newUrl;
}

defineProps({
  data: Object,
});
</script>
<style lang="scss" scoped>
.movie-info {
  position: absolute;
  bottom: 10%;
  left: 5%;
 
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5));
  backdrop-filter: blur(10px);
  color: #fff;
  padding: 20px;
  width: 40%;
  border-radius: 20px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-family: "Lato", sans-serif;
}

.title {
  font-size: 2em;
  margin-bottom: 10px;
  cursor: pointer;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}
.genres {
  display: inline-block;
}
.genres::first-letter {
  text-transform: uppercase;
}
.rating,
.description,
.genre,
.year {
  margin: 5px 0;
  height: 25px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.swiper-pagination-bullet-active {
  background: rgb(145, 47, 202) !important;
}
.card {
  height: 100%;
  width: 100%;
  .card-img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
@media (max-width: 758px) {
  .movie-info {
    width: 100%;
    top: auto;
    bottom: 0px;
    transform: translateY(0);
    left: 0;
    padding:14px;
    border-radius: 0;
    .title {
      font-size: 1.2em;
    }
    .rating,
    .description,
    .genre,
    .year {
      margin: 7px 0;
      height: 25px;
      font-size: .7em;
    }
  }
}
</style>
