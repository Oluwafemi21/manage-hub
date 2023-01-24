<template>
    <h1 class="font-bold">Pricing</h1>
</template>

<script setup>
const route = useRoute();
definePageMeta({
    middleware: ["auth"],
    title: "Manage Hub - Pricing",
});
useHead({
    meta: [{ property: "og:title", content: `${route.meta.title}` }],
    title: `${route.meta.title}`,
});
</script>

<style></style>
