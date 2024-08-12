export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    // Функция для удаления рекламных элементов
    const removeAds = () => {
      const adSelectors = [
        'iframe[src*="ads"]',
        'iframe[src*="adservice"]',
        'div[class*="ad"]',
        "ins.adsbygoogle",
        'div[id^="google_ads"]',
        'video[src*="preroll"]',
        'div[id^="epom"]',
        'img[src*="FonBet"]',
        'div[id="banner_pause"]',
        'video[src*="stream"]',
        "div.hdvplayer",
        'div[style*="display: flex; align-items: center; justify-content: center;"]',
      ];

      adSelectors.forEach((selector) => {
        const ads = document.querySelectorAll(selector);
        ads.forEach((ad) => ad.remove());
      });
    };

    // Использование MutationObserver для отслеживания изменений в DOM
    const observer = new MutationObserver(() => {
      removeAds();
    });

    // Настройки для MutationObserver
    const config = {
      childList: true,
      subtree: true,
    };

    // Запуск наблюдателя
    nuxtApp.hook("page:finish", () => {
      observer.observe(document.body, config);
      removeAds(); // Вызовем сразу, чтобы убрать уже загруженные элементы
    });

    // Остановка наблюдателя при смене маршрута
    nuxtApp.hook("page:start", () => {
      observer.disconnect();
    });
  }
});
