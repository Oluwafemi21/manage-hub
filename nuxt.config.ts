// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss",
        "nuxt-icon",
        "@nuxtjs/supabase",
        "@pinia/nuxt",
    ],
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@/assets/css/main.css"],
    app: {
        head: {
            charset: "utf-16",
            viewport: "width=500, initial-scale=1",
            title: "Manage Hub",
        },
    },
});
