// middleware/auth.global.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const user = useState("user").value;

  // Исключаем страницы, которые не требуют аутентификации
  const publicPages = ["/auth"];
  if (process.client) {
    if (!localStorage.getItem("user") && !publicPages.includes(to.path)) {
      return navigateTo("/auth");
    }
  }
});
