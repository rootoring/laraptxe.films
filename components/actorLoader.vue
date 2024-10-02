<template>
  <div class="profile">
    <div class="header actor-page">
      <div class="profile-img">
        <div class="loader-placeholder"></div>
      </div>
      <div class="profile-details">
        <h2 class="name">
          <div class="loader-line"></div>
        </h2>
        <p class="info">
          <div class="loader-line short"></div>
        </p>
        <p class="info">
          <div class="loader-line medium"></div>
        </p>
        <p class="info">
          <div class="loader-line"></div>
        </p>
      </div>
    </div>
    <div class="facts">
      <h3>Факты</h3>
      <div class="fact">
        <div class="loader-line medium"></div>
      </div>
      <div class="fact">
        <div class="loader-line"></div>
      </div>
      <div class="fact">
        <div class="loader-line short"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Основные стили */
.profile {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  color: white;
  border-radius: 10px;
}

.header {
  display: flex;
  gap: 20px;
  align-items: center;
}

.profile-img {
  width: 150px;
  height: 200px;
  background-color: #444;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader-placeholder {
  width: 150px;
  height: 200px;
  background-color: #8e2de2;
  border-radius: 5px;
  animation: pulse 1s infinite;
}

.profile-details {
 display: flex;
 flex-direction: column;
 width: 50%;
}

.name {
  font-size: 24px;
  margin: 0 0 10px;
}

.info {
  font-size: 16px;
  margin: 5px 0;
}

.facts {
  font-size: 24px;
  color: #d0d0d0;
  margin-bottom: 20px;
}

.fact {
  margin: 10px 0;
}

.loader-line {
  width: 100%;
  height: 20px;
  background-color: #444;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
}

.loader-line.short {
  width: 40%;
}

.loader-line.medium {
  width: 60%;
}

.loader-line::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

@keyframes pulse {
  0% {
    transform: scale(.8);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
}

/* Адаптивные стили */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: center;
  }

  .profile-img {
    width: 120px;
    height: 160px;
  }

  .loader-placeholder {
    width: 100px;
    height: 140px;
  }

  .name {
    font-size: 20px;
  }

  .info {
    font-size: 14px;
  }

  .facts {
    padding: 5px 0;
  }

  .loader-line {
    height: 15px;
  }
}

@media (max-width: 480px) {
  .header {
    gap: 10px;
  }

  .profile-img {
    width: 100px;
    height: 140px;
  }

  .loader-placeholder {
    width: 90px;
    height: 130px;
  }

  .name {
    font-size: 18px;
  }

  .info {
    font-size: 12px;
  }

  .loader-line {
    height: 12px;
  }
}
</style>
