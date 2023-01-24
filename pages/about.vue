<template>
    <div class="font-dm-sans">
        <h1 class="text-red-500 font-bold">About Page</h1>
        <p>
            {{
                auth.user
                    ? `${auth.user.user_metadata.full_name} is logged in`
                    : "Loading..."
            }}
        </p>
    </div>
</template>

<script setup>
import { useUserStore } from "../store/user";

const route = useRoute();
const auth = useUserStore();

// Meta and SEO
definePageMeta({
    middleware: ["auth"],
    title: "Manage Hub - About Us",
});
useHead({
    meta: [{ property: "og:title", content: `${route.meta.title}` }],
    title: `${route.meta.title}`,
});
</script>

<style></style>
