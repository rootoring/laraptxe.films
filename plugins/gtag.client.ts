import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(() => {
  if (process.client) {
    // Загрузка gtag.js скрипта
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-YENRVPVTN2";
    document.head.appendChild(script);

    // Инициализация gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-YENRVPVTN2");
  }
});
