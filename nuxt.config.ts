// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  css: ["~/assets/scss/main.scss"],
  build: {
    loaders: {
      scss: {
        implementation: require("sass"),
      },
    },
  },
});
