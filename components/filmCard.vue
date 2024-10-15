<template>
  <NuxtLink :to="'/film/' + data.id">
    <div
      class="movie-card"
      :style="{
        backgroundImage: `url(${
          data?.poster?.url ? transformImageUrl(data?.poster?.url) : 'logo.jpg'
        })`,
      }"
    >
      <div class="saveFilm fs-l color-primary" @click="addfilm($event)">
        <i :class="haveFilm ? 'fas' : 'far'" class="fa fa-bookmark"></i>
      </div>
      <div class="rating-indicator" v-if="data?.rating?.kp">
        <div
          class="rating-circle"
          :style="{ borderColor: ratingColor(data?.rating?.kp) }"
        >
          <span>{{ data?.rating?.kp?.toFixed(1) }}</span>
        </div>
      </div>
      <div class="movie-info glass">
        <div class="info-cont">
          <h2 class="title">{{ data?.name }}</h2>
          <div class="details">
            <span class="year">{{ data?.year }}</span>
            <span
              v-if="data?.countries?.length && data?.countries[0]?.name"
              class="country"
            >
              {{ data?.countries[0]?.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import { useStore } from "../store/store";
const store = useStore();

const haveFilm = computed(() => {
  return store?.user?.films.indexOf(JSON.stringify(props.data?.id)) !== -1;
});
const addfilm = async (e) => {
  e.preventDefault();
  if (haveFilm.value) {
    return await store.delFilm(props.data?.id);
  }
  await store.saveFilm(props.data?.id);
};
function transformImageUrl(origUrl) {
  const regex = /\/(\d+)\/([a-f0-9\-]+)\/orig$/;
  const match = origUrl.match(regex);

  if (!match) return false;

  const [, imageId, imageHash] = match;

  return `https://avatars.mds.yandex.net/get-kinopoisk-image/${imageId}/${imageHash}/150x225`;
}

// Вычисляемое свойство для цвета рейтинга
const ratingColor = (rating) => {
  if (rating >= 7) {
    return "#4caf50"; // Зеленый для рейтинга 7 и выше
  } else if (rating >= 5) {
    return "#ffeb3b"; // Желтый для рейтинга от 5 до 7
  } else {
    return "#f44336"; // Красный для рейтинга ниже 5
  }
};

const props = defineProps({
  data: {
    type: Object,
    default: {
      id: "0",
      name: "Без названия",
      year: "2000",
      poster: {
        url: "",
      },
      rating: {
        kp: "-",
      },
      countries: [
        {
          name: "Неизвестно",
        },
      ],
    },
  },
});
</script>

<style scoped lang="scss">
.movie-card {
  cursor: pointer;
  background-color: #1a1a1a;
  border-radius: 20px;
  overflow: hidden;
  width: 200px;
  height: 290px;
  text-align: center;
  font-family: "Ubuntu";
  color: #fff;
  margin: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  position: relative;
  background-size: 105%;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.4s all;
  backdrop-filter: blur(5px);

  &:hover {
    transform: translateY(-10px);
    background-size: 110%;
    box-shadow: 0 18px 26px rgba(0, 0, 0, 0.4);
  }
  &:hover .saveFilm {
    left: 10px !important;
  }
  &:hover .movie-info {
    transition: all, 0.3s;
    height: 100%;
  }

  &:hover .title {
    white-space: normal; /* Убираем nowrap для показа всего текста */
    overflow: visible; /* Разрешаем тексту "вылезать" */
    padding-bottom: 0;
  }
}
.saveFilm {
  position: absolute;
  top: 10px;
  left: -40px;
  border-radius: 6px;
  padding: 3px 3px 3px 4px;
  transition: 0.4s all;
  z-index: 999;

  &:hover {
    transform: scale(1.2);
  }
}
.movie-info {
  background: rgba(0, 0, 0, 0.7); /* Затемнение блока */
  border-radius: 10px;
  padding: 15px;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 35%;
  transition: 0.6s all;
  display: flex;
}
.info-cont {
  transition: all 0.6s;
  width: 100%;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

.title {
  width: 100%;
  font-size: 18px;
  margin: 10px 0;
  white-space: nowrap; /* Обрезаем текст в одну строку */
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 40px;
  transition: all 0.3s;
}

.details {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  opacity: 0.9;
  position: absolute;
  bottom: 3px;
  width: 100%;
}

.rating-indicator {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  padding: 5px;
  z-index: 999;
}

.rating-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid #fff; /* Цвет по умолчанию */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
}

@media (max-width: 768px) {
  .movie-card {
    width: 160px;
    height: 240px;
    margin: 10px;
  }
  .title {
    font-size: 16px;
  }
  .rating-circle {
    width: 30px;
    height: 30px;
  }
  .saveFilm {
    left: 10px !important;
  }
}
</style>
