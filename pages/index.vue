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
definePageMeta({
    title: "Manage Hub - Home",
});

const user = isAuthenticated();
const auth = useUserStore();
</script>
<style></style>
