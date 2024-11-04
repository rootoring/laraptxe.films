<template>
  <div class="container d-flex items-center justify-around gap-m error-page">
    <!-- Основное сообщение -->
    <div class="text-content">
      <h1 class="color-primary fs-xl">Такой страницы нет</h1>
      <p class="quote">
        <span class="typing">{{ currentQuote }}</span>
        <span class="cursor color-primary">|</span>
      </p>
      <!-- Кнопка для перехода на главную страницу -->
      <NuxtLink to="/"><button>Вернуться на главную</button></NuxtLink>
    </div>
    <!-- Изображение для визуального эффекта -->
    <img src="/404.gif" alt="404 Error" class="error-image" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const quotes = [
  "Ты зашёл на путь, который не существует... Как и Итачи, пытавшийся показать Саске свой истинный путь.",
  "Некоторые пути закрыты навсегда, как и тайны, что унес с собой Итачи.",
  "Как Итачи оставил свой последний след для Саске, так и эта страница оставляет за собой пустоту.",
  "Иногда, чтобы понять, куда идти, нужно сначала потеряться... даже если ты, как Саске, ищешь ответы.",
  "Этот путь пуст... Может, он скрывает свои тайны, как Итачи скрыл правду от Саске.",
  "Ты, как Саске, ищешь то, чего нет... Пора вернуться назад.",
  "Итачи знал, что некоторые дороги ведут в пустоту. Эта страница — одна из таких.",
  "Ошибиться может каждый, даже лучший ниндзя. Возвращайся, чтобы найти свой путь заново.",
  "Как и Итачи, иногда мы оставляем за собой тайны, которые никто не найдёт.",
  "Этот путь, как воспоминание о битве между Итачи и Саске, закрыт навсегда.",
];

const currentQuote = ref("");
let quoteIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // Скорость печатания
const erasingSpeed = 50; // Скорость удаления
const delayBetweenQuotes = 2000; // Пауза между цитатами

const typeQuote = () => {
  if (charIndex < quotes[quoteIndex].length) {
    currentQuote.value += quotes[quoteIndex][charIndex];
    charIndex++;
    setTimeout(typeQuote, typingSpeed);
  } else {
    setTimeout(eraseQuote, delayBetweenQuotes);
  }
};

const eraseQuote = () => {
  if (charIndex > 0) {
    currentQuote.value = currentQuote.value.slice(0, -1);
    charIndex--;
    setTimeout(eraseQuote, erasingSpeed);
  } else {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    setTimeout(typeQuote, typingSpeed);
  }
};

onMounted(() => {
  typeQuote();
});
</script>

<style scoped>
/* Основные стили для страницы */
.container {
  height: 100vh;
  text-align: center;
}

.text-content {
  width: 50%;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.quote {
  font-style: italic;
  color: #a0a0a0;
  margin-bottom: 1.5rem;
}

.cursor {
  display: inline-block;
  width: 2px;
  height: 1.2rem;
  animation: blink 0.7s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

/* Изображение ошибки */
.error-image {
  width: 50%;
  height: auto;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column-reverse;
    justify-content: center;
    padding: 1.5rem;
  }

  .text-content {
    width: 100%;
  }

  h1 {
    font-size: 2rem;
  }

  .quote {
    font-size: 1rem;
  }

  .error-image {
    width: 80%;
    margin-top: 1rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.8rem;
  }

  .quote {
    font-size: 0.9rem;
  }

  .error-image {
    width: 90%;
  }
}
</style>
