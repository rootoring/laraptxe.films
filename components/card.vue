<template>
  <div class="card">
    <div
      class="card-img d-flex items-center"
      :style="{
        backgroundImage: `url(  ${
          !data?.backdrop?.url
            ? data?.poster?.url
            : transformImageUrlToOtt(data?.backdrop?.url)
            ? transformImageUrlToOtt(data?.backdrop?.url)
            : 'logo.jpg'
        })`,
      }"
    >
      <div class="movie-info">
        <NuxtLink :to="'film/' + data.id" class="title hov-text">{{
          data.name
        }}</NuxtLink>
        <div class="desc-cont">
          <p class="rating" v-if="!!data.rating.imdb">
            Рейтинг: {{ !!data.rating.imdb ? data.rating.imdb : "-" }}
          </p>
          <p class="description" v-if="!!data.shortDescription">
            {{ data.shortDescription }}
          </p>
          <p class="genre" v-if="!!data.genres">
            Жанр:
            <span class="genres pl-xxs" v-for="(i, index) of data.genres"
              >{{ i.name
              }}<span v-if="data.genres.length !== index + 1">, </span>
            </span>
          </p>
          <p class="year" v-if="!!data.year">Год выпуска: {{ data.year }}</p>
        </div>
        <div class="mob-cont d-flex justify-around w-full">
          <p class="rating" v-if="!!data.rating.kp">
            {{ !!data.rating.kp ? data.rating.kp.toFixed(1) : "-" }}
          </p>

          <p class="genre" v-if="!!data.genres">
            <span class="genres">{{ data?.genres[0]?.name }} </span>
          </p>
          <p class="year" v-if="!!data.year">{{ data.year }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
function transformImageUrlToOtt(origUrl) {
  // Используем регулярное выражение для извлечения идентификатора и хэша изображения
  const regex = /\/(\d+)\/([a-f0-9\-]+)\/orig$/;
  const match = origUrl.match(regex);
  if (!match) return props.data?.poster?.url ? props.data?.poster?.url : false;

  const [, imageId, imageHash] = match;

  // Формируем новый URL с указанным размером
  const newUrl = `https://avatars.mds.yandex.net/get-ott/${imageId}/${imageHash}/2016x1134`;
  return newUrl;
}

const props = defineProps({
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
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-family: "Lato", sans-serif;

  .mob-cont {
    display: none;
  }
}

.title {
  font-size: 2em;
  line-height: 47px;
  padding-bottom: 5px;
  cursor: pointer;
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
.rating {
  margin-top: 18px;
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
    padding: 14px;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 1.2em;
    }
    .rating,
    .description,
    .genre,
    .year {
      margin: 7px 0;
      height: 25px;
      font-size: 0.7em;
    }
    .desc-cont {
      display: none;
    }
    .mob-cont {
      display: flex;
    }
  }
}
</style>
