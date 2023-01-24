// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss",
        "nuxt-icon",
        "@nuxtjs/supabase",
        "@pinia/nuxt",
        "@pinia-plugin-persistedstate/nuxt",
        "@vueuse/nuxt",
    ],
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@/assets/css/main.css"],
    app: {
        head: {
            title: "Manage Hub",
            meta: [
                // <meta name="description" content="My amazing site">
                {
                    name: "description",
                    content:
                        "Manage Hub is a management website application that allows you keep track of all your current activities all in one place. Manage your activities now!",
                },
            ],
        },
    },
});
