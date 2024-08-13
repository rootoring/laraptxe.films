// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Laraptxe Films - Ваш онлайн кинотеатр с лучшими фильмами и сериалами. Наслаждайтесь бесплатным просмотром в высоком качестве.",
        },
        {
          name: "keywords",
          content:
            "онлайн кинотеатр, фильмы, сериалы, смотреть онлайн, бесплатно, в высоком качестве",
        },
        { name: "author", content: "Laraptxe Films Team" },
        { property: "og:title", content: "Laraptxe Films - Онлайн кинотеатр" },
        {
          property: "og:description",
          content:
            "Laraptxe Films - Ваш онлайн кинотеатр с лучшими фильмами и сериалами. Наслаждайтесь бесплатным просмотром в высоком качестве.",
        },
        { property: "og:image", content: "logoSite.jpg" },
        { property: "og:url", content: "https://laraptxe.ru" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Laraptxe Films - Онлайн кинотеатр" },
        {
          name: "twitter:description",
          content:
            "Laraptxe Films - Ваш онлайн кинотеатр с лучшими фильмами и сериалами. Наслаждайтесь бесплатным просмотром в высоком качестве.",
        },
        { name: "twitter:image", content: "logoSite.jpg" },
      ],
      link: [
        { rel: "icon", type: "image/jpg", href: "logoSite.jpg" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  plugins: [
    { src: "../plugins/gtag.client.ts", mode: "client" },
    { src: "../plugins/yandex-metrika.client.ts", mode: "client" },
  ],
  css: ["~/assets/scss/main.scss"],
  build: {
    loaders: {
      scss: {
        implementation: require("sass"),
      },
    },
  },
});
