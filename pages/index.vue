<template>
    <div>
        <h1 class="font-bold">Home Page</h1>
        The user is logged in: {{ user }}
        Auth -
        {{ auth?.user }}
    </div>
</template>

<script setup>
import { useUserStore } from "../store/user";
const user = isAuthenticated();
const auth = useUserStore();
const route = useRoute();
definePageMeta({
    title: "Manage Hub - Home",
});
useHead({
    meta: [{ property: "og:title", content: `${route.meta.title}` }],
    title: `${route.meta.title}`,
});
</script>
<style></style>
