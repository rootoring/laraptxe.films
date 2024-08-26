// middleware/auth.global.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const user = useState("user").value;

  // Исключаем страницы, которые не требуют аутентификации
  const publicPages = ["/auth"];

  if (!user && !publicPages.includes(to.path)) {
    return navigateTo("/auth");
  }
});
