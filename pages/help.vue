<template>
    <h1 class="font-bold">Help page</h1>
</template>

<script setup>
const route = useRoute();

// Meta and SEO
definePageMeta({
    middleware: ["auth"],
    title: "Manage Hub - Help",
});
useHead({
    meta: [{ property: "og:title", content: `${route.meta.title}` }],
    title: `${route.meta.title}`,
});
</script>

<style></style>
