<template>
  <div class="container">
    <ActorLoader v-if="personLoadet" />
    <div class="actor-page film-info mt-l mb-m" v-else>
      <div class="actor-header d-flex gap-s">
        <img :src="actor.photo" :alt="actor.name" class="actor-photo" />
        <div class="actor-info">
          <h1 class="actor-names">{{ actor.name }}</h1>
          <p class="actor-en-name">{{ actor.enName }}</p>

          <div class="actor-details mt-m">
            <div class="actor-category" v-if="actor?.birthday">
              <h2 class="category-title">Дата рождения:</h2>
              <p class="category-value">
                {{ formatDate(actor?.birthday) }} ({{ actor?.age }}
                лет)
              </p>
            </div>

            <div class="actor-category" v-if="actor?.birthPlace">
              <h2 class="category-title">Место рождения:</h2>
              <p class="category-value" v-for="(place, i) of actor?.birthPlace">
                {{ place.value
                }}<span v-if="i < actor?.birthPlace?.length - 1">,</span>
              </p>
            </div>

            <div class="actor-category" v-if="actor?.growth">
              <h2 class="category-title">Рост:</h2>
              <p class="category-value">{{ actor?.growth }} см</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="actor-facts" v-if="actor?.facts?.length > 0">
      <h2 class="facts-title">Факты</h2>
      <ul class="d-flex flex-column gap-xs">
        <li
          v-for="(fact, index) in visibleFacts"
          :key="fact.value"
          class="fact-item py-xs px-xxs"
        >
          <p v-html="fact.value"></p>
          <i class="fas fa-quote-right color-gray700"></i>
        </li>
      </ul>

      <div v-if="actor?.facts?.length > 3" class="toggle-facts-btn">
        <div @click="showAllFacts = !showAllFacts" class="toggle-btn">
          {{ showAllFacts ? "Скрыть" : "Показать ещё" }}
          <span class="arrow" :class="showAllFacts ? 'open' : ''"
            ><i class="fas fa-angle-right"></i
          ></span>
        </div>
      </div>
    </div>

    <div class="mt-m">
      <h2 class="facts-title">Фильмы с участием:</h2>
      <TransitionGroup name="list" tag="div" class="actor-films">
        <NuxtLink
          class="d-flex flex-center"
          :to="'/film/' + movie.id"
          v-for="movie of visibleFilms"
          ><actorFilmCard :movie="movie" class="flex"
        /></NuxtLink>
      </TransitionGroup>
      <div v-if="actor?.movies?.length > 9" class="toggle-facts-btn">
        <div @click="showAllFilms = !showAllFilms" class="toggle-btn">
          {{ showAllFilms ? "Скрыть" : "Показать всё" }}
          <span class="arrow" :class="showAllFilms ? 'open' : ''"
            ><i class="fas fa-angle-right"></i
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "../../store/store";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useStore();
const actor = ref({});
const showAllFacts = ref(false);
const showAllFilms = ref(false);
const personLoadet = ref(true);

// Функция для отображения первых трёх или всех фактов
const visibleFacts = computed(() => {
  return showAllFacts.value
    ? actor.value.facts
    : actor?.value?.facts?.slice(0, 3);
});
const visibleFilms = computed(() => {
  return showAllFilms.value
    ? actor.value.movies.filter((i) => i.name !== null)
    : actor?.value?.movies?.filter((i) => i.name !== null).slice(0, 9);
});

onMounted(async () => {
  await store.fetchPerson(route.params.id);
  actor.value = store.person;
  personLoadet.value = false;
});

// Функция для форматирования даты
const formatDate = (dateString) => {
  if (!dateString) return "";
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("ru-RU", options);
};
</script>

<style>
.actor-films {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  align-items: stretch;
}
.toggle-facts-btn {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.toggle-btn {
  background: none;
  border: none;
  color: rgb(145, 47, 202);
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.arrow {
  font-size: 12px;
}

/* Поворот стрелки при открытых фактах */
.toggle-btn .arrow {
  transform: rotate(90deg);
  font-size: 15px;
  margin-left: 5px;
}

.toggle-btn .arrow.open {
  transform: rotate(270deg);
}
.all {
  color: rgb(162, 68, 216);
}

.actor-page {
  padding: 20px;
  background-color: #333333;
  border-radius: 8px;
}

.actor-header {
  display: flex;
  align-items: flex-start;
}

.actor-photo {
  width: 150px;
  height: auto;
  border-radius: 8px;
}

.actor-info {
  flex: 1;
}

.actor-names {
  font-size: 2rem;
  color: rgb(145, 47, 202);
  margin-bottom: 10px;
}

.actor-en-name {
  font-size: 18px;
  color: #b0b0b0;
  margin-bottom: 20px;
}

.actor-details {
  margin-bottom: 20px;
}

.actor-category {
  display: flex;
  gap: 10px;
  margin-bottom: 7px;
}

.category-title {
  font-size: 20px;
  color: #d0d0d0;
  margin-bottom: 5px;
}

.category-value {
  display: flex;
  font-size: 18px;
  color: #7f7f7f;
}

.actor-facts {
  margin-top: 30px;
}

.facts-title {
  font-size: 24px;
  color: #d0d0d0;
  margin-bottom: 20px;
}

.fact-item {
  background-color: #303030;
  border-left: 5px solid rgb(145, 47, 202);
  padding: 15px 20px;
  color: #e0e0e0;
  border-radius: 8px;
  position: relative;
}

.fa-quote-right {
  position: absolute;
  top: 10px;
  right: 10px;
}
@media (max-width: 1000px) {
  .actor-films {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }
}
@media (max-width: 768px) {
  .actor-films {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
  }
  .actor-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .actor-photo {
    width: 130px;
  }

  .actor-names {
    font-size: 1.5rem;
  }

  .category-title,
  .category-value {
    font-size: 13px;
  }

  .facts-title {
    font-size: 20px;
  }

  .fact-item {
    font-size: 16px;
  }
  .actor-category {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .category-title {
    margin: 10px 0 0 0;
  }
}

@media (max-width: 480px) {
  .actor-photo {
    width: 80px;
  }

  .actor-names {
    font-size: 1.25rem;
  }

  .category-title,
  .category-value {
    font-size: 14px;
  }

  .facts-title {
    font-size: 18px;
  }

  .fact-item {
    font-size: 14px;
  }
}
</style>
