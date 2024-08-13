<template>
  <footer class="footer mt-xxl">
    <div class="footer-content container">
      <div class="footer-left">
        <div class="footer-logo mb-l">
          <NuxtLink to="/" class="font-beer color-gray100 logo hov-text"
            >Laraptxe<span class="logo-sub color-primary"
              >.films</span
            ></NuxtLink
          >
        </div>
        <nav class="d-flex items-center">
          <ul class="d-flex gap-s nav-lists">
            <li class="d-flex items-center nav-list hov-text">
              <NuxtLink
                to="/"
                class="font-ubuntu color-gray100 fs-m d-flex items-center"
                >Фильмы</NuxtLink
              >
            </li>
            <li class="d-flex items-center nav-list hov-text">
              <NuxtLink
                to="/"
                class="font-ubuntu color-gray100 fs-m d-flex items-center"
                >Сериалы</NuxtLink
              >
            </li>
            <li class="d-flex items-center nav-list hov-text">
              <NuxtLink
                to="/"
                class="font-ubuntu color-gray100 fs-m d-flex items-center"
                >Аниме</NuxtLink
              >
            </li>
            <li class="d-flex items-center nav-list hov-text">
              <NuxtLink
                to="/"
                class="font-ubuntu color-gray100 fs-m d-flex items-center"
                >Контакты</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="footer-right d-flex flex-column gap-s">
        <div class="footer-contact">
          <p><i class="fas fa-phone-alt"></i> Телефон: (123) 456-7890</p>
          <p><i class="fas fa-envelope"></i> Email: info@yourcompany.com</p>
        </div>
        <div class="footer-social">
          <a href="#" aria-label="Facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Ваше Компания. Все права защищены.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
p {
  text-align: right;
}
.footer {
  background-color: #111111; /* Основной цвет фона */
  color: #ffffff; /* Цвет текста */
  padding: 40px 20px;
  font-family: Arial, sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-left,
.footer-right {
  flex: 1;
}

.footer-logo h1 {
  margin: 0;
  color: rgb(145, 47, 202); /* Цвет логотипа */
  font-size: 2rem;
}

.footer-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
}

.footer-nav a {
  color: #ffffff; /* Цвет ссылок */
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  transition: color 0.3s;
}

.footer-nav a:hover {
  color: rgb(145, 47, 202); /* Цвет ссылок при наведении */
}

.footer-contact p {
  margin: 5px 0;
  font-size: 1rem;
}

.footer-contact i {
  margin-right: 10px;
  color: rgb(145, 47, 202); /* Цвет иконок контактов */
}

.footer-social {
  display: flex;
  justify-content: end;
  gap: 15px;
}

.footer-social a {
  color: #ffffff; /* Цвет иконок соцсетей */
  font-size: 1.5rem;
  transition: color 0.3s;
}

.footer-social a:hover {
  color: rgb(145, 47, 202); /* Цвет иконок соцсетей при наведении */
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
  font-size: 0.875rem;
}

.footer-bottom p {
  margin: 0;
}

/* Адаптивный дизайн для мобильных устройств */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .footer-left,
  .footer-right {
    text-align: center;
  }

  .footer-nav ul {
    flex-direction: column;
    gap: 10px;
  }

  .footer-social a {
    font-size: 1.2rem;
  }
}
</style>
