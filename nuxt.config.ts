// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
        link: [{ rel: 'icon', type: 'image/jpg', href: 'logoSite.jpg' }]
    }
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
