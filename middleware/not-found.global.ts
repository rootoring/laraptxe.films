export default defineNuxtRouteMiddleware((to) => {
  if (!to.matched.length) {
    return { name: "404" }; // Перенаправляет на страницу 404
  }
});
