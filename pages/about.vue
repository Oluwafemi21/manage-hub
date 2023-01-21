<template>
    <div class="font-dm-sans">
        <h1 class="text-red-500">About Page</h1>
        <p>My about page</p>
        <form class="my-10 px-6">
            <FormBaseInput label="Name"></FormBaseInput>
        </form>

        user - {{ user ? user.user_metadata.full_name : "Loading..." }}
    </div>
</template>

<script setup>
definePageMeta({
    middleware: ["auth"],
    title: "Manage Hub - About Us",
});
// import { ref } from 'vue'
</script>

<style></style>
