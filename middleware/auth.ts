export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser();
    if (!user && to.path === "/about") {
        navigateTo("/login");
    } else if (user && to.path === "/login") {
        navigateTo("/about");
    }
});
