<template>
  <div class="container d-flex gap-s filter-cont m-l">
    <mySelect v-model="filmGeneres" :data="filmGenres">Жанр</mySelect>
    <mySelect v-model="countryFilm" :data="country">Страна</mySelect>
    <mySelect v-model="filmTypeChange" :data="filmType">Тип</mySelect>
    <!-- <div class="form-group">
      <label class="color-gray400" for="page">Год от:</label>
      <input
        class="form-control"
        type="number"
        v-model="filmYear.min"
        min="1920"
        :max="filmYear.max"
      />
    </div>
    <div class="form-group">
      <label class="color-gray400" for="page">Год до:</label>
      <input
        class="form-control"
        type="number"
        v-model="filmYear.max"
        :min="filmYear.min"
        max="2024"
      />
    </div> -->
    <div class="form-group">
      <label class="color-gray400" for="page">Рейтинг:</label>
      <input
        class="form-control"
        type="number"
        min="0"
        max="10"
        v-model="filmRaiting"
      />
    </div>
    <div class="d-flex gap-s">
      <btn class="btn" @click="find">Поиск</btn>
      <btn class="btn" @click="random">
        <i class="fas fa-random"></i> Случайный фильм</btn
      >
    </div>
  </div>
  <starWarsLoader v-show="loadFilm" />
</template>
<script setup>
import mySelect from "../components/ui/mySelect.vue";
import btn from "../components/ui/btn.vue";
import myInput from "../components/ui/myInput.vue";
import { useStore } from "../store/store";
import { useRouter } from "vue-router";

const route = useRouter();
const store = useStore();

let filmGeneres = ref("");
watch(filmGeneres, (a) => {
  a === "" ? (params.genres.name = []) : (params.genres.name = [a]);
});
let filmTypeChange = ref("");
watch(filmTypeChange, (a) => {
  a === "" ? (params.type = []) : (params.type = [a]);
});
let countryFilm = ref("");
watch(countryFilm, (a) => {
  a === "" ? (params.countries.name = []) : (params.countries.name = [a]);
});
let filmRaiting = ref(7);
watch(filmRaiting, (a) => {
  a === "" ? (params.rating.kp = ["7-10"]) : (params.rating.kp = [`${a}-10`]);
});

const find = async () => {
  loadFilm.value = true;
  await store.fetchFilter(params);
  loadFilm.value = false;
};
const random = async () => {
  let a = await store.fetchRandom(params);

  route.push(`/film/${a.id}`);
};
let loadFilm = ref(false);
const params = {
  page: 1,
  limit: 100,
  selectFields: [],
  notNullFields: ["name", "year", "rating.kp"],
  sortField: ["rating.kp"],
  sortType: ["-1"],
  type: [],
  genres: {
    name: [],
  },
  year: [],
  rating: {
    kp: ["7-10"],
  },
  countries: {
    name: [],
  },
  typeNumber: [],
  lists: ["top250"],
};
const filmGenres = [
  {
    name: "",
    slug: "",
  },

  {
    name: "биография",
    slug: "На реальных событиях",
  },
  {
    name: "боевик",
    slug: "Боевик",
  },
  {
    name: "вестерн",
    slug: "Вестерн",
  },
  {
    name: "военный",
    slug: "Военный",
  },
  {
    name: "детектив",
    slug: "Детектив",
  },
  {
    name: "детский",
    slug: "Детский",
  },

  {
    name: "документальный",
    slug: "Документальный",
  },
  {
    name: "драма",
    slug: "Драма",
  },

  {
    name: "комедия",
    slug: "Комедия",
  },

  {
    name: "короткометражка",
    slug: "Короткометражка",
  },
  {
    name: "криминал",
    slug: "Криминал",
  },
  {
    name: "мелодрама",
    slug: "Мелодрама",
  },

  {
    name: "приключения",
    slug: "Приключения",
  },

  {
    name: "спорт",
    slug: "Спорт",
  },

  {
    name: "триллер",
    slug: "Триллер",
  },
  {
    name: "ужасы",
    slug: "Ужасы",
  },
  {
    name: "фантастика",
    slug: "Фантастика",
  },

  {
    name: "фэнтези",
    slug: "Фэнтези",
  },
];
const country = [
  {
    name: "",
    slug: "",
  },
  {
    name: "Турция",
    slug: "Турция",
  },
  {
    name: "Индия",
    slug: "Индия",
  },
  {
    name: "Россия",
    slug: "Россия",
  },
  {
    name: "США",
    slug: "США",
  },
  {
    name: "Франция",
    slug: "Франция",
  },
  {
    name: "Южная Корея",
    slug: "Южная Корея",
  },
  {
    name: "Япония",
    slug: "Япония",
  },
];
const filmType = [
  {
    name: "",
    slug: "",
  },
  {
    name: "movie",
    slug: "Кино",
  },
  {
    name: "tv-series",
    slug: "Сериал",
  },
  {
    name: "anime",
    slug: "Аниме",
  },
  {
    name: "cartoon",
    slug: "Мультфильм",
  },
  {
    name: "animated-series",
    slug: "Анимационный сериал",
  },
];
</script>
<style>
.btn {
  align-self: flex-end;
}
@media (max-width: 887px) {
  .form-group {
    width: 100% !important;
  }
  .form-control {
    width: 100% !important;
  }
  .filter-cont {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .btn {
    align-self: center;
  }
}
.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
}

.form-control {
  background-color: #212121;
  border: 1px solid #555 !important;
  border-radius: 5px;
  color: white;
  padding: 0.5rem;
  font-size: 16px;
  border-radius: 5px;
  padding: 10px;
  height: 39px;
  width: auto;
}
</style>
