<template>
  <div class="film-card text-center">
    <div class="film-header">
      <h3 class="fs-l">{{ movie.name }}</h3>
      <span class="subtitle">{{ movie.alternativeName }}</span>
    </div>
    <div class="film-rating mt-l">
      <p>
        Рейтинг: <strong>{{ movie?.rating?.toFixed(1) || "—" }}</strong>
      </p>
    </div>

    <div class="film-details">
      <p><span class="highlight">В роли:</span> {{ movie.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  movie: {
    type: Object,
  },
});
</script>

<style scoped lang="scss">
.film-card {
  height: 100%;
  background-color: #333333;
  padding: 15px;
  border-radius: 8px;
  color: white;
  max-width: 400px;
  min-width: 320px;
  transition: all 0.3s;
  &:hover {
    background-color: #414040;
  }
}

.film-header h3 {
  color: #914fca;
  margin-bottom: 5px;
}

.subtitle {
  font-size: 0.9rem;
  color: #b3b3b3;
}

.film-rating {
  margin: 10px 0;
  font-size: 1rem;
  color: #ffffff;
}

.film-description {
  margin: 10px 0;
  color: #ddd;
}

.film-details {
  margin-top: 10px;
  font-size: 0.9rem;
}

.highlight {
  color: #914fca;
}
</style>
