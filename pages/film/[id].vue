<template>
  <div>
    <div class="container">
      <div class="film-info mt-l mb-m d-flex items-center">
        <div class="saveFilm fs-l color-primary" @click="addfilm">
          <i :class="haveFilm ? 'fas' : 'far'" class="fa-bookmark"></i>
        </div>
        <div class="info-left pr-s">
          <img
            :src="
              !!store?.film?.poster?.url
                ? transformImageUrl(store?.film?.poster?.url)
                : 'logo.jpg'
            "
            :alt="'Постер фильма/сериала' + store.film.name"
            class="film-poster"
          />
        </div>
        <div class="info-right d-flex flex-column gap-xs">
          <h1 class="film-title">{{ store.film.name }}</h1>
          <p class="film-alternative-name">
            Альтернативное название: {{ store?.film?.alternativeName }}
          </p>
          <p class="film-year">Год: {{ store?.film?.year }}</p>
          <p class="film-rating">
            Рейтинг: {{ store?.film?.rating?.kp.toFixed(1) }}
          </p>
          <p class="film-age-rating">
            Возрастной рейтинг: {{ store?.film?.ageRating }}+
          </p>
          <p class="film-slogan" v-if="store?.film?.slogan">
            Слоган: "{{ store?.film?.slogan }}"
          </p>
          <p class="film-description">{{ store?.film?.description }}</p>
          <p class="film-genre">
            Жанр:
            <span class="genres" v-for="(i, index) of store?.film?.genres">
              {{ i.name
              }}<span
                class="mx-xxs"
                v-if="store?.film?.genres.length !== index + 1"
              >
                <i class="far fa-dot-circle fs-xs color-primary"></i>
              </span>
            </span>
          </p>
          <p class="film-countries">
            Страны:
            <span
              class="countries"
              v-for="(i, index) of store?.film?.countries"
            >
              {{ i.name
              }}<span
                class="mr-xxs"
                v-if="store?.film?.countries.length !== index + 1"
                >,
              </span>
            </span>
          </p>
        </div>
      </div>
      <section>
        <p class="fs-xl color-gray500">Плеер 1</p>
        <iframe
          id="cinemaplayer-iframe"
          frameborder="0"
          scrolling="no"
          class="film-iframe"
          allowfullscreen="allowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          :src="'https://toembed.com/iframe/' + route.params.id"
        ></iframe>
      </section>
      <section>
        <p class="fs-xl color-gray500 mt-m">Плеер 2</p>
        <div class="kinobox_player film-iframe"></div>
      </section>
    </div>
    <section>
      <div class="container">
        <p class="fs-xl color-gray500 mt-m">Актеры</p>

        <ActorsSlider :data="actors" />
      </div>
    </section>
    <div v-if="store?.filmImg?.docs?.length" class="mt-l">
      <div class="container">
        <h2 class="fs-xl color-gray300 mb-s">Фото</h2>
      </div>

      <ImgSlider :data="store?.filmImg?.docs" />
    </div>
    <div v-if="store?.film?.similarMovies?.length" class="bg-gray900 py-m mt-m">
      <div class="container">
        <h2 class="fs-xl color-gray300 mb-s">Похожее</h2>
        <RecSlider :data="store?.film?.similarMovies" />
      </div>
    </div>
    <div class="container">
      <h2 class="fs-xl color-gray300 mt-l mb-s">Рекомендуем к просмотру</h2>
      <RecSlider :data="store?.films?.docs?.slice(10)" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "../store/store";
import { useRoute } from "vue-router";

const store = useStore();

const route = useRoute();

const haveFilm = computed(() => {
  return store?.user?.films.indexOf(route.params.id) !== -1;
});
const actors = computed(() => {
  if (store?.film?.persons) {
    return store?.film?.persons.filter((p) => p.enProfession === "actor");
  }
});
const addfilm = async () => {
  if (haveFilm.value) {
    return await store.delFilm(route.params.id);
  }
  await store.saveFilm(route.params.id);
};
onMounted(async () => {
  await store.fetchImg(route.params.id);
  await kbox(".kinobox_player", {
    search: {
      kinopoisk: route.params.id,
    },
  });
  if (!store.films.docs) await store.fetchFilms();
});
let ssrFetch = async () => {
  await store.fetchFilm(route.params.id);
};
ssrFetch();
function transformImageUrl(origUrl) {
  const regex = /\/(\d+)\/([a-f0-9\-]+)\/orig$/;
  const match = origUrl.match(regex);

  if (!match) {
    throw new Error("URL не соответствует ожидаемому формату");
  }

  const imageId = match[1];
  const imageHash = match[2];

  const newUrl = `https://avatars.mds.yandex.net/get-kinopoisk-image/${imageId}/${imageHash}/150x225`;
  return newUrl;
}
watchEffect(() => {
  useHead({
    title: `${store?.film?.name || ""} | Смотреть онлайн бесплатно ${
      store?.film?.name || ""
    } в хорошем качестве`,
    meta: [{ name: "description", content: store?.film?.description }],
  });
});

onUnmounted(() => {
  store.films = [];
  store.film = {};
  store.filmImg = {};
});
</script>
<style scoped>
.saveFilm {
  position: absolute;
  right: 35px;
  cursor: pointer;
}
.film-info {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  background-color: #333333;
  border-radius: 8px;
}

.film-poster {
  max-width: 150px;
  border-radius: 8px;
}

.info-right {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.film-title {
  font-size: 2rem;
  color: rgb(145, 47, 202);
}

.film-alternative-name,
.film-year,
.film-rating,
.film-age-rating,
.film-slogan,
.film-description,
.film-genre,
.film-countries {
  font-size: 1rem;
  color: #b0b0b0;
}

.genres,
.countries {
  display: inline-block;
  text-transform: capitalize;
}

.film-iframe {
  width: 100%;
  height: 500px;
  border: none;
  margin-top: 20px;
  border-radius: 8px;
  background: rgb(0, 0, 0);
}

.backdrop-container {
  margin-top: 20px;
}

.backdrop-image {
  width: 100%;
  border-radius: 8px;
}

/* Адаптивный дизайн для мобильных устройств */
@media (max-width: 768px) {
  .film-info {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .film-poster {
    max-width: 300px;
  }

  .film-title {
    font-size: 1.5rem;
  }
  .film-iframe {
    height: 350px !important;
  }
}
@media (max-width: 550px) {
  .film-iframe {
    height: 250px !important;
  }
}
</style>
