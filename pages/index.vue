<template>
    <div>
        <h1>Home Page</h1>
        <p>My home page</p>
        The user is logged in: {{ user }}
    </div>
</template>

<script setup>
definePageMeta({
    title: "Manage Hub - Home",
});

const user = isAuthenticated();
</script>
<style></style>
