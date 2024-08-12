// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: "icon", type: "image/jpg", href: "logoSite.jpg" }],
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
