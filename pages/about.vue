<template>
    <div class="font-dm-sans">
        <h1 class="text-red-500">About Page</h1>
        <p>My about page</p>
        <form class="my-10 px-6">
            <FormBaseInput label="Name" v-model="firstName"></FormBaseInput>
        </form>

        {{ firstName }}
    </div>
</template>

<script setup>
import { ref } from 'vue'
definePageMeta({
  middleware: "auth",
});
const firstName = ref("")

</script>

<style>

</style>